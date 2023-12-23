/** @format */

import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import Counter from "./components/Counter";
import Besthook from "./components/Besthook";
import CustomHooks from "./components/InputBox";
import Currency from "./pages/Currency";
import MiniContext from "./components/MiniContext";

function App() {
  let cardDetails = {
    des: "hi i am krishnendu sekhar panja",
    btnname: "see profile",
  };

  return (
    <>
      {/* <Counter /> */}
      {/* <BgChanger /> */}
      {/* <Card title='Title One' details={cardDetails} /> */}
      {/* <Besthook /> */}
      {/* <Currency /> */}
      <MiniContext />
    </>
  );
}

export default App;
