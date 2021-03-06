import React, { useEffect, useRef, useState } from "react";

// components
import "./Popup.css";

// material ui
import { Button } from "@material-ui/core";

// other
import gsap from "gsap";

function Popup({ closePopup }) {
  const [submitted, setSubmitted] = useState(false);

  const popup = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popup.current,
      { x: -2000 },
      { x: 0, duration: 0.9, ease: "ease out " }
    );
  }, []);
  return (
    <div ref={popup} className="popup">
      <div className="popup__inner">
        <h2>sign up for 10% off (inactive test)</h2>
        {submitted ? (
          <p>thanks for signing up!</p>
        ) : (
          <form>
            <input placeholder="email" name="email" type="text" />
          </form>
        )}

        <div className="popup__button">
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              setSubmitted(true);
              setTimeout(() => {
                closePopup();
              }, 1500);
            }}
          >
            submit
          </Button>
        </div>
        <div className="popup__button__close">
          <Button size="small" variant="outlined" onClick={closePopup}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
