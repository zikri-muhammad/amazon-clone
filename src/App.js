import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Router path="/checkout">
            <Checkout />
          </Router>
          <Router path="/">
            {/* <Header /> */}
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
