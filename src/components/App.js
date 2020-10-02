import React, { Component } from "react";
import Deck from "./Deck";
import Class from "./Class";
import Selector from "./Selector";
import CLASSES from "../data/classes";

class App extends Component {
  state = { selectedClass: null, classLevel: 1 };

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

  setClassLevel = (classLevel) => {
    if (this.state.selectedClass != null) {
      this.setState({ classLevel });
    } else {
      this.setState({ classLevel: 1 });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>Gloomhaven Hand Manager</h1>
          <div className="classBar">
            {CLASSES.map((CLASS) => (
              <div className="classBar-element" key={CLASS.id}>
                <Class
                  class={CLASS}
                  setSelectedClass={this.setSelectedClass}
                  selectedClassId={
                    this.state.selectedClass == null
                      ? 0
                      : this.state.selectedClass.id
                  }
                />
              </div>
            ))}
          </div>
          {this.state.selectedClass ? (
            <div>
              <Selector
                classLevel={this.state.classLevel}
                setClassLevel={this.setClassLevel}
              />
              <div key={this.state.selectedClass.id}>
                <h2>{this.state.selectedClass.className}</h2>
                <Deck
                  deck={this.state.selectedClass.deck}
                  level={this.state.classLevel}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
