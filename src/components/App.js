import React, { Component } from "react";
import Deck from "./Deck";
import Class from "./Class";
import Selector from "./Selector";
import CLASSES from "../data/classes";

class App extends Component {
  state = { selectedClass: null, classLevel: 1, hand: [] };

  setSelectedClass = (selectedClass) => {
    if (
      this.state.selectedClass == null ||
      this.state.selectedClass.id != selectedClass.id
    ) {
      this.setState({ selectedClass, hand: [] });
    } else {
      this.setState({ selectedClass: null, hand: [] });
    }
  };

  setClassLevel = (classLevel) => {
    if (this.state.selectedClass != null) {
      this.setState({ classLevel });
    } else {
      this.setState({ classLevel: 1 });
    }
  };

  manageHand = (cardId) => {
    var { hand } = this.state;
    var newHand = [];
    var response = 0;
    if (hand.includes(cardId)) {
      newHand = hand.filter((item, j) => cardId !== item);
    } else if (hand.length < this.state.selectedClass.handSize) {
      newHand = hand.concat(cardId);
      response = 1;
    } else {
      newHand = hand;
    }
    newHand.sort();
    this.state.hand = newHand;
    return response;
  };

  render() {
    return (
      <div className="main-bg">
        <div className="cental-column">
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
          <div>
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
                    manageHand={this.manageHand}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
