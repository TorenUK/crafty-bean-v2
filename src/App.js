import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Gifts from "./components/Gifts";
import Prints from "./components/Prints";
import Info from "./components/Info";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
            <Route path="/">
              <Landing />
              <Gifts />
              <Prints />
              <Info />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
