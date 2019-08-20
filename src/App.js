import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchOrders } from "./api";

import Home from "../src/pages/Home";
import Order from "../src/pages/Order";

function App() {
  const [currentState, setState] = useState({
    loading: false,
    error: null,
    data: []
  });

  useEffect(() => {
    setState({ loading: true, error: false, data: [] });
    fetchOrders().then(
      result => {
        setState({ loading: false, data: result, error: false });
      },
      error => {
        setState({ loading: false, error });
      }
    );
  }, []);
  console.dir(currentState);
  return (
    <Router>
      <header className="App-header">
        <h2> Current Orders</h2>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Order} />
    </Router>
  );
}

export default App;
