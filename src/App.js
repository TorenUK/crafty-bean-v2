import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
              <Content />
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
