import React from "react";
import "./Gifts.css";
import GiftIem from "./GiftItem";

function Gifts() {
  return (
    <div className="gifts">
      <h1>Personalised Gifts</h1>
      <div className="gifts__items">
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
        <GiftIem />
      </div>
    </div>
  );
}

export default Gifts;
