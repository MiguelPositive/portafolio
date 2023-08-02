import React, { useEffect, useState, useContext } from "react";
import { store } from "../context/ContextApp";

import { Link } from "react-router-dom";

const ButtonNav = ({ name, go, main, action }) => {
  const { modeDark } = useContext(store);
  const [style, setStyle] = useState("");
  const handleMove = () => {
    setStyle("text-white bg-custom-blue");
  };

  const handleMouseOut = () => {
    setStyle("");
  };

  return (
    <Link to={go}>
      <div
        className={`font-finger-paint ${style}
         ${
           modeDark
             ? "border-white/30 text-white"
             : "border-[#306AC1] text-[#306AC1]"
         } border-[1px] rounded-md  p-1 pl-2 pr-2" 
        ${
          main === true && (modeDark === false || modeDark === true)
            ? "bg-custom-blue shadow-md shadow-[#306AC1] text-white"
            : ""
        }
        transition-all duration-200`}
        onClick={action}
        onMouseMove={handleMove}
        onMouseOut={handleMouseOut}
      >
        {name}
      </div>
    </Link>
  );
};

export default ButtonNav;
