import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByLabelText } = render(<App />);

  // Renders Species Filters
  getByLabelText(/dog/i);
  getByLabelText(/cat/i);
  getByLabelText(/other/i);

  // Renders Gender Filters
  getByLabelText(/^male$/i);
  getByLabelText(/female/i);
  getByLabelText(/unknown/i);
});
