import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// components
import Landing from "./components/Landing";
import Gifts from "./components/Gifts";
import Info from "./components/Info";
import Basket from "./components/Basket";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import ScrollToTop from "./components/ScrollToTop";
import Email from "./components/Email";
import Popup from "./components/Popup";
import Burger from "./components/Burger";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HCr8zGrO8LMr0aUXQ0OQTnN3yG2EZOvmnm5zs01TjUVekfhGgS3b0WL7BeDxqV97ikJ7DqJR5qaFknoFIx7pnhu00rn1llTud"
);

function App() {
  const [showPopup, setShowPopup] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 4000);
  }, []);

  const closePopup = () => {
    setShowPopup(null);
  };

  return (
    //BEM

    <Router>
      <ScrollToTop>
        <div className="app">
          <div id="app__body" className="app__body">
            {showPopup ? <Popup closePopup={closePopup} /> : null}
            <Switch>
              <Route path="/email">
                <Email />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/payment">
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Route>
              <Route path="/basket">
                <Basket />
              </Route>
              <Route path="/">
                <Landing />
                <Gifts />
                <Info />
              </Route>
            </Switch>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
