import React from "react";
import "./BasketItem.css";

function BasketItem({ name, price, image }) {
  return (
    <div className="basketItem">
      <div>
        <h3>{name}</h3>
        <img src={image} />
        <p>{price}</p>
      </div>
    </div>
  );
}

export default BasketItem;
