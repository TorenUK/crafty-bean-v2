import React from "react";
import "./HomeLogo.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

function HomeLogo() {
  return (
    <div className="homeLogo">
      <HomeOutlinedIcon />
      <p>Home</p>
      <img src="CraftyBean.png" />
    </div>
  );
}

export default HomeLogo;
