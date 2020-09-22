import React from "react";
import "./Info.css";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

function Info() {
  return (
    <div id="info" className="info">
      <div className="info__top-row">
        <div className="info__top__segment">
          <h3>what is a seed bomb card?</h3>
          <p>
            Our seed bomb cards are fun and unique geeeting cards. They’re A6
            size and come with a ‘seed bomb’ attatched so that the recipient can
            grow their own bee friendly, wild-flowers!
          </p>
          <p>
            They’re great for everyone and are available in a range of different
            designs to suit all occasions.
          </p>
          <p>
            Each seed bomb card comes with the card and seed bomb attatched, an
            envelope, instructions on how to use the seed bomb and they can be
            personalised with a short message on the back, chosen by you! You
            can also choose to have them posted to you or directly to the
            recipient.
          </p>
        </div>
      </div>
      <div className="info__middle-row">
        <div className="info__middle__segment">info</div>
        <div className="info__middle__segment">info</div>
        <div className="info__middle__segment">info</div>
      </div>
      <div className="info__bottom-row">
        <div className="info__bottom__segment">
          <h2>Subscribe for 10% off your first order</h2>
        </div>
        <div className="info__bottom__segment">
          <input type="text" placeholder="enter your email"></input>
        </div>
        <Button size="small" variant="outlined">
          Subscribe now
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default Info;
