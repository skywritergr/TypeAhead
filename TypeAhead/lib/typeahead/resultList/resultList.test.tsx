import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ResultList } from "./resultList";

describe("Given the result list", () => {
  let element;
  let mockCallback = jest.fn();
  jest
    .spyOn(React, "createRef")
    .mockReturnValueOnce({ current: document.createElement("input") });
  const searchInputRef = React.createRef<HTMLInputElement>();

  beforeEach(() => {
    element = render(
      <ResultList
        activeListItemRef={React.createRef()}
        searchInputRef={searchInputRef}
        searchTerm={"Apple"}
        inputValueSelected={false}
        onInputValueSelected={mockCallback}
      />
    );
  });

  describe("when a search term is entered", () => {
    it("then it should display the correct amount of results", () => {
      expect(screen.getAllByRole("fruititem")).toHaveLength(9);
    });
  });

  describe("when clicking an item", () => {
    it("then calls the value selected callback", () => {
      fireEvent.click(screen.getByTestId("black sapote"));
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
