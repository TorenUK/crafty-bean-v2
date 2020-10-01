import React from "react";

//components
import "./Order.css";
import BasketItem from "./BasketItem";

import moment from "moment";

//material ui
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

function OrderItem({ order }) {
  return (
    <div className="orders">
      <p>
        order date: {moment.unix(order.data.created).format("MMMM Do YYYY")}
      </p>
      <p className="orderItem__id">
        <small>order id: {order.id}</small>
      </p>
      <LocalShippingIcon />
      dispatch: 1-2 working days
      {order.data.basket?.map((item) => (
        <BasketItem
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          hideButton
          hideCustomize
        />
      ))}
    </div>
  );
}

export default OrderItem;
