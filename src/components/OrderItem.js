import React from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "./BasketItem";

function OrderItem({ order }) {
  return (
    <div className="order">
      <h2>order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderItem__id">
        <small>order id: {order.id}</small>
      </p>
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
