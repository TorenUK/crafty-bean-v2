import React from "react";
import "./Info.css";
import FooterLinks from "./FooterLinks";

function Info() {
  return (
    <div id="info" className="info">
      <div className="info__top-row">
        <div className="info__top__segment">
          <h2>what is a seed bomb card?</h2>
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
        <div className="info__middle__segment">
          <h2>coming soon:</h2>
          <h3>handmade planters</h3>
          <h3>seed bomb prints</h3>
        </div>
        <div className="info__middle__segment"></div>
        <div className="info__middle__segment"></div>
        <div className="info__middle__segment"></div>
        <div className="info__middle__segment"></div>
        <div className="info__middle__segment">
          {" "}
          <h3>
            <span> FREE </span>delivery on all UK orders
          </h3>
        </div>
      </div>
      <div className="info__bottom-row">
        <div className="info__bottom__segment">
          <div className="info__bottom__segment__logo">
            <img src="CraftyBean.png" />
          </div>
        </div>
        <div className="info__bottom__segment">
          <div className="info__bottom__segment__nav">
            <FooterLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
