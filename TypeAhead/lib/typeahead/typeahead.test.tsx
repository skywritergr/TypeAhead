import React from "react";
import {
  render,
  fireEvent,
  screen,
  RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TypeAhead } from "./typeahead";

describe("Given the typeahead component", () => {
  let element: RenderResult;

  beforeEach(() => {
    element = render(<TypeAhead />);
    const input = element.getByLabelText("search");
    fireEvent.change(input, { target: { value: "Apple" } });
  });

  describe("when a search term is entered", () => {
    it("then it should display the correct amount of results", () => {
      expect(screen.getAllByRole("fruititem")).toHaveLength(9);
    });
  });

  describe("when clicking an item", () => {
    it("then the correct text appears in the input", () => {
      fireEvent.click(screen.getByTestId("black sapote"));
      const input = element.getByLabelText("search");
      expect((input as HTMLInputElement).value).toBe("Black sapote");
    });
  });
});
