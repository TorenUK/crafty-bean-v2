import React from "react";
import "./Modal.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Modal() {
  return (
    <div className="modal">
      <div className="modal__container">
        <p>added to basket!</p>
        <ShoppingBasketIcon />
        <button>close</button>
      </div>
    </div>
  );
}

export default Modal;
