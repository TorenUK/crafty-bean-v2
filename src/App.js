import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
            <Route path="/">
              <Header />
              <Nav />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
