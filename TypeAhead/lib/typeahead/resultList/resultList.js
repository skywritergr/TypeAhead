"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultList = void 0;
var react_1 = __importDefault(require("react"));
var searchPool_1 = require("../searchPool");
var fuzzyIncludes = function (word, searchTerms) {
    var searchTermsArray = searchTerms.toLowerCase().split("");
    var intersection = word
        .toLowerCase()
        .split("")
        .filter(function (value) { return searchTermsArray.includes(value); });
    return new Set(intersection).size === new Set(searchTermsArray).size;
};
var findMatchingTerms = function (searchTerm) {
    return new Set(searchPool_1.searchPool.filter(function (word) {
        return word.toLowerCase().includes(searchTerm) ||
            fuzzyIncludes(word, searchTerm);
    }));
};
var highlightResult = function (result, searchTerm) {
    var searchTermArray = searchTerm.toLowerCase().split("");
    return result
        .toLowerCase()
        .split("")
        .map(function (letter) {
        return searchTermArray.includes(letter) ? "<strong>" + letter + "</strong>" : letter;
    })
        .join("");
};
var ResultList = function (_a) {
    var activeListItemRef = _a.activeListItemRef, searchInputRef = _a.searchInputRef, searchTerm = _a.searchTerm, inputValueSelected = _a.inputValueSelected, onInputValueSelected = _a.onInputValueSelected;
    return (react_1.default.createElement("ul", { ref: activeListItemRef, className: "result-list" }, Array.from(findMatchingTerms(searchTerm)).map(function (result, idx) { return (react_1.default.createElement("li", { "data-testid": result.toLowerCase(), role: "fruititem", key: idx, tabIndex: idx + 1, onMouseOver: function () {
            var _a;
            if (searchInputRef.current) {
                searchInputRef.current.value = result;
                (_a = activeListItemRef === null || activeListItemRef === void 0 ? void 0 : activeListItemRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }, onMouseLeave: function () {
            if (!inputValueSelected && searchInputRef.current) {
                searchInputRef.current.value = searchTerm;
            }
        }, onClick: function () {
            if (searchInputRef.current) {
                searchInputRef.current.value = result;
                onInputValueSelected();
            }
        }, dangerouslySetInnerHTML: {
            __html: highlightResult(result, searchTerm),
        } })); })));
};
exports.ResultList = ResultList;
