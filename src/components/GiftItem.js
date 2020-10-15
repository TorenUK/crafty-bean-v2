import React, { useState, useEffect, useRef } from "react";

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
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

import { useStateValue } from "./StateProvider";

function GiftItem({
  id,
  name,
  price,
  image1,
  image2,
  image3,
  newIn,
  plantableAttached,
  freeShipping,
  customisable,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const [clicked, setClicked] = useState(false);

  const [input, setInput] = useState("");

  const addToBasket = () => {
    setClicked(!clicked);

    // DISPATCH NEW ITEM TO BASKET IN DATA LAYER
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        price: price,
        image: image1,
        message: input,
        freeShipping: freeShipping,
      },
    });
  };

  return (
    <div className="giftItem">
      {/* RENDER IF USER CLICKS ON "VIEW" */}
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
          {customisable ? (
            <form>
              <div className="giftItem__open__title">
                {" "}
                <CreateIcon />
                <h3>customise your gift</h3>
              </div>
              {/* SETTING INPUT STATE TO USER INPUT */}
              <textarea
                wrap="hard"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="enter your message..."
              ></textarea>
              <div className="giftItem__open__submit">
                <Button size="large" onClick={addToBasket}>
                  add to basket
                </Button>
              </div>
              <div className="giftItem__open__close">
                {" "}
                <Button
                  size="medium"
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  close
                </Button>
              </div>
            </form>
          ) : (
            <div className="giftItem__description">
              <p>
                Small handmade resin plant pot, perfect for succulents, cacti
                etc. This is our bronze planter with gold flakes, it makes a
                great addition to any room and also makes a great gift.
              </p>
              <br />
              <p>
                -Handmade by me in Leicester
                <br /> - Due to them being handmade each pot is unique
                <br /> - Each pot is made using resin and is sprayed with
                sealant
                <br /> - Recommended for indoor use
              </p>
              <br />
              <p>Dimensions: Roughly H-7cm X W-8CM X D-6CM</p>
              <br />
              <p>Please note: Plant is not included.</p>
              <br />
              <p>
                All pots are shipped royal mail 2nd class unless you choose
                “express” shipping in which case they will be sent 1st class
                royal mail.
              </p>
              <div className="giftItem__open__submit">
                <Button size="large" onClick={addToBasket}>
                  add to basket
                </Button>
              </div>
              <div className="giftItem__open__close">
                {" "}
                <Button
                  size="medium"
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  close
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : null}
      {newIn ? <div className="newIn">NEW IN</div> : null}

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
        <h3>£{price}</h3>
        <div>
          <p className="giftItem__text__para">handmade</p>
          <div className="handmade">
            <FavoriteBorderIcon />
          </div>
        </div>

        <div>
          {plantableAttached ? (
            <div>
              <p className="giftItem__text__para">
                plantable <br /> attached
              </p>
              <div className="flower">
                <LocalFloristIcon />
              </div>
            </div>
          ) : null}
        </div>
        {freeShipping ? (
          <div>
            <p className="giftItem__text__para">Free UK Shipping</p>
            <div className="shipping">
              <LocalShippingIcon />
            </div>
          </div>
        ) : null}

        <div className="giftItem__text__buttons">
          <div>
            <Button
              onClick={() => {
                setClicked(!clicked);
              }}
              variant="outlined"
              size="small"
            >
              view
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                setClicked(!clicked);
              }}
              variant="outlined"
              size="small"
            >
              customise
            </Button>
          </div>
        </div>

        {/* <Button onClick={addToBasket} variant="outlined" size="small">
          add to basket
        </Button> */}
      </div>
    </div>
  );
}

export default GiftItem;
