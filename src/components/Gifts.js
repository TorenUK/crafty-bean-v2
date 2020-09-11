import React, { useState, useEffect } from "react";
import "./Gifts.css";
import GiftItem from "./GiftItem";
import database from "./firebase";

function Gifts() {
  return (
    <div id="gifts" className="gifts">
      <div className="gifts__container"></div>
    </div>
  );
}

export default Gifts;
