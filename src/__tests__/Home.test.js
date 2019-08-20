import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, queries, queryHelpers } from "@testing-library/react";
import Home from "../pages/Home";
import orderData from "../api/orderData";

it("Home Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Home currentOrders={orderData} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe("Home Page", () => {
  test("Should show the column titles", () => {
    const { getByText } = render(
      <Router>
        <Home currentOrders={orderData} />
      </Router>
    );
    expect(getByText("Customer")).toBeInTheDocument();
  });
});
