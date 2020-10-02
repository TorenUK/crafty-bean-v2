import React, { useState } from "react";

// components
import "./GiftItem.css";

// carousel
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// material ui
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CreateIcon from "@material-ui/icons/Create";

import { useStateValue } from "./StateProvider";

function GiftItem({ id, name, price, image1, image2, image3 }) {
  const [{ basket }, dispatch] = useStateValue();

  const [clicked, setClicked] = useState(false);

  const addToBasket = () => {
    setClicked(!clicked);
    alert(` added ${name} to basket`);

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
      {clicked ? (
        <div className="giftItem__open">
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

          <form>
            <CreateIcon />
            <h3>customize your gift</h3>
            <textarea placeholder="enter your message..."></textarea>
            <div className="giftItem__open__submit">
              <Button size="large" onClick={addToBasket}>
                add to basket
              </Button>
            </div>
            <div clasName="giftItem__open__close">
              {" "}
              <Button
                size="small"
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                close
              </Button>
            </div>
          </form>
        </div>
      ) : null}

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
          <p className="giftItem__text__para">handmade</p>
          <FavoriteBorderIcon />
        </div>
        <div>
          <p className="giftItem__text__para">dispatch: 1-2 working days</p>
          <LocalShippingIcon />
        </div>
        <Button
          onClick={() => {
            setClicked(!clicked);
          }}
          variant="outlined"
          size="small"
        >
          view
        </Button>
        {/* <Button onClick={addToBasket} variant="outlined" size="small">
          add to basket
        </Button> */}
      </div>
    </div>
  );
}

export default GiftItem;
