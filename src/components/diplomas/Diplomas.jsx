import React from "react";
import { useContext } from "react";

import { store } from "../context/ContextApp";

const Diplomas = ({ img, link }) => {
  const { modeDark } = useContext(store);

  return (
    <a target="_blank" href={link}>
      <div
        className={`${img} bg-cover w-[13rem] h-[18rem] rounded-md transition-all duration-150 ${
          !modeDark ? "shadow-xl shadow-black/70" : ""
        } 350px:w-[17.5rem] 350px:h-[26rem] 450px:w-[21rem] 450px:h-[28rem] 550px:w-[26rem] 550px:h-[36rem] 650px:w-[35rem] 650px:h-[50rem] 750px:w-[40rem] 750px:h-[60rem] 900px:w-[45rem] 900px:h-[65rem] 1000px:w-[35rem] 1000px:h-[50rem] 1160px:w-[45rem] 1160px:h-[65rem]`}
      ></div>
    </a>
  );
};

export default Diplomas;
