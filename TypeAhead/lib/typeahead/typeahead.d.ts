import React, { Component } from "react";
import { IChangeCallbackObj } from "./inputElement";
import "./typeahead.css";
interface ITypeAheadState {
    searchTerm: null | string;
    inputValueSelected: boolean;
}
export declare class TypeAhead extends Component {
    activeListItemRef: React.RefObject<HTMLUListElement>;
    searchInputRef: React.RefObject<HTMLInputElement>;
    state: ITypeAheadState;
    onInputChange(stateObject: IChangeCallbackObj): void;
    keyboardNavigationListener: (e: KeyboardEvent) => void;
    moveFocus(): void;
    render(): JSX.Element;
}
export {};
