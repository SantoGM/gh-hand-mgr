import React from "react";

const CARDS = ["card1", "card2", "card3", "card4", "card4"];

const Hand = () => (
  <div>
    {CARDS.map((element) => (
      <div>{element}</div>
    ))}
  </div>
);

export default Hand;
