import React from "react";
import StatDot from "./StatDot.js";

const fiveDots = [1, 2, 3, 4, 5];

const StatFive = ({ statName, statValue }) => (
  <fieldset className="statrating">
    <legend>{statName}</legend>
    {fiveDots.map(dot => {
      const isChecked = dot <= statValue;
      return (
        <StatDot
          statName={statName}
          statValue={statValue}
          isChecked={isChecked}
        />
      );
    })}
  </fieldset>
);

export default StatFive;
