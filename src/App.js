import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Gifts from "./components/Gifts";
import Info from "./components/Info";
import Basket from "./components/Basket";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HCr8zGrO8LMr0aUXQ0OQTnN3yG2EZOvmnm5zs01TjUVekfhGgS3b0WL7BeDxqV97ikJ7DqJR5qaFknoFIx7pnhu00rn1llTud"
);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
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
    </Router>
  );
}

export default App;
