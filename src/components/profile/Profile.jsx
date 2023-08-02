import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { store } from "../context/ContextApp";

const Profile = () => {
  const { modeDark } = useContext(store);

  const [scale, setScale] = useState("");

  //variables para el cambio de modo oscuro a claro

  const [bgCard, setBgCard] = useState("bg-card");
  const [textColor, setTextColor] = useState("text-white");

  const handleMouseOver = () => {
    setScale("scale-125");
  };

  const handleMouseOut = () => {
    setScale("");
  };

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
      className={`${bgCard} ${textColor}  ${
        modeDark ? "border-white/30" : "border-[#306AC1]"
      } border-[1px] flex justify-center items-center flex-wrap relative p-10 pl-8 pr-8 rounded-md overflow-hidden transition-all duration-150`}
    >
      <div
        id="conatiner-image-profile"
        className="w-[10rem] h-[10rem] rounded-full transition-all duration-150 hover:shadow-2xl hover:shadow-[#306AC1]/90 relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          id="border-image-profile"
          className={`w-[10rem] h-[10rem] rounded-full bg-custom-blue absolute top-5 transition-all duration-100 ${scale} 
        `}
        ></div>
        <div
          id="image-profile"
          className={`w-[9rem] h-[9rem] bg-img-profile bg-cover bg-left-top rounded-full absolute left-2 top-7 transition-all duration-100 ${scale}`}
        ></div>
      </div>
      <div className="font-finger-paint text-[170%] text-center pt-[3rem] w-full">
        <p>Miguel Angel</p> <p>Clavijo Moreno</p>
      </div>
      <p className="w-full mt-5 font-raleway font-bold text-lg text-justify">
        Desarrollador Frontend con uso de
        <span className="ml-2 mr-2 text-[#306AC1] text-shadow-animation-2 transition-all duration-100 hover:text-2xl">
          React Js
        </span>
        , autodidacta, que se encuentra en un constante proceso de aprendizaje
        con el objetivo diario de crear soluciones eficientes para los proximos
        desafios.
      </p>
    </div>
  );
};

export default Profile;
