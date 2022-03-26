import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});

describe("Button", () => {
  test("renders the Button component with the primary variant", () => {
    render(<Button variant="primary" label="Hello world!" />);
  });
});

describe("Button", () => {
  test("renders the Button component with the success variant", () => {
    render(<Button variant="success" label="Hello world!" />);
  });
});

describe("Button", () => {
  test("renders the disabled Button component", () => {
    render(<Button disabled label="Hello world!" />);
  });
});
