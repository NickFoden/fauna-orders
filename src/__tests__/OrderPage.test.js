import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, queries, queryHelpers } from "@testing-library/react";
import OrderPage from "../pages/OrderPage";
import orderData from "../api/orderData";

it("Order Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <OrderPage currentState={orderData} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe("Order Page", () => {
  test("Should show loading if no data yet", () => {
    const errorState = { data: [], error: "didn't load", loaded: true };
    const { getByText } = render(
      <Router>
        <OrderPage match={{}} currentState={errorState} />
      </Router>
    );
    expect(getByText(". . . loading")).toBeInTheDocument();
  });
});
