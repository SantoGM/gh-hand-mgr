import React, { Component } from "react";

class Cards extends Component {
  state = { isSelected: false };

  handleSelectCard = () => {
    var res = this.props.manageHand(this.props.card.id);
    this.setState({ isSelected: res === 1 ? true : false });
  };

  render() {
    const { card } = this.props;
    return (
      <div key={card.id}>
        <img
          className={
            this.state.isSelected ? "card-image-selected" : "card-image"
          }
          onClick={this.handleSelectCard}
          src={card.image}
          alt={card.id}
        />
      </div>
    );
  }
}

export default Cards;
