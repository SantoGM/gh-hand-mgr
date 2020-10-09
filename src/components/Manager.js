import React, { Component } from "react";
import Segment from "./Segment";
import Cards from "./Card";

class Manager extends Component {
  render() {
    const { hand, selectedClass } = this.props.props.location.state;

    console.log(hand);
    console.log(selectedClass);

    var deck = [];
    for (let i = 0; i < 10; i++) {
      deck = deck.concat(selectedClass.deck[i]);
    }

    console.log("Deck: ", deck);

    var cardsToRender = [];

    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      if (hand.includes(card.id)) {
        cardsToRender.push(card);
      }
    }

    return (
      <div>
        <div className="segment">
          <h3>In hand </h3>
          <Segment
            key={"segment-" + 0}
            cards={cardsToRender}
            lvl={0}
            manageHand={null}
            classColor={selectedClass.color}
          />
        </div>
      </div>
    );
  }
}

export default Manager;
