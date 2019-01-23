import React, { Component } from 'react';
import './App.css';

const fiveDots = [1, 2, 3, 4, 5];
const physicals = ['Strength', 'Dexterity', 'Stamina'];
const socials = ['Manipulation','Charisma','Appearance'];
const mentals = ['Intelligence','Wits','Perception'];

const StatDot = ({statName, statValue, isChecked}) => (
  <div className="statdot">
  <label 
    className={`statdot-${statValue}`} 
    for={`${statName}-statdot-${statValue}`} 
  />
  <input 
    className={`statdot-${statValue}`} 
    id={`${statName}-statdot-${statValue}`} 
    type="radio"
    checked = {isChecked}
  />
  </div>
)

const StatFive = ({statName, statValue}) => (
  <fieldset className="statrating">
    <legend>{statName}</legend>
    {fiveDots.map(dot => {
      const isChecked = dot <= statValue
      return <StatDot statName={statName} statValue={statValue} isChecked={isChecked}/>
    })}
  </fieldset>
)

const Attributes = () =>(
  <fieldset className="sheet-attributes">
    <legend>Attributes</legend>

    {physicals.map( physical => {
      var statValue = 2
      return <StatFive statName={physical} statValue ={statValue} />
    })}

    {mentals.map( social => {
      var statValue = 2
      return <StatFive statName={social} statValue ={statValue} />
    })}

    {socials.map( mental => {
      var statValue = 2
      return <StatFive statName={mental} statValue ={statValue} />
    })}

  </fieldset>
)

class App extends Component {
  render() {
    return (
      <div className="App">
      Hi!
      <Attributes />
      </div>
    )
  }
}


export default App;
