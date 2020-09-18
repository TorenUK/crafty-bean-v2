import React from "react";
import "./Info.css";
import Footer from "./Footer";

function Info() {
  return (
    <div id="info" className="info">
      <div className="info__top-row">
        <div className="info__segment">1</div>
        <div className="info__segment">2</div>
        <div className="info__segment">3</div>
      </div>
      <div className="info__middle-row">
        <div className="info__segment">1</div>
        <div className="info__segment">2</div>
        <div className="info__segment">3</div>
        <div className="info__segment">4</div>
        <div className="info__segment">5</div>
        <div className="info__segment">6</div>
        <div className="info__segment">7</div>
        <div className="info__segment">8</div>
        <div className="info__segment">9</div>
      </div>
      <div className="info__bottom-row">
        <div className="info__segment">1</div>
        <div className="info__segment">2</div>
        <div className="info__segment">3</div>
      </div>

      <Footer />
    </div>
  );
}

export default Info;
