import React, { useEffect, useRef } from "react";
import "./BasketNotify.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

function BasketNotify() {
  const [{ basket }] = useStateValue();
  let basketNotify = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      basketNotify,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [basket]);

  return (
    <div ref={(el) => (basketNotify = el)} className="basketNotify">
      <Link to="/basket">
        <ShoppingBasketIcon />
      </Link>
      {basket?.length !== 0 ? <span>{basket?.length}</span> : null}
    </div>
  );
}

export default BasketNotify;
