import React, { Component } from "react";
import { blueGrey300 } from "material-ui/styles/colors";

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
          style={{ color: this.props.classColor }}
          onClick={this.handleSelectCard}
          src={card.image}
          alt={card.id}
        />
      </div>
    );
  }
}

export default Cards;
