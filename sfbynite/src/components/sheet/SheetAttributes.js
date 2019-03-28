import React from "react";
import StatFive from "./StatFive.js";

const physicals = ["Strength", "Dexterity", "Stamina"];
const socials = ["Manipulation", "Charisma", "Appearance"];
const mentals = ["Intelligence", "Wits", "Perception"];

const SheetAttributes = () => (
  <fieldset className="sheet-attributes">
    <legend>Attributes</legend>

    {physicals.map(physical => {
      var statValue = 2;
      return <StatFive statName={physical} statValue={statValue} />;
    })}

    {mentals.map(social => {
      var statValue = 2;
      return <StatFive statName={social} statValue={statValue} />;
    })}

    {socials.map(mental => {
      var statValue = 2;
      return <StatFive statName={mental} statValue={statValue} />;
    })}
  </fieldset>
);

export default SheetAttributes;
