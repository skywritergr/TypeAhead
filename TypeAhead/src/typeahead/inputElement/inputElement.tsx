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

export const InputElement = ({
  activeListItemRef,
  searchInputRef,
  onChangeCb,
}: IInputElementProps) => {
  return (
    <input
      ref={searchInputRef}
      type="search"
      name="search"
      aria-label="search"
      placeholder="Searches..."
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          (activeListItemRef.current?.firstChild as HTMLElement)?.focus();
        }
      }}
      onChange={(e) =>
        onChangeCb({ searchTerm: e.target.value, inputValueSelected: false })
      }
    />
  );
};
