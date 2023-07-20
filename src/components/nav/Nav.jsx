import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

import ButtonNav from "../buttons/ButtonNav";

const Nav = () => {
  const { button1, button2, button3, setButton1, setButton2, setButton3 } =
    useContext(store);

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

  return (
    <div className="bg-card w-full flex justify-start items-center gap-2 p-2 rounded-md overflow-hidden">
      <div className="transition-all duration-200  hover:bg-custom-blue hover:rounded-md">
        <ButtonNav
          name={"APLICACIONES"}
          go="/apps"
          main={button1}
          action={handleClickApps}
        />
      </div>

      <div className="transition-all duration-200  hover:bg-custom-blue hover:rounded-md">
        <ButtonNav
          name="WEBS"
          go="/webs"
          main={button2}
          action={handleClickwebs}
        />
      </div>

      <div className="transition-all duration-200  hover:bg-custom-blue hover:rounded-md">
        <ButtonNav
          name="EDUCACIÓN"
          go="/education"
          main={button3}
          action={handleClickEducation}
        />
      </div>
    </div>
  );
};

export default Nav;
