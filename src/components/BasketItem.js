import React from "react";
import "./BasketItem.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useStateValue } from "./StateProvider";

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
        <HighlightOffIcon onClick={removeFromBasket} />
      </div>
    </div>
  );
}

export default BasketItem;
