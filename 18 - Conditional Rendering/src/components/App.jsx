import React from "react";
import Form from "./Form";

var isLoggedIn = true;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Form />
        currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
