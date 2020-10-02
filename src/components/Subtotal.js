import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

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
      <div className="subtotal__links">
        <div>
          <Link to="/payment">
            <Button variant="outlined">proceed to checkout</Button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <Button size="small" variant="outlined">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;

// getting subtotal value using the array reduce method

// use the reduce method to iterate over the basket

//add the total price to the accumulator
