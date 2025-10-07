import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      console.log("You don't do more update because max value is 20");
    } else {
      setCounter(counter + 1);
      console.log("clicked", counter);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      console.log("You get downward to 0");
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
    </>
  );
}

export default App;
