import React from "react";
import "./Payment.css";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";

function Payments() {
  const [{ basket }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - Delivery Address */}
        <div className="payment__section">
          <div className="payment__title"></div>
          <h3>delivery address</h3>
        </div>
        <div className="payment__address">
          <p>td_fraser@hotmail.co.uk</p>
          <p> 123 Example lane</p>
          <p>Leicester, United Kingdom</p>
        </div>
        {/* Payment section - Review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payments__items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payent method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe magic goes here */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
