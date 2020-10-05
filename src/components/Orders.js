import React, { useEffect, useState } from "react";

// components
import database from "./firebase";
import "./Orders.css";
import OrderItem from "./OrderItem";

import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [{ basket, customer }, dispatch] = useStateValue();

  // PASS USER ID (EMAIL) TO USE EFFECT TO DISPLAY INDIVIDUAL CUSTOMER ORDERS ON ORDER PAGE

  useEffect(() => {
    database
      .collection("customers")
      .doc(customer)
      .collection("orders")
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(orders);
  return (
    <div className="orders">
      <h1>thanks for your order!</h1>
      <p>{customer}</p>
      <div className="orders__container">
        {orders?.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
