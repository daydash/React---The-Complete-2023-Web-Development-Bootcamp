import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [list, setList] = React.useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }
  function handleClick() {
    setList((prevItem) => [...prevItem, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="note"
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
