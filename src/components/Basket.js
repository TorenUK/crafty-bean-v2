import React from "react";
import "./Basket.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import HomeLogo from "./HomeLogo";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Basket() {
  const [{ basket }] = useStateValue();

  console.log("the basket array -->", basket);

  return (
    <div className="basket">
      {basket?.length === 0 ? (
        //if basket is empty -- render this:
        <div className="basket__div__empty">
          <ShoppingBasketIcon />
          <h2 className="basket__title__empty">your basket is empty</h2>
        </div>
      ) : (
        <div className="basket__container">
          <h2 className="basket__container__title">
            your shopping basket: {basket?.length} item(s)
          </h2>
          <div className="basket__container__div">
            {basket?.map((item) => (
              <BasketItem
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <Subtotal />
        </div>
      )}
      <Link to="/">
        <HomeLogo />
      </Link>
    </div>
  );
}

export default Basket;