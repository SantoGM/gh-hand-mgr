import React from "react";
import Cards from "./Card";

const Segment = (props) => {
  const { cards, lvl } = props;

  return (
    <div>
      <h4>Level {lvl == 0 ? "X" : lvl} </h4>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <Cards card={card} />
        </div>
      ))}
    </div>
  );
};

export default Segment;
