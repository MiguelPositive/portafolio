import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { store } from "../context/ContextApp";
import Webs from "../Webs/Webs";

const ContentWebs = () => {
  const { setButton2, modeDark } = useContext(store);

  //variables para el cambio de modo oscuro a claro

  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setButton2(true);
  }, []);

  useEffect(() => {
    if (modeDark) {
      setBgColor("");
    } else {
      setBgColor("bg-white");
    }
  }, [modeDark]);

  return (
    <div
      className={`animated__animated animate__bounceIn 
      ${bgColor}
     ${modeDark ? "border-white/30" : "border-[#306AC1]"}
     border-[1px]  rounded-md flex justify-evenly flex-wrap gap-5 items-center p-8 pt-10 pb-12 overflow-y-scroll  1000px:h-[82rem] 1060px:h-[80.5rem] 1160px:h-[79rem] 1196px:h-[77rem] 1479px:h-[75rem] custom-scroll`}
    >
      <div>
        <Webs
          title={"APRENDE A CODIFICAR MIRANDO A OTROS"}
          text={
            "Vea cómo los desarrolladores experimentados resuelven problemas en tiempo real."
          }
          img={"bg-img-learn"}
          link={
            "https://miguelpositive.github.io/intro-component-with-signup-form-master.github.io/"
          }
        />
      </div>
      <div>
        <Webs
          title={"OBTEN TRABAJO REMOTO"}
          text={
            "Sincronice a su equipo, sin importar su ubicación. Optimice los procesos, cree rituales de equipo y observe cómo se dispara la productividad."
          }
          img={"bg-img-snap"}
          link={
            "https://miguelpositive.github.io/intro-section-with-dropdown-navigation-main.github.io/#"
          }
        />
      </div>
      <div>
        <Webs
          title={"INFORMACIÓN DE AYUDA EN ACORDEON."}
          text={
            "Aquí podras encontrar información util dividida en diferentes secciones."
          }
          link={
            "https://miguelpositive.github.io/faq-accordion-card-main.github.io/"
          }
          img={"bg-img-acordeon"}
        />
      </div>

      <div>
        <Webs
          title={"RESEÑAS DE GRANDES PRODUCTOS"}
          text={
            "Solo ofrecemos excelentes productos combinados con un excelente servicio al cliente"
          }
          link={
            "https://miguelpositive.github.io/social-proof-section-master.github.io/"
          }
          img={"bg-img-social"}
        />
      </div>

      <div>
        <Webs
          title={"TARJETA BANCARIA"}
          text={
            "Inicio de sesión para el acceso a los datos de su cuenta cuenta de banco."
          }
          img={"bg-img-bank"}
          link={
            "https://miguelpositive.github.io/interactive-card-details-form-main.github.io/"
          }
        />
      </div>
    </div>
  );
};

export default ContentWebs;
