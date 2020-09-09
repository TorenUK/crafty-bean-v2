import React from "react";
import "./GiftItem.css";

function GiftItem() {
  return (
    <div className="giftItem">
      <h3>a gift item</h3>
      <img src="https://d39eo07iavn1vt.cloudfront.net/Live/InstantPrint/Blog/Entry%20Images/CKEditorUploads/8fb629c7-eabf-40b4-a77a-3aa4c8228fbasimple-greetings-card-design.jpg" />
      <p>
        <span>10</span> available
      </p>
      <p>gift item description</p>
      <h4>gift item price</h4>
      <button>add to basket</button>
    </div>
  );
}

export default GiftItem;
