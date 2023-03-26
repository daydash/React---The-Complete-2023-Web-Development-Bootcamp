//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var curHr = today.getHours();
var h1;

const customStyle = {
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black"
};

if (curHr < 12) {
  h1 = "good morning";
  customStyle.color = "red";
} else if (curHr < 18) {
  h1 = "good afternoon";
  customStyle.color = "green";
} else {
  h1 = "good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>{h1}</h1>,
  document.getElementById("root")
);
