import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, queries, queryHelpers } from "@testing-library/react";
import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App js", () => {
  test("Should show the header nav", () => {
    const { getByText } = render(<App />);
    expect(getByText("Fauna Orders")).toBeInTheDocument();
  });

  test("Should not show an error state", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("Error:")).not.toBeInTheDocument();
  });
});
