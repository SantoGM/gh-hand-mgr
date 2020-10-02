import React, { Component } from "react";

class Class extends Component {
  state = { isClassSelected: false };

  setSelectedClass = () => {
    this.props.setSelectedClass(this.props.class);
    this.setState({ isClassSelected: !this.state.isClassSelected });
  };

  render() {
    const { id, portrait, icon, className } = this.props.class;
    const { selectedClassId } = this.props;
    return (
      <div key={id} onClick={this.setSelectedClass}>
        <img
          className="class-image"
          src={id == selectedClassId ? portrait : icon}
          alt={className}
        />
      </div>
    );
  }
}

export default Class;
