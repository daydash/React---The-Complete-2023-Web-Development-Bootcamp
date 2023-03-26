// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

const World = "Yash";
const fname = "Yash";
const lname = "Bhatnagar";
const luckyNumber = 19;

// ReactDOM.render(What to show, Where to show);
ReactDOM.render(
  <div>
    <h1>Hello {World}</h1>
    <h1>Hello {fname + " " + lname}</h1>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h1>Hello {`${fname} ${lname}`}</h1>
    <p>this is para</p>
    <p>My lucky number is {luckyNumber}</p>
    <p>3 + 9 is {3 + 9}</p>
  </div>,
  document.getElementById("root")
);
