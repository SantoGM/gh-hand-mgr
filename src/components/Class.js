import React, { Component } from "react";
import { render } from "react-dom";

class Class extends Component {
  state = { isClassSelected: false };

  setSelectedClass = () => {
    this.props.setSelectedClass(this.props.class);
    this.setState({ isClassSelected: !this.state.isClassSelected });
  };

  render() {
    const { id, portrait, icon, className } = this.props.class;
    return (
      <div key={id} onClick={this.setSelectedClass}>
        <img
          className="class-image"
          src={this.state.isClassSelected ? portrait : icon}
          alt={className}
        />
      </div>
    );
  }
}

export default Class;
