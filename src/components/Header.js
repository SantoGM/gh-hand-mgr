import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 10,
  };

  return (
    <div>
      <div className="header">
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
      </div>
      <div className="central-column">{children}</div>
    </div>
  );
};

export default Header;
