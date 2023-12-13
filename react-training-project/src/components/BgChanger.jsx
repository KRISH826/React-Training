/** @format */

import React, { useState } from "react";

const BgChanger = () => {
  const [Color, setColor] = useState("green");
  return (
    <>
      <div className='buttons-group mt-5 flex gap-3 justify-center'>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("blue")}>blue</button>
      </div>
      <div className='w-80 h-80 my-3' style={{ backgroundColor: Color }}></div>
    </>
  );
};

export default BgChanger;
