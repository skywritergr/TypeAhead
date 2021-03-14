"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputElement = void 0;
var react_1 = __importDefault(require("react"));
var InputElement = function (_a) {
    var activeListItemRef = _a.activeListItemRef, searchInputRef = _a.searchInputRef, onChangeCb = _a.onChangeCb;
    return (react_1.default.createElement("input", { ref: searchInputRef, type: "search", name: "search", "aria-label": "search", placeholder: "Searches...", onKeyDown: function (e) {
            var _a, _b;
            if (e.key === "ArrowDown") {
                (_b = (_a = activeListItemRef.current) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }, onChange: function (e) {
            return onChangeCb({ searchTerm: e.target.value, inputValueSelected: false });
        } }));
};
exports.InputElement = InputElement;
