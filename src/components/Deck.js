import React from "react";
import Segment from "./Segment";

const Deck = ({ deck, level }) => {
  const cardsToRender = [];

  for (let i = 0; i <= level; i++) {
    cardsToRender.push(
      <Segment key={"segment-" + i} cards={deck[i]} lvl={i} />
    );
  }
  console.log(level);
  return <div>{cardsToRender}</div>;
};

export default Deck;
