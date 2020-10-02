import React, { Component } from "react";

class Cards extends Component {
  state = { isSelected: false };

  handleSelectCard = () => {
    this.props.manageHand(this.props.card.id);
  };

  render() {
    const { card } = this.props;
    return (
      <div key={card.id}>
        <img
          className={this.props.selected ? "card-image-selected" : "card-image"}
          onClick={this.handleSelectCard}
          src={card.image}
          alt={card.id}
        />
      </div>
    );
  }
}

export default Cards;
