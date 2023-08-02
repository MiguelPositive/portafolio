import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { store } from "../context/ContextApp";

const ButtonMode = () => {
  const { modeDark, setModeDark } = useContext(store);

  const [logo, setLogo] = useState("bg-logo-moon");
  const [positionBg, setPositionBg] = useState("top-1 right-1");
  const [positionLogo, setPositionLogo] = useState("top-2 right-2");
  const [bgButton, setBgButton] = useState("bg-black");

  const handleClick = () => {
    setModeDark(!modeDark);
  };

  useEffect(() => {
    if (modeDark) {
      setLogo("bg-logo-moon");
      setPositionBg("top-1 right-1");
      setPositionLogo("top-2 right-2");
      setBgButton("bg-black");
    } else {
      setLogo("bg-logo-sun");
      setPositionBg("top-1 left-1");
      setPositionLogo("top-2 left-2");
      setBgButton("bg-white");
    }
  }, [modeDark]);
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <div className="w-[4.5rem] h-[2.2rem] bg-custom-blue rounded-full"></div>
      <div
        className={`absolute ${positionBg} w-[1.7rem] h-[1.7rem] ${bgButton} rounded-full z-10`}
      ></div>
      <div
        id="logo-button"
        className={`absolute ${positionLogo} ${logo} bg-cover w-[1.2rem] h-[1.25rem] z-20`}
      ></div>
    </div>
  );
};

export default ButtonMode;
