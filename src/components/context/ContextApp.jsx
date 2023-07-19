import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const ContextApp = ({ children }) => {

  return <store.Provider value={{  }}>{children}</store.Provider>;
};

export default ContextApp;
