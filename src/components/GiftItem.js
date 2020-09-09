import React from "react";
import "./GiftItem.css";
import "react-slideshow-image/dist/styles.css";

const slideImages = [];

function GiftItem() {
  return (
    <div className="giftItem">
      <h3>a gift item</h3>
      <img src="https://i.etsystatic.com/23541080/r/il/acd282/2406254481/il_794xN.2406254481_fzbg.jpg" />
      <p>
        <span>10</span> available
      </p>
      <p>gift item description</p>
      <h4>£5.99</h4>
      <button>add to basket</button>
    </div>
  );
}

export default GiftItem;
