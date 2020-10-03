import React from "react";
import Segment from "./Segment";

const Deck = ({ deck, level, manageHand, classColor }) => {
  const cardsToRender = [];
  for (let i = 0; i <= level; i++) {
    cardsToRender.push(
      <Segment
        key={"segment-" + i}
        cards={deck[i]}
        lvl={i}
        manageHand={manageHand}
        classColor={classColor}
      />
    );
  }
  return <div>{cardsToRender}</div>;
};

export default Deck;
