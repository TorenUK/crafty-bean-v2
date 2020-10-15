import React, { useState, useRef, useEffect } from "react";

// compnents
import "./Burger.css";

// other
import gsap from "gsap";

function Burger() {
  // useEffect(() => {}, []);

  const [clicked, setClicked] = useState(false);

  const displayBurger = () => {
    setClicked(!clicked);
  };

  const line1 = useRef(null);
  const line3 = useRef(null);

  if (clicked == true) {
    gsap.to(line1.current, { y: -5, duration: 0.5 });
    gsap.to(line3.current, { y: 5, duration: 0.5 });
  } else {
    gsap.to(line1.current, { y: 0, duration: 0.5 });
    gsap.to(line3.current, { y: 0, duration: 0.5 });
  }

  return (
    <div className="burger">
      <div ref={line1} onClick={displayBurger} className="burger__line"></div>
      <div onClick={displayBurger} className="burger__line"></div>
      <div ref={line3} onClick={displayBurger} className="burger__line"></div>

      {clicked ? (
        <div className="burger__nav">
          <ul>
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Burger;
