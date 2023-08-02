import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { store } from "../context/ContextApp";
import Webs from "../Webs/Webs";

const ContentApps = () => {
  const { setButton1 } = useContext(store);

  useEffect(() => {
    setButton1(true);
  }, []);
  return (
    <div className="border-white/30 border-[1px] rounded-md flex justify-evenly flex-wrap gap-5 items-start p-8 pt-10 pb-12 animated__animated animate__bounceIn 1000px:h-[82rem] 1060px:h-[80.5rem] 1160px:h-[79rem] 1196px:h-[77rem] 1479px:h-[75rem]">
      <div>
        <Webs
          title={"BIBLIOTECA PERSONAL DE SERIES VISTAS"}
          text={
            "Permite a los usuarios llevar un registro organizado y visualmente atractivo de las series de televisión que han visto."
          }
          img={"bg-img-animex"}
          link={"https://animex-app.netlify.app/"}
        />
      </div>

      <div>
        <Webs
          title={"SISTEMA WEB DE FACTURACIÓN POS Y GESTIÓN DE INVENTARIO"}
          text={"Aplicación web personalizada para la pizzería Caprichos "}
          img={"bg-img-caprichos"}
          link={"https://webcaprichos.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default ContentApps;
