import React, { Component } from "react";
import ContentLoader from "react-content-loader";

class Cards extends Component {
  state = { isSelected: false, isImageLoaded: false };
  handleSelectCard = () => {
    var res = this.props.manageHand(this.props.card.id);
    this.setState({ isSelected: res === 1 ? true : false });
  };

  setImageLoaded = (isImageLoaded) => {
    this.setState({isImageLoaded})
  }

  ImagePlaceholder = () => (
      <ContentLoader viewBox="0 0 400 600" width="400" height="600" className ="card-placeholder">  
        <rect width="400" height="600" rx="8" ry="8"/>
      </ContentLoader>
  );

  render() {
    const { card } = this.props;
    return (
      <div key={card.id}>
        {!this.state.isImageLoaded && <this.ImagePlaceholder />}
        <img
          className={
            this.state.isSelected ? "card-image-selected" : "card-image"
          }
          style={ this.state.isImageLoaded ? { color: this.props.classColor } : {} }
          onClick={this.handleSelectCard}
          src={card.image}
          alt={card.id}
          onLoad={() => setTimeout(() => this.setImageLoaded(true))}
        />
      </div>
    );
  }
}

export default Cards;
