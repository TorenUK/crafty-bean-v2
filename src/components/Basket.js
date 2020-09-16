import React from "react";
import "./Basket.css";
import BasketItem from "./BasketItem";
import HomeLogo from "./HomeLogo";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Basket() {
  const [{ basket }] = useStateValue();

  console.log("the basket -->", basket);

  return (
    <div className="basket">
      {basket?.length === 0 ? (
        //if basket is empty -- render this:
        <div className="basket__div__empty">
          <ShoppingBasketIcon />
          <h2 className="basket__title__empty">your basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>your shopping basket: {basket?.length} item(s)</h2>
          {basket?.map((item) => (
            <BasketItem
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
      <Link to="/">
        <HomeLogo />
      </Link>
    </div>
  );
}

export default Basket;
