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
    <div className="bg-card text-white flex justify-center items-center flex-wrap relative p-10 rounded-md overflow-hidden">
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
          className={`w-[9rem] h-[9rem] bg-img-profile bg-cover bg-left-top rounded-full absolute right-[10.9rem] top-12 transition-all duration-100 ${scale}`}
        ></div>
      </div>
      <div className="font-finger-paint text-[200%] text-center pt-[3rem] w-full">
        <p>Miguel Angel</p> <p>Clavijo Moreno</p>
      </div>
      <p className="w-full text-center mt-5 font-raleway font-bold text-2xl">
        Desarrollador Frontend con
        <span className="ml-1 text-[#306AC1] text-shadow-animation-2">
          React Js
        </span>
      </p>
      <p className="text-justify w-full mt-3 font-raleway font-bold text-xl">
        Soy un desarrollador autodidacta que se encuentra en un constante
        proceso de aprendizaje, con el objetivo diario de crear soluciones
        eficientes para los proximos desafios.
      </p>
    </div>
  );
};

export default Profile;
