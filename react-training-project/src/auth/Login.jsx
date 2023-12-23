/** @format */

import React, { useContext, useState } from "react";
import UserContext from "../context/UseContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email, password });
  };
  return (
    <div className='shadow-xl my-4 rounded p-7 w-fit mx-auto'>
      <h2 className='text-2xl text-center font-semibold mb-4'>Login</h2>
      <input
        className='h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='email'
        value={email}
        placeholder='Email'
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className='h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 ml-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        type='button'
        className='rounded-md bg-black px-3 py-2 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        onClick={handleSubmit}>
        login
      </button>
    </div>
  );
};

export default Login;
