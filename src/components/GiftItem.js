import React from "react";
import "./GiftItem.css";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";

function GiftItem() {
  return (
    <div className="giftItem">
      <div className="giftItem__slider">
        <Carousel>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
        </Carousel>
      </div>
      <div className="giftItem__text">
        <h4></h4>
        <h3>£5.99</h3>
        <p>
          <span>15</span> available{" "}
        </p>
        <Button variant="outlined" size="medium">
          add to basket
        </Button>
      </div>
    </div>
  );
}

export default GiftItem;
