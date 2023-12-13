/** @format */

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  const valueAdd = () => {
    setcounter(counter + 1);
  };

  const valueRemove = () => {
    setcounter(counter - 1);
    if (counter == 0) {
      setcounter(0);
    }
  };
  return (
    <>
      <h2>HI REACT</h2>
      <h3>Count is {counter}</h3>
      <button style={{ marginRight: 10 }} onClick={valueAdd}>
        Add
      </button>
      <button onClick={valueRemove}>Remove</button>
    </>
  );
}

export default App;
