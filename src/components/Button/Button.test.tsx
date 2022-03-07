import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders  the button component", () => {
    const testFn = jest.fn();
    const { container } = render(<Button label="Click Me" onClick={testFn} />);
    fireEvent.click(container);
  });
});
