import React from "react";

const SmurfCard = (props) => (
  <div>
    <h1>{props.smurf.id}. {props.smurf.name}</h1>
    <h2>Age:&nbsp;{props.smurf.age} years</h2>
    <h3>Height:&nbsp;{props.smurf.height}</h3>
  </div>
);

export default SmurfCard;
