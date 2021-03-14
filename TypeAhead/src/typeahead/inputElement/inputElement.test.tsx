import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InputElement } from "./inputElement";

describe("Given an input element", () => {
  let element: RenderResult;
  let mockCallback = jest.fn();

  describe("when new text is entered", () => {
    beforeEach(() => {
      element = render(
        <InputElement
          activeListItemRef={React.createRef()}
          searchInputRef={React.createRef()}
          onChangeCb={mockCallback}
        />
      );
    });

    it("then it should have called the onChange function", () => {
      const input = element.getByLabelText("search");
      fireEvent.change(input, { target: { value: "a" } });
      fireEvent.change(input, { target: { value: "j" } });
      expect(mockCallback).toHaveBeenCalledTimes(2);
    });

    it("then it should display the correct text", () => {
      const input = element.getByLabelText("search");
      fireEvent.change(input, { target: { value: "Hello" } });
      expect((input as HTMLInputElement).value).toBe("Hello");
    });
  });
});
