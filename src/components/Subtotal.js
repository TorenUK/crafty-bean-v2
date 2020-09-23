import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket?.length} items) :<strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

export default Subtotal;