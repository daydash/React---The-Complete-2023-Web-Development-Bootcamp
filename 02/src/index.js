//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite food items are:
    </h1>
    {/* <ul>
      <li>Biryani</li>
      <li>Biryani</li>
      <li>Biryani</li>
    </ul> */}
    <div>
      <img alt="random" src={img + "?grayscale"} />
    </div>
    <div>
      <img
        className="food-img"
        alt="biryani"
        src="https://content.jdmagicbox.com/comp/panruti/f4/9999p4156.4156.180808155543.b6f4/catalogue/thirumana-briyani-panruti-biryani-caterers-z3rgelna1x.jpg"
      />
      <img
        className="food-img"
        alt="biryani"
        src="https://blog.railrestro.com/wp-content/uploads/2016/07/Briyani-ordering-in-Train-1024x683.jpg"
      />
      <img
        className="food-img"
        alt="biryani"
        src="https://b.zmtcdn.com/data/pictures/9/18960229/de8c24208ea1162ba4434ad24cfc5c2a.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      />
    </div>
  </div>,
  document.getElementById("root")
);
