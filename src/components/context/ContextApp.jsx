import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const ContextApp = ({ children }) => {


  // Son los botones del nav

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  return (
    <store.Provider
      value={{ button1, button2, button3, setButton1, setButton2, setButton3 }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextApp;
