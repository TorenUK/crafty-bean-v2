import React from "react";
import "./BasketItem.css";

import { useStateValue } from "./StateProvider";

// material ui
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CreateIcon from "@material-ui/icons/Create";

function BasketItem({ id, name, price, image }) {
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
        <h3>{price}</h3>
        <div className="basketItem__customize">
          {" "}
          <CreateIcon />
          <h4>customize item</h4>
        </div>
        <div className="basketItem__remove">
          <HighlightOffIcon onClick={removeFromBasket} />
          <h5>remove from basket</h5>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
