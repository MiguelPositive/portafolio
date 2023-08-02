import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { store } from "../context/ContextApp";
import ButtonNav from "../buttons/ButtonNav";

const Nav = () => {
  const {
    button1,
    button2,
    button3,
    setButton1,
    setButton2,
    setButton3,
    modeDark,
  } = useContext(store);

  const handleClickApps = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };

  const handleClickwebs = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };

  const handleClickEducation = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };

  //variables para el cambio de modo oscuro a claro

  const [bgCard, setBgCard] = useState("bg-card");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    if (modeDark) {
      setBgCard("bg-card");
      setTextColor("text-white");
    } else {
      setBgCard("bg-white");
      setTextColor("text-card");
    }
  }, [modeDark]);

  return (
    <div
      className={`w-[100%] ${bgCard}   
      ${
        modeDark ? "border-white/30" : "border-[#306AC1]"
      } border-[1px] flex justify-between items-center gap-2 p-2 rounded-md overflow-hidden transition-all duration-150 overflow-x-scroll 400px:overflow-x-auto custom-scroll 1000px:w-[97%] `}
    >
      <div className="flex justify-center items-center gap-5">
        <div className="">
          <ButtonNav
            name={"APLICACIONES"}
            go="/apps"
            main={button1}
            action={handleClickApps}
          />
        </div>

        <div className="">
          <ButtonNav
            name="WEBS"
            go="/webs"
            main={button2}
            action={handleClickwebs}
          />
        </div>

        <div className="">
          <ButtonNav
            name="EDUCACIÓN"
            go="/education"
            main={button3}
            action={handleClickEducation}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
