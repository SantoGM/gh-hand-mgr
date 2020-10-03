import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 10,
    fontSize: "70px",
  };

  return (
    <div>
      <div className="header">
        <h1 style={style}>
          <Link to="/">Home</Link>
        </h1>
      </div>
      <div className="central-column">{children}</div>
    </div>
  );
};

export default Header;
