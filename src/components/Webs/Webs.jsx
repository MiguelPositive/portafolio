import React from "react";
import { useContext, useEffect, useState } from "react";

import { store } from "../context/ContextApp";

const Webs = ({ title, text, img, link }) => {
  const { modeDark } = useContext(store);

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
      className={`
      ${
        modeDark ? "border-white/30" : "border-[#306AC1]"
      } border-[1px] rounded-md w-[20rem] ${textColor} overflow-hidden transition-all duration-150 hover:scale-105`}
    >
      <a target="_blank" href={link}>
        <div
          id="card-apps"
          className="flex justify-center items-center rounded-md mt-7"
        >
          <div
            id="img-card-apps"
            className={`${img} bg-cover bg-center rounded-md w-[18rem] h-[14rem] shadow-md shadow-black/80`}
            title={title}
          ></div>
        </div>
        <div className="p-5">
          <p className="text-lg font-finger-paint mb-5 text-start">{title}</p>

          <p className="text-lg text-justify font-raleway">{text}</p>
        </div>
      </a>
    </div>
  );
};

export default Webs;
