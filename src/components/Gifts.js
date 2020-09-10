import React from "react";
import "./Gifts.css";
import GiftIem from "./GiftItem";
import database from "firebase";

function Gifts() {
  return (
    <div id="gifts" className="gifts">
      <div className="gifts__container">
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
