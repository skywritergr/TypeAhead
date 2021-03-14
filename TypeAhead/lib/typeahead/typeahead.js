"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAhead = void 0;
var react_1 = __importStar(require("react"));
var resultList_1 = require("./resultList");
var inputElement_1 = require("./inputElement");
require("./typeahead.css");
var TypeAhead = /** @class */ (function (_super) {
    __extends(TypeAhead, _super);
    function TypeAhead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeListItemRef = react_1.createRef();
        _this.searchInputRef = react_1.createRef();
        _this.state = {
            searchTerm: null,
            inputValueSelected: false,
        };
        _this.keyboardNavigationListener = function (e) {
            var active = document.activeElement;
            if (e.key === "ArrowDown" && (active === null || active === void 0 ? void 0 : active.nextSibling)) {
                (active === null || active === void 0 ? void 0 : active.nextSibling).focus();
            }
            else if (e.key === "ArrowUp" && (active === null || active === void 0 ? void 0 : active.previousSibling)) {
                (active === null || active === void 0 ? void 0 : active.previousSibling).focus();
            }
            else if (e.key === "Enter" && active) {
                if (_this.searchInputRef.current) {
                    _this.searchInputRef.current.value = active.textContent || "";
                    _this.setState({ inputValueSelected: true });
                }
            }
        };
        return _this;
    }
    TypeAhead.prototype.onInputChange = function (stateObject) {
        var _this = this;
        this.setState({
            searchTerm: stateObject.searchTerm,
            inputValueSelected: stateObject.inputValueSelected,
        }, function () { return _this.moveFocus(); });
    };
    TypeAhead.prototype.moveFocus = function () {
        var node = this.activeListItemRef.current;
        // If there is a listener already then remove it first.
        node === null || node === void 0 ? void 0 : node.removeEventListener("keydown", this.keyboardNavigationListener);
        node === null || node === void 0 ? void 0 : node.addEventListener("keydown", this.keyboardNavigationListener);
    };
    TypeAhead.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "search-container" },
            react_1.default.createElement(inputElement_1.InputElement, { searchInputRef: this.searchInputRef, activeListItemRef: this.activeListItemRef, onChangeCb: function (stateObject) { return _this.onInputChange(stateObject); } }),
            this.state.searchTerm && !this.state.inputValueSelected && (react_1.default.createElement(resultList_1.ResultList, { searchInputRef: this.searchInputRef, activeListItemRef: this.activeListItemRef, searchTerm: this.state.searchTerm, inputValueSelected: this.state.inputValueSelected, onInputValueSelected: function () {
                    _this.setState({ inputValueSelected: true });
                } }))));
    };
    return TypeAhead;
}(react_1.Component));
exports.TypeAhead = TypeAhead;
