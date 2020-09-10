import React from "react";
import "./Prints.css";
import PrintItem from "./PrintItem";

function Prints() {
  return (
    <div id="prints" className="prints">
      <h1>Seed Bomb Prints</h1>
      <div className="prints__container">
        <PrintItem />
      </div>
    </div>
  );
}

export default Prints;
