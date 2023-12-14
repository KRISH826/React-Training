/** @format */

import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  // const valueAdd = () => {
  //   setcounter(counter + 1);
  //   setcounter(counter + 1);
  //   setcounter(counter + 1);
  //   setcounter(counter + 1);
  //   setcounter(counter + 1);
  // };

  const valueAdd = () => {
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
  };

  // eta ekbare

  const valueRemove = () => {
    setcounter(counter - 1);
    if (counter == 0) {
      setcounter(0);
    }
  };
  return (
    <>
      <h3 className='my-3'>Count is {counter}</h3>
      <button style={{ marginRight: 10 }} onClick={valueAdd}>
        Add
      </button>
      <button onClick={valueRemove}>Remove</button>
    </>
  );
};

export default Counter;
