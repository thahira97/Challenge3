// InputContext.js
import React, { createContext, useContext, useState } from "react";
import page from "../assets/Screenshot 2023-11-22 at 10.22.39 PM.png"
const InputContext = createContext();

const InputContextProvider = ({ children }) => {

  const [input, setInput] = useState({
    titleBox: "",
    slugBox: "",
    textBox: "",
    image: "",
  });

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputContextProvider };
