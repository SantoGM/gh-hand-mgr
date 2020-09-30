import React from "react";
import Segment from "./Segment";
import Cards from "./Card";

const Deck = ({ deck }) => {
  const cardsToRender = [];

  for (let i = 0; i <= 5; i++) {
    cardsToRender.push(<Segment cards={deck[i]} lvl={i} />);
  }

  return <div>{cardsToRender}</div>;
};

export default Deck;
