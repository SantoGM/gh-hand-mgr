import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Footer = (props) => {
  const { selectedClass, hand } = props;
  return (
    <div className="footer">
      <label className="counter">
        {selectedClass ? (
          <span>
            {hand.length} / {selectedClass.handSize} cards
          </span>
        ) : (
          <span>0 / 0 cards</span>
        )}
      </label>

      <Button
        variant="contained"
        size="large"
        disabled={
          selectedClass === null || selectedClass.handSize !== hand.length
        }
      >
        <Link
          to={{
            pathname: "/manager",
            state: {
              hand: hand,
              selectedClass: selectedClass,
            },
          }}
        >
          <span className="button-text">Confirm hand</span>
        </Link>
      </Button>
    </div>
  );
};

export default Footer;
