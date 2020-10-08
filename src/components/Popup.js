import React from "react";

// components
import "./Popup.css";

// material ui
import { Button } from "@material-ui/core";

function Popup({ closePopup }) {
  return (
    <div className="popup">
      <div className="popup__inner">
        <h2>sign up for exclusive discounts!</h2>
        <form>
          <input placeholder="email" name="email" type="text" />
        </form>
        <Button size="small" variant="outlined" onClick={closePopup}>
          submit
        </Button>
        <Button size="small" variant="outlined" onClick={closePopup}>
          X
        </Button>
      </div>
    </div>
  );
}

export default Popup;
