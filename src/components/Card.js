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
      <ContentLoader width="400" height="600" viewBox="0 0 400 600" style={{position:"absolute"}}>  
        <rect width="400" height="600" rx="10" ry="10" fill="#CCC" />
      </ContentLoader>
  );

  render() {
    const { card } = this.props;
    return (
      <div key={card.id} >
        {!this.state.isImageLoaded && <this.ImagePlaceholder />}
        <img
          className={
            this.state.isSelected ? "card-image-selected" : "card-image"
          }
          style={ this.state.isImageLoaded ? { color: this.props.classColor } : {visibility: "hidden"} }
          onClick={this.handleSelectCard}
          src={card.image}
          alt={card.id}
          onLoad={() => setTimeout(() => this.setImageLoaded(true), 200)}
        />
      </div>
    );
  }
}

export default Cards;
