"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var inputElement_1 = require("./inputElement");
describe("Given an input element", function () {
    var element;
    var mockCallback = jest.fn();
    describe("when new text is entered", function () {
        beforeEach(function () {
            element = react_2.render(react_1.default.createElement(inputElement_1.InputElement, { activeListItemRef: react_1.default.createRef(), searchInputRef: react_1.default.createRef(), onChangeCb: mockCallback }));
        });
        it("then it should have called the onChange function", function () {
            var input = element.getByLabelText("search");
            react_2.fireEvent.change(input, { target: { value: "a" } });
            react_2.fireEvent.change(input, { target: { value: "j" } });
            expect(mockCallback).toHaveBeenCalledTimes(2);
        });
        it("then it should display the correct text", function () {
            var input = element.getByLabelText("search");
            react_2.fireEvent.change(input, { target: { value: "Hello" } });
            expect(input.value).toBe("Hello");
        });
    });
});
