import React, { useState } from "react";

// components
import "./FooterLinks.css";

// material ui
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

function FooterLinks(emailOpen, setEmailOpen) {
  return (
    <div className="footerLinks">
      <div className="footerLinks__link">
        <a href="https://www.instagram.com/_craftybean/" target="blank">
          <InstagramIcon />
        </a>
      </div>
      <div className="footerLinks__link">
        <a
          href="https://www.facebook.com/_craftybean-107596764297226/"
          target="blank"
        >
          <FacebookIcon />
        </a>
      </div>
      <div className="footerLinks__link">
        <Link to="/email">
          <MailOutlineIcon />
        </Link>
      </div>
    </div>
  );
}

export default FooterLinks;
