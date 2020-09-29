import React from "react";
import Card from "./Card";

const CARDS = ["new Card()"];

const Deck = (props) => {
  const { deck } = props;
  return (
    <div>
      {deck.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Deck;
