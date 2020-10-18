import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// components
import BasketItem from "./BasketItem";
import "./Payment.css";
import axios from "./axios";
import database from "./firebase";

// functions etc
import { getBasketTotal } from "./Reducer";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, customer }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [customerEmail, setCustomerEmail] = useState("");

  const [shipping, setShipping] = useState(false);
  const [shippingCost, setShippingCost] = useState("");

  useEffect(() => {
    // generate client secret every time basket amount changes

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      // what we get back from our server...
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();

    basket.map((item) => {
      if (item.freeShipping == false) {
        setShipping(true);
      }
    });
  }, [basket]);

  // CARD ELEMENT STYLING

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "black",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleSubmit = async (e) => {
    //stipe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            address: {
              line1: e.target.address.value,
              postal_code: e.target.postal_code.value,
            },
            email: e.target.name.value,
          },
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = the payment confirmation.

        // pushing order confirmation to firestore

        // ADD CUSTOMER EMAIL TO DATA LAYER -- LATER USE THIS TO DISPLAY INDIVIDUAL ORDERS IN ORDERS.JS
        dispatch({
          type: "ADD_CUSTOMER",
          customer: customerEmail,
        });

        database
          .collection("customers")
          .doc(customerEmail)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            paid: paymentIntent.amount / 100,
            created: paymentIntent.created,
          });

        // empty the basket in the data layer

        dispatch({
          type: "EMPTY_BASKET",
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // user gets pushed to orders page
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //listen for changes inside the card element
    //display any errors

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__title">
          <h3>review items</h3>
        </div>
        <div className="payment__items">
          {basket.map((item) => (
            <div className="payment__item">
              {" "}
              <BasketItem
                key={Math.random()}
                id={item.id}
                customerEmail={customerEmail}
                name={item.name}
                image={item.image}
                price={item.price}
                message={item.message}
                hideButton
              />
            </div>
          ))}
        </div>

        <div className="payment__title">
          <h3>payment</h3>
        </div>

        {/* SHIPPING INPUT */}
        {/* ONLY DISPLAY IF AN ITEM IN THE BASKET DOES NOT HAVE FREE SHIPPING */}

        {shipping ? (
          <div className="payment__shipping">
            <h3>shipping</h3>
            <form>
              <div>
                {" "}
                <div>
                  <input type="radio" name="shipping" value="1st class" />
                  <label for="1st class">1st class</label>
                </div>
                <div>
                  <input type="radio" name="shipping" value="2nd class" />
                  <label for="2nd class">2nd class </label>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <h3>Shipping: free</h3>
        )}

        <form onSubmit={handleSubmit}>
          <input
            id="name"
            name="name"
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
            type="email"
            autoComplete="email"
            placeholder="email address"
          ></input>
          <input
            type="text"
            name="address"
            placeholder="address line 1"
            autoComplete="street-address"
          ></input>
          <input
            type="text"
            name="postal_code"
            placeholder="postal code"
            autoComplete="postal_code"
          ></input>

          <div className="stripe__element">
            <CardElement
              id="card-element"
              onChange={handleChange}
              options={cardStyle}
            />
          </div>

          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  subtotal: {basket?.length} item(s) <strong>{value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
          />

          <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>processing</p> : "pay now"}</span>
          </button>

          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Payment;
