/** @format */

import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import ThemeBtn from "../components/UI/ThemeBtn";
import { ThemeProvider } from "../context/ThemeContext";

const ThemeChanger = () => {
  const [themeMode, setthemeMode] = useState("light");
  const lightTheme = () => {
    setthemeMode("light");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    document.querySelector(".themeapp").classList.remove("light", "dark");
    document.querySelector(".themeapp").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex themeapp flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn />
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeChanger;
