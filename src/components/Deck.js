import React from "react";
import Segment from "./Segment";

const Deck = ({ deck, level, manageHand, hand }) => {
  const cardsToRender = [];
  for (let i = 0; i <= level; i++) {
    cardsToRender.push(
      <Segment
        key={"segment-" + i}
        cards={deck[i]}
        lvl={i}
        hand={hand}
        manageHand={manageHand}
      />
    );
  }
  return <div>{cardsToRender}</div>;
};

export default Deck;
