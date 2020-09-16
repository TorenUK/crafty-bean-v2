import React from "react";
import "./GiftItem.css";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";

function GiftItem({ name, image1, image2, image3 }) {
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
        </Carousel>
      </div>
      <div className="giftItem__text">
        <h4>{name}</h4>
        <h3>£5.99</h3>

        <Button variant="outlined" size="medium">
          add to basket
        </Button>
      </div>
    </div>
  );
}

export default GiftItem;
