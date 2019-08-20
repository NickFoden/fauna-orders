import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, queries, queryHelpers } from "@testing-library/react";
import Order from "../components/Order";
import orderData from "../api/orderData";

it("Order Component renders without crashing", () => {
  const div = document.createElement("div");

  const matchObject = {
    params: { id: "240786730144236046" }
  };
  ReactDOM.render(
    <Router>
      <Order currentOrders={orderData} match={matchObject} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe("Order label for Ardith Probert", () => {
  test("Should show Ardith Probert customer name", () => {
    const matchObject = {
      params: { id: "240786730144236046" }
    };
    const { getByText } = render(
      <Router>
        <Order currentOrders={orderData} match={matchObject} />
      </Router>
    );
    expect(getByText("Ardith Probert")).toBeInTheDocument();
  });
});
