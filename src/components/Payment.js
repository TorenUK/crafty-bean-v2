import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BasketItem from "./BasketItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";
import db from "./firebase";
import { v4 as uuidv4 } from "uuid";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [customerId, setCustomerId] = useState("");

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
    setCustomerId(uuidv4());
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

        db.collection("orders").doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
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
                name={item.name}
                image={item.image}
                price={item.price}
                hideButton
                hideCustomize
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
              <CardElement onChange={handleChange} />

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
