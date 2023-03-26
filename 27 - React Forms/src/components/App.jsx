import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      {/* <h1>Hello {name}</h1> */}
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
