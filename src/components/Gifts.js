import React from "react";
import "./Gifts.css";
import GiftIem from "./GiftItem";

function Gifts() {
  return (
    <div id="gifts" className="gifts">
      <h1>Personalised Gifts</h1>
      <div className="gifts__items">
        <GiftIem />
      </div>
    </div>
  );
}

export default Gifts;
