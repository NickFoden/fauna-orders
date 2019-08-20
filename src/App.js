import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchOrders } from "./api";

import HeaderNav from "../src/components/HeaderNav";
import Home from "../src/pages/Home";
import OrderPage from "./pages/OrderPage";

function App() {
  const [currentState, setState] = useState({
    loaded: false,
    error: null,
    data: []
  });
  useEffect(() => {
    setState({ loaded: false, error: false, data: [] });
    fetchOrders().then(
      result => {
        setState({ loaded: true, data: result, error: false });
      },
      error => {
        setState({ loaded: true, data: [], error });
      }
    );
  }, []);
  return (
    <Router>
      <HeaderNav />
      <Route
        exact
        path="/"
        render={props => <Home {...props} currentOrders={currentState.data} />}
      />
      <Route
        path="/order/:id"
        render={props => <OrderPage {...props} currentState={currentState} />}
      />
    </Router>
  );
}

export default App;
