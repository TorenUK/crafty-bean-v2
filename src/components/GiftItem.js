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
        <h2>Star Sign Seed Bomb Card</h2>
        <Carousel>
          <div>
            <img src="https://i.etsystatic.com/23541080/r/il/2afcc3/2406290305/il_794xN.2406290305_izon.jpg" />
          </div>
          <div>
            <img src="https://i.etsystatic.com/23541080/r/il/ba188d/2406290309/il_794xN.2406290309_9enq.jpg" />
          </div>
          <div>
            <img src="https://i.etsystatic.com/23541080/r/il/c12155/2358690686/il_794xN.2358690686_hqw8.jpg" />
          </div>
        </Carousel>
        <h3>£5.99</h3>
        <p>
          <span> 15 </span> available{" "}
        </p>
        <Button size="small" color="primary">
          add to basket
        </Button>
      </div>
    </div>
  );
}

export default GiftItem;
