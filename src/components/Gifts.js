import React, { useState, useEffect } from "react";
import "./Gifts.css";
import GiftItem from "./GiftItem";
import database from "./firebase";

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
        {items.map(({ name, images }) => (
          <GiftItem
            name={name}
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
