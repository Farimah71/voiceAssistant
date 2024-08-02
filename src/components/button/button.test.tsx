import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

describe("render button", () => {
  test("test", () => {
    const el = screen.getByText("");
    expect(el).toBeInTheDocument();
  });
});
