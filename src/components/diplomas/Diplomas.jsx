import React from "react";
import { useContext } from "react";

import { store } from "../context/ContextApp";

const Diplomas = ({ img, link }) => {
  const { modeDark } = useContext(store);

  return (
    <a target="_blank" href={link}>
      <div
        className={`${img} bg-cover w-[40rem] h-[60rem] rounded-md transition-all duration-150 ${
          !modeDark ? "shadow-xl shadow-black/70" : ""
        }`}
      ></div>
    </a>
  );
};

export default Diplomas;
