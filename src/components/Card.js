import React from "react";

const Card = (props) => {
  const { card } = props;
  return (
    <div className="card">
      <img src={card} alt="card" className="card-image" />
    </div>
  );
};

export default Card;
