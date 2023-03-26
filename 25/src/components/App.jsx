import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");

  function updateHeadingText() {
    setHeadingText("Submitted");
  }

  const [color, setColor] = React.useState("white");

  function updateColor() {
    setColor("black");
  }
  function normalColor() {
    setColor("white");
  }

  let myStyle = {
    backgroundColor: color
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={updateHeadingText}
        onMouseOver={updateColor}
        onMouseOut={normalColor}
        style={myStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
