import React from "react";
import Cards from "./Card";

const Deck = ({ deck }) => {
  return (
    <div>
      {deck.map((card) => (
        <div key={card.id} className="card">
          <Cards card={card} />
        </div>
      ))}
    </div>
  );
};

export default Deck;
