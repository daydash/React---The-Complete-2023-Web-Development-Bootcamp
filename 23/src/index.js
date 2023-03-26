// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
// const [hondaTopColour, hondaBottomColour] = honda.coloursByPopularity;
// const [teslaTopColour, teslaBottomColour] = tesla.coloursByPopularity;
// var hondaTopSpeed = honda.speedStats.topSpeed;
// var teslaTopSpeed = tesla.speedStats.topSpeed;

const {
  // keyNameInOriginalObject : newUserDefinedName
  model: hondaModel,
  coloursByPopularity: hondaColour,
  speedStats: hondaSpeed
} = honda;
const [hondaTopColour, hondaBottomColour] = hondaColour;
const { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty } = hondaSpeed;

const {
  model: teslaModel,
  coloursByPopularity: teslaColour,
  speedStats: teslaSpeed
} = tesla;
const [teslaTopColour, teslaBottomColour] = teslaColour;
const { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty } = teslaSpeed;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
