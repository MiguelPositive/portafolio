import React from "react";
import Portafolio from "./Portafolio";
import Apps from "../Webs/Webs";

const ContentWebs = () => {
  return (
    <div className="bg-card shadow-md shadow-black/80 rounded-md flex justify-evenly flex-wrap gap-5 items-start p-8 pt-10 pb-12 animated__animated animate__bounceIn">
      <div className="">
        <Apps
          title={"BIBLIOTECA PERSONAL DE SERIES VISTAS"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tellus turpis. Ut lobortis ullamcorper luctus. Integer quis metus id lacus vehicula auctor a quis tortor. Fusce at elit sit amet massa ullamcorper porttitor"
          }
          img={"bg-img-animex"}
          link={"https://animex-app.netlify.app/"}
        />
      </div>

      <div>
        <Apps
          title={"SISTEMA WEB DE FACTURACIÓN POS Y GESTIÓN DE INVENTARIO"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tellus turpis. Ut lobortis ullamcorper luctus. Integer quis metus id lacus vehicula auctor a quis tortor. Fusce at elit sit amet massa ullamcorper porttitor"
          }
          img={"bg-img-animex"}
          link={"https://animex-app.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default ContentWebs;
