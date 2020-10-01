import React, { Component } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const Selector = (props) => {
  const { classLevel, setClassLevel } = props;
  const [level, setLevel] = React.useState("1");

  const handleLevel = (event, newLevel) => {
    setLevel(newLevel);
    setClassLevel(newLevel);
  };

  return (
    <div className="selector">
      <ToggleButtonGroup
        value={level}
        exclusive
        onChange={handleLevel}
        aria-label="character level"
        size="small"
      >
        <ToggleButton value="1" aria-label="level 1">
          <p className="selector-number">1</p>
        </ToggleButton>
        <ToggleButton value="2" aria-label="level 2">
          <p className="selector-number">2</p>
        </ToggleButton>
        <ToggleButton value="3" aria-label="level 3">
          <p className="selector-number">3</p>
        </ToggleButton>
        <ToggleButton value="4" aria-label="level 4">
          <p className="selector-number">4</p>
        </ToggleButton>
        <ToggleButton value="5" aria-label="level 5">
          <p className="selector-number">5</p>
        </ToggleButton>
        <ToggleButton value="6" aria-label="level 6">
          <p className="selector-number">6</p>
        </ToggleButton>
        <ToggleButton value="7" aria-label="level 7">
          <p className="selector-number">7</p>
        </ToggleButton>
        <ToggleButton value="8" aria-label="level 8">
          <p className="selector-number">8</p>
        </ToggleButton>
        <ToggleButton value="9" aria-label="level 9">
          <p className="selector-number">9</p>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Selector;
