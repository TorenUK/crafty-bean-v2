import React from "react";
import "./FooterLinks.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="footerLinks">
      <div className="footerLinks__link">
        <Link to="#">
          <InstagramIcon />
        </Link>
      </div>
      <div className="footerLinks__link">
        <Link to="#">
          <FacebookIcon />
        </Link>
      </div>
      <div className="footerLinks__link">
        <Link to="#">
          <MailOutlineIcon />
        </Link>
      </div>
      <div className="footerLinks__link">
        <Link to="/basket">
          <ShoppingBasketIcon />
        </Link>
      </div>
    </div>
  );
}

export default FooterLinks;
