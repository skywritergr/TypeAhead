"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var typeahead_1 = require("./typeahead");
describe("Given the typeahead component", function () {
    var element;
    beforeEach(function () {
        element = react_2.render(react_1.default.createElement(typeahead_1.TypeAhead, null));
        var input = element.getByLabelText("search");
        react_2.fireEvent.change(input, { target: { value: "Apple" } });
    });
    describe("when a search term is entered", function () {
        it("then it should display the correct amount of results", function () {
            expect(react_2.screen.getAllByRole("fruititem")).toHaveLength(9);
        });
    });
    describe("when clicking an item", function () {
        it("then the correct text appears in the input", function () {
            react_2.fireEvent.click(react_2.screen.getByTestId("black sapote"));
            var input = element.getByLabelText("search");
            expect(input.value).toBe("Black sapote");
        });
    });
});
