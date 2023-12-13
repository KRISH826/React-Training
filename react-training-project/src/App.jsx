/** @format */

import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let [counter, setcounter] = useState(0);

  let cardDetails = {
    des: "hi i am krishnendu sekhar panja",
    btnname: "see profile",
  };

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
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      {/* <h3 className='my-3'>Count is {counter}</h3>
      <button style={{ marginRight: 10 }} onClick={valueAdd}>
        Add
      </button>
      <button onClick={valueRemove}>Remove</button> */}
      <Card title='Title One' details={cardDetails} />
    </>
  );
}

export default App;
