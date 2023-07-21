import React from "react";
import { useState } from "react";

const Profile = () => {
  const [scale, setScale] = useState("");

  const handleMouseOver = () => {
    setScale("scale-125");
  };

  const handleMouseOut = () => {
    setScale("");
  };

  return (
    <div className="bg-card shadow-md shadow-black/80 text-white flex justify-center items-center flex-wrap relative p-10 pl-8 pr-8 rounded-md overflow-hidden">
      <div
        id="conatiner-image-profile"
        className="w-[10rem] h-[10rem] rounded-full transition-all duration-150 hover:shadow-2xl hover:shadow-[#306AC1]/90"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          id="border-image-profile"
          className={`w-[10rem] h-[10rem] rounded-full bg-custom-blue absolute top-10 transition-all duration-100 ${scale} 
        `}
        ></div>
        <div
          id="image-profile"
          className={`w-[9rem] h-[9rem] bg-img-profile bg-cover bg-left-top rounded-full absolute right-[5.7rem] top-12 transition-all duration-100 ${scale}`}
        ></div>
      </div>
      <div className="font-finger-paint text-[170%] text-center pt-[3rem] w-full">
        <p>Miguel Angel</p> <p>Clavijo Moreno</p>
      </div>
      <p className="w-full mt-5 font-raleway font-bold text-lg text-justify">
        Desarrollador Frontend con uso de
        <span className="ml-2 mr-2 text-[#306AC1] text-shadow-animation-2">
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
