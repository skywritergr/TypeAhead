"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var resultList_1 = require("./resultList");
describe("Given the result list", function () {
    var element;
    var mockCallback = jest.fn();
    jest
        .spyOn(react_1.default, "createRef")
        .mockReturnValueOnce({ current: document.createElement("input") });
    var searchInputRef = react_1.default.createRef();
    beforeEach(function () {
        element = react_2.render(react_1.default.createElement(resultList_1.ResultList, { activeListItemRef: react_1.default.createRef(), searchInputRef: searchInputRef, searchTerm: "Apple", inputValueSelected: false, onInputValueSelected: mockCallback }));
    });
    describe("when a search term is entered", function () {
        it("then it should display the correct amount of results", function () {
            expect(react_2.screen.getAllByRole("fruititem")).toHaveLength(9);
        });
    });
    describe("when clicking an item", function () {
        it("then calls the value selected callback", function () {
            react_2.fireEvent.click(react_2.screen.getByTestId("black sapote"));
            expect(mockCallback).toHaveBeenCalledTimes(1);
        });
    });
});
