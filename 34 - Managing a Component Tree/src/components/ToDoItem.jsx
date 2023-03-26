import React from "react";

function Todo(props) {
  const [isDone, setIsDone] = React.useState(false);

  function handleisDone() {
    setIsDone(!isDone);
    // setIsDone((prevValue) => {
    //   return !prevValue;
    // });
  }

  return (
    // <div onClick={handleisDone}>
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
        // onClick={handleisDone}
        // style={isDone ? { textDecoration: "line-through" } : null}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.todoItem}
      </li>
    </div>
  );
}

export default Todo;
