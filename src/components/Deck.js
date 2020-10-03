import React from "react";
import Segment from "./Segment";

const Deck = ({ deck, level, manageHand }) => {
  const cardsToRender = [];
  for (let i = 0; i <= level; i++) {
    cardsToRender.push(
      <Segment
        key={"segment-" + i}
        cards={deck[i]}
        lvl={i}
        manageHand={manageHand}
      />
    );
  }
  return <div>{cardsToRender}</div>;
};

export default Deck;
