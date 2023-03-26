import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(e) => props.handleChange(e)}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
