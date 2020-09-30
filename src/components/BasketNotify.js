import React from "react";
import "./BasketNotify.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function BasketNotify() {
  const [{ basket }] = useStateValue();

  return (
    <div className="basketNotify">
      <Link to="/basket">
        <ShoppingBasketIcon />
      </Link>
      {basket?.length !== 0 ? <span>{basket?.length}</span> : null}
    </div>
  );
}

export default BasketNotify;
