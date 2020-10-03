import React from "react";
import Cards from "./Card";

const Segment = (props) => {
  const { cards, lvl, manageHand, classColor } = props;

  return (
    <div className="segment">
      <h3>Level {lvl == 0 ? "X" : lvl} </h3>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <Cards card={card} classColor={classColor} manageHand={manageHand} />
        </div>
      ))}
    </div>
  );
};

export default Segment;
