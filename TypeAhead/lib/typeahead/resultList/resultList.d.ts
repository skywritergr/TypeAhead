import React from "react";
interface IResultListProps {
    activeListItemRef: React.RefObject<HTMLUListElement>;
    searchInputRef: React.RefObject<HTMLInputElement>;
    searchTerm: string;
    inputValueSelected: boolean;
    onInputValueSelected: () => void;
}
export declare const ResultList: ({ activeListItemRef, searchInputRef, searchTerm, inputValueSelected, onInputValueSelected, }: IResultListProps) => JSX.Element;
export {};
