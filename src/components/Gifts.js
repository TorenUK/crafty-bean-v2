import React, { useState, useEffect } from "react";
import "./Gifts.css";
import GiftItem from "./GiftItem";
import FooterLinks from "./FooterLinks";
import database from "./firebase";
import uuid from "react-uuid";

function Gifts() {
  const [items, setItems] = useState([]);

  //run everytime component loads:

  useEffect(() => {
    database
      .collection("gifts")
      .onSnapshot((snapshot) =>
        setItems(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div id="gifts" className="gifts">
      <div className="gifts__container">
        {/* passing the data down to GiftItem.js */}
        {items.map(({ name, price, images }) => (
          <GiftItem
            id={uuid()}
            name={name}
            price={price}
            image1={images[0]}
            image2={images[1]}
            image3={images[2]}
          />
        ))}
      </div>
      <div className="gifts__logo">
        <img src="CraftyBean.png" />
      </div>
      <div className="gifts__nav">
        <FooterLinks />
      </div>
    </div>
  );
}

export default Gifts;
