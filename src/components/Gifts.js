import React, { useState, useEffect } from "react";

//components
import "./Gifts.css";
import GiftItem from "./GiftItem";
import FooterLinks from "./FooterLinks";
import database from "./firebase";
import BasketNotify from "./BasketNotify";

// material ui
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

import uuid from "react-uuid";
import { useStateValue } from "./StateProvider";

function Gifts() {
  const [items, setItems] = useState([]);
  const [{ basket }] = useStateValue();
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
      <div className="gifts__top">
        <div className="gifts__top__section">
          <h2>
            Personalised Gifts <LocalFloristIcon />
          </h2>
        </div>
      </div>
      <div className="gifts__container">
        {/* passing the data down to GiftItem.js */}
        {items.map(
          ({
            name,
            price,
            images,
            newIn,
            plantableAttached,
            freeShipping,
            customisable,
          }) => (
            <GiftItem
              key={Math.random()}
              id={uuid()}
              name={name}
              price={price}
              image1={images[0]}
              image2={images[1]}
              image3={images[2]}
              image4={images[3]}
              newIn={newIn}
              plantableAttached={plantableAttached}
              freeShipping={freeShipping}
              customisable={customisable}
            />
          )
        )}
      </div>

      <div className="gifts__logo">
        <img src="CraftyBean.png" />
      </div>

      <div className="gifts__nav">
        <FooterLinks />
      </div>
      <div className="gifts__notify">
        {basket?.length > 0 ? <BasketNotify /> : null}
      </div>
    </div>
  );
}

export default Gifts;
