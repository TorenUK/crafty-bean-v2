import React, { useState } from "react";

import "./BasketItem.css";

import { useStateValue } from "./StateProvider";

// material ui
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function BasketItem({ id, name, price, image, message, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  // customized modal input

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const sendInput = () => {
    console.log();
  };

  return (
    <div className="basketItem">
      <img src={image} />

      <div className="basketItem__info">
        <h4>{name}</h4>
        <h3>£{price}</h3>
        <h5> your custom message: </h5>
        <p>{message}</p>
        {/* ONLY SHOW THIS BUTTON IN BASKET 
        IF hideButton IS TRUE HIDE THE BUTTON*/}
        {!hideButton && (
          <div className="basketItem__remove">
            <HighlightOffIcon onClick={removeFromBasket} />
            <h5>remove from basket</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
