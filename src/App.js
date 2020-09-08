import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Body />
            <Sidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
