import React, { Component } from "react";
import Deck from "./Deck";
import Class from "./Class";
import CLASSES from "../data/classes";

class App extends Component {
  state = { selectedClass: null };

  setSelectedClass = (selectedClass) => {
    if (
      this.state.selectedClass == null ||
      this.state.selectedClass.id != selectedClass.id
    ) {
      this.setState({ selectedClass });
    } else {
      this.setState({ selectedClass: null });
    }
  };

  render() {
    return (
      <div>
        <h1>Gloomhaven Hand Manager</h1>
        <div>
          {CLASSES.map((CLASS) => (
            <div key={CLASS.id}>
              <Class class={CLASS} setSelectedClass={this.setSelectedClass} />
            </div>
          ))}
        </div>
        {this.state.selectedClass ? (
          <div>
            <h3>1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9</h3>
            <div key={this.state.selectedClass.id}>
              <h3>{this.state.selectedClass.className}</h3>
              <Deck deck={this.state.selectedClass.deck} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
