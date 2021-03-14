import React from "react";
export interface IChangeCallbackObj {
    searchTerm: string;
    inputValueSelected: boolean;
}
interface IInputElementProps {
    activeListItemRef: React.RefObject<HTMLUListElement>;
    searchInputRef: React.RefObject<HTMLInputElement>;
    onChangeCb: (arg: IChangeCallbackObj) => void;
}
export declare const InputElement: ({ activeListItemRef, searchInputRef, onChangeCb, }: IInputElementProps) => JSX.Element;
export {};
