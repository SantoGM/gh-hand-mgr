import React from "react";
import Segment from "./Segment";

const Deck = ({ deck }) => {
  const cardsToRender = [];

  for (let i = 0; i <= 5; i++) {
    cardsToRender.push(
      <Segment key={"segment-" + i} cards={deck[i]} lvl={i} />
    );
  }

  return <div>{cardsToRender}</div>;
};

export default Deck;
