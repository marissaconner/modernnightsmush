import React from "react";

const StatDot = ({ statName, statValue, isChecked }) => (
  <div className="statdot">
    <label
      className={`statdot-${statValue}`}
      for={`${statName}-statdot-${statValue}`}
    />
    <input
      className={`statdot-${statValue}`}
      id={`${statName}-statdot-${statValue}`}
      type="radio"
      checked={isChecked}
    />
  </div>
);

export default StatDot;
