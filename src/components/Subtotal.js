import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
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
      <Link to="/payment">proceed to checkout</Link>
    </div>
  );
}

export default Subtotal;

// getting subtotal value using the array reduce method

// use the reduce method to iterate over the basket

//add the total price to the accumulator
