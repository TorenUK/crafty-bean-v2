import React, { useState } from "react";
import Modal from "./Modal";
import "./GiftItem.css";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useStateValue } from "./StateProvider";

function GiftItem({ id, name, price, image1, image2, image3 }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch some action to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        price: price,
        image: image1,
      },
    });
  };

  return (
    <div className="giftItem">
      <div className="giftItem__slider">
        <Carousel>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
          {/*if there are 4 images present*/}
          {/*{image4 ? : <img src={image4}>} ????????*/}
        </Carousel>
      </div>
      <div className="giftItem__text">
        <h4>{name}</h4>
        <h4>£{price}</h4>
        <div>
          <p>handmade</p>
          <FavoriteBorderIcon />
        </div>
        <div>
          <p>dispatch: 1-2 working days</p>
          <LocalShippingIcon />
        </div>
        <Button onClick={addToBasket} variant="outlined" size="small">
          add to basket
        </Button>
      </div>
    </div>
  );
}

export default GiftItem;
