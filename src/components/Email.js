import React from "react";

// components
import "./Email.css";

// material ui
import { Button } from "@material-ui/core";

//
import { Link } from "react-router-dom";

function Email() {
  return (
    <div className="email">
      <div className="email__container">
        {" "}
        <h1>contact us</h1>
        <div className="email__content">
          <h2>coming soon</h2>
        </div>
        <Link to="/">
          <Button>continue shopping</Button>
        </Link>
      </div>
    </div>
  );
}

export default Email;
