import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Gifts from "./components/Gifts";
import Info from "./components/Info";
import Basket from "./components/Basket";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
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
