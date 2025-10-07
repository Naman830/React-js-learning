import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
    let [message, setMessage] = useState(""); // 👈 new line

  const addValue = () => {
    if (counter >= 20) {
       setMessage("⚠️ You can’t go above 20!"); // 👈 show message on page
    } else {
      setCounter(counter + 1);
      console.log("clicked", counter);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
        setMessage("⚠️ You can’t go below 0!"); // 👈 show message
    } else {
      setCounter(counter - 1);
      console.log("clicked", counter);
    }
  };

  return (
    <>
      <h1>Naman Or react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <p>Hello footer: {counter}</p>
      <br />
      <br />
      <p style={{ color: "red", fontWeight: "bold" }}>limitaions for you :{message}</p>
    </>
  );
}

export default App;
