import React from "react";
import "./FooterLinks.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function FooterLinks() {
  return (
    <div className="footerLinks">
      <div className="footerLinks__link">
        <InstagramIcon />
      </div>
      <div className="footerLinks__link">
        <FacebookIcon />
      </div>
      <div className="footerLinks__link">
        <ShoppingBasketIcon />
      </div>
    </div>
  );
}

export default FooterLinks;
