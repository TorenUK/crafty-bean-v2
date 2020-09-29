import React from "react";
import "./BasketItem.css";

import { useStateValue } from "./StateProvider";

// material ui
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CreateIcon from "@material-ui/icons/Create";

function BasketItem({ id, name, price, image, hideButton, hideCustomize }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <div className="basketItem__image"></div>
      <img src={image} />
      <div className="basketItem__info">
        <h4>{name}</h4>
        {!hideCustomize && (
          <div className="basketItem__customize">
            {" "}
            <CreateIcon />
            <h4>customize gift</h4>
          </div>
        )}

        <h3>£{price}</h3>
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
