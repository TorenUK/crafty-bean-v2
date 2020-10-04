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

  useEffect(() => {
    // generate client secret every time basket amount changes

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    //stipe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
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
            amount: paymentIntent.amount / 100,
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>review items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                customerEmail={customerEmail}
                name={item.name}
                image={item.image}
                price={item.price}
                message={item.message}
                hideButton
              />
            ))}
          </div>
        </div>
        <div className="payment__method">
          <div className="payment__title">
            <h3>payment</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
                type="text"
                placeholder="email"
              ></input>
              <h4>address</h4>

              <input type="text" placeholder="address"></input>
              <h4>postcode</h4>
              <input type="text" placeholder="postcode"></input>
              <div className="stripe__element">
                <CardElement onChange={handleChange} />
              </div>

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        subtotal: {basket?.length} item(s){" "}
                        <strong>{value}</strong>
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
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
