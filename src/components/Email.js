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
      <h1>contact us</h1>
      <h2>coming soon</h2>
      <Link to="/">
        <Button>continue shopping</Button>
      </Link>
    </div>
  );
}

export default Email;
