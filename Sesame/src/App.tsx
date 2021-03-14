import React from "react";
import { TypeAhead } from "TypeAhead";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="menu">
          <span>Menu</span>
          <TypeAhead />
        </div>
      </header>
      <h1>Hello World!!</h1>
    </div>
  );
}

export default App;
