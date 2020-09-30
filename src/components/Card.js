import React, { Component } from "react";

class Cards extends Component {
  state = { isSelected: false };

  render() {
    const { card } = this.props;
    return (
      <div key={card.id}>
        <img className="card-image" src={card.image} alt={card.id} />
      </div>
    );
  }
}

export default Cards;
