import React from "react";
import { searchPool } from "../searchPool";

interface IResultListProps {
  activeListItemRef: React.RefObject<HTMLUListElement>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchTerm: string;
  inputValueSelected: boolean;
  onInputValueSelected: () => void;
}

const fuzzyIncludes = (word: string, searchTerms: string) => {
  const searchTermsArray = searchTerms.toLowerCase().split("");
  const intersection = word
    .toLowerCase()
    .split("")
    .filter((value) => searchTermsArray.includes(value));
  return new Set(intersection).size === new Set(searchTermsArray).size;
};

const findMatchingTerms = (searchTerm: string) => {
  return new Set(
    searchPool.filter(
      (word) =>
        word.toLowerCase().includes(searchTerm) ||
        fuzzyIncludes(word, searchTerm)
    )
  );
};

const highlightResult = (result: string, searchTerm: string) => {
  const searchTermArray = searchTerm.toLowerCase().split("");
  return result
    .toLowerCase()
    .split("")
    .map((letter) =>
      searchTermArray.includes(letter) ? `<strong>${letter}</strong>` : letter
    )
    .join("");
};

export const ResultList = ({
  activeListItemRef,
  searchInputRef,
  searchTerm,
  inputValueSelected,
  onInputValueSelected,
}: IResultListProps) => {
  return (
    <ul ref={activeListItemRef} className="result-list">
      {Array.from(findMatchingTerms(searchTerm)).map((result, idx) => (
        <li
          data-testid={result.toLowerCase()}
          role="fruititem"
          key={idx}
          tabIndex={idx + 1}
          onMouseOver={() => {
            if (searchInputRef.current) {
              searchInputRef.current.value = result;
              activeListItemRef?.current?.focus();
            }
          }}
          onMouseLeave={() => {
            if (!inputValueSelected && searchInputRef.current) {
              searchInputRef.current.value = searchTerm;
            }
          }}
          onClick={() => {
            if (searchInputRef.current) {
              searchInputRef.current.value = result;
              onInputValueSelected();
            }
          }}
          dangerouslySetInnerHTML={{
            __html: highlightResult(result, searchTerm!),
          }}
        ></li>
      ))}
    </ul>
  );
};
