import React, { useState, useEffect } from "react";
import "./Gifts.css";
import GiftItem from "./GiftItem";
import database from "./firebase";
import { useStateValue } from "./StateProvider";

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
            id={Math.random()}
            name={name}
            price={price}
            image1={images[0]}
            image2={images[1]}
            image3={images[2]}
          />
        ))}
      </div>
    </div>
  );
}

export default Gifts;
