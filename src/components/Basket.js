import React from "react";

//components
import "./Basket.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";

//material ui
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Basket() {
  const [{ basket }] = useStateValue();

  return (
    <div className="basket">
      {basket?.length === 0 ? (
        //if basket is empty -- render this:
        <div className="basket__div__empty">
          <ShoppingBasketIcon />
          <h2 className="basket__title__empty">your basket is empty</h2>
          <div>
            <Link to="/">
              <Button size="small" variant="outlined">
                continue shopping
              </Button>
            </Link>
          </div>
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
                message={item.message}
              />
            ))}
          </div>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Basket;
