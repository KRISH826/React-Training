/** @format */

import React, { useState, useCallback, useEffect } from "react";

const Besthook = () => {
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [characterallow, setcharacterallow] = useState(false);
  const [password, setpassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuywxyz";
    if (numberallow) {
      str += "0123456789";
    }
    if (characterallow) {
      str += "{]=+^*(%#)/><~";
      console.log(str);
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberallow, characterallow, setpassword]);

  useEffect(() => {
    generatePassword();
  }, [numberallow, characterallow, generatePassword, setpassword]);

  return (
    <main className='my-20 flex flex-col items-center justify-center gap-5 p-5'>
      <h2 className='text-3xl font-medium'>Password Generator</h2>
      <div className='flex gap-2 items-center'>
        <input
          type='text'
          value={password}
          className='outline-none w-[400px] h-[42px] px-3 rounded-sm'
          placeholder='generator password'
          readOnly
        />
        <button className='bg-blue-700 w-[100px] rounded-sm text-white h-[42px] hover:bg-blue-800 transition-all duration-75 ease-linear'>
          Copy
        </button>
      </div>
      <div className='flex gap-3'>
        <div className='flex items-center gap-1'>
          <input
            type='range'
            min={8}
            max={35}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
          <label className='mb-0'>length: {length}</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            type='checkbox'
            defaultChecked={numberallow}
            id='numberInput'
            onChange={() => setnumberallow((prev) => !prev)}
          />
          <label htmlFor='numberInput' className='mb-0'>
            Number Allowed
          </label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            type='checkbox'
            id='characterInput'
            defaultChecked={characterallow}
            onChange={() => setcharacterallow((prev) => !prev)}
          />
          <label htmlFor='characterInput' className='mb-0'>
            Character Allowed
          </label>
        </div>
      </div>
    </main>
  );
};

export default Besthook;
