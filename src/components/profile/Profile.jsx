import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const Profile = () => {
  return (
    <div className="bg-card text-white flex justify-center items-center flex-wrap relative pt-5 pb-5">
      <div
        id="border-image-profile"
        className="w-[10rem] h-[10rem] rounded-full bg-custom-blue absolute top-8"
      ></div>
      <div
        id="image-profile"
        className="w-[9rem] h-[9rem] bg-img-profile bg-cover bg-left-top rounded-full absolute top-10"
      ></div>

      <p className="font-finger-paint text-[200%] text-center pt-[13rem] w-full">
        <p>Miguel Angel</p> <p>Clavijo Moreno</p>
      </p>
      <p className="w-full text-center mt-5">
        Desarrollador Frontend con React Js
      </p>
      <p className="text-justify w-full pl-8 pr-8 mt-3">
        Soy un desarrollador autodidacta que se encuentra en un constante
        proceso de aprendizaje, con el objetivo diario de crear soluciones
        eficientes para los proximos desafios.
      </p>
    </div>
  );
};

export default Profile;
