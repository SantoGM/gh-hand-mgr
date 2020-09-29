import React, { Component } from "react";
import Deck from "./Deck";
import CLASSES from "../data/classes";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Gloomhaven Hand Manager</h1>
        <div>
          {CLASSES.map((CLASS) => (
            <div>
              <h3>{CLASS.className}</h3>
              <Deck key={CLASS.id} deck={CLASS.deck} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
