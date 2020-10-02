import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Orders.css";
import OrderItem from "./OrderItem";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });

  return (
    <div className="orders">
      <h1>thanks for your order!</h1>
      <div className="orders__container">
        {orders?.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
