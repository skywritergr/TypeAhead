import React, { Component, createRef } from "react";
import { ResultList } from "./resultList";
import { IChangeCallbackObj, InputElement } from "./inputElement";
import "./typeahead.css";

interface ITypeAheadState {
  searchTerm: null | string;
  inputValueSelected: boolean;
}

export class TypeAhead extends Component {
  activeListItemRef = createRef<HTMLUListElement>();
  searchInputRef = createRef<HTMLInputElement>();
  state: ITypeAheadState = {
    searchTerm: null,
    inputValueSelected: false,
  };

  onInputChange(stateObject: IChangeCallbackObj) {
    this.setState(
      {
        searchTerm: stateObject.searchTerm,
        inputValueSelected: stateObject.inputValueSelected,
      },
      () => this.moveFocus()
    );
  }

  keyboardNavigationListener = (e: KeyboardEvent) => {
    const active = document.activeElement;
    if (e.key === "ArrowDown" && active?.nextSibling) {
      (active?.nextSibling as HTMLElement).focus();
    } else if (e.key === "ArrowUp" && active?.previousSibling) {
      (active?.previousSibling as HTMLElement).focus();
    } else if (e.key === "Enter" && active) {
      if (this.searchInputRef.current) {
        this.searchInputRef.current.value = active.textContent || "";
        this.setState({ inputValueSelected: true });
      }
    }
  };

  moveFocus() {
    const node = this.activeListItemRef.current;
    // If there is a listener already then remove it first.
    node?.removeEventListener("keydown", this.keyboardNavigationListener);
    node?.addEventListener("keydown", this.keyboardNavigationListener);
  }

  render() {
    return (
      <div className="search-container">
        <InputElement
          searchInputRef={this.searchInputRef}
          activeListItemRef={this.activeListItemRef}
          onChangeCb={(stateObject) => this.onInputChange(stateObject)}
        />
        {this.state.searchTerm && !this.state.inputValueSelected && (
          <ResultList
            searchInputRef={this.searchInputRef}
            activeListItemRef={this.activeListItemRef}
            searchTerm={this.state.searchTerm}
            inputValueSelected={this.state.inputValueSelected}
            onInputValueSelected={() => {
              this.setState({ inputValueSelected: true });
            }}
          />
        )}
      </div>
    );
  }
}
