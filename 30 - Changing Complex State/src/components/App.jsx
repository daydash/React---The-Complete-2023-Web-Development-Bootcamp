import React from "react";

function App() {
  /*
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");

  function handleFName(event) {
    setFname(event.target.value);
  }

  function handleLName(event) {
    setLname(event.target.value);
  }
  */

  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  /*
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  */

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(event.target);

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {/* Hello {fName} {lName} */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          // onChange={handleFName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={fName}
          value={fullName.fName}
        />
        <input
          // onChange={handleLName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={lName}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
