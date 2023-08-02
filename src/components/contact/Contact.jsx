import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { store } from "../context/ContextApp";
import Tools from "../tools/Tools";

const Contact = () => {
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
      className={`w-full ${bgCard} ${textColor}  
      ${
        modeDark ? "border-white/30" : "border-[#306AC1]"
      } border-[1px] flex justify-center items-center flex-wrap p-3 rounded-md overflow-hidden transition-all duration-150`}
    >
      <p className="w-full text-center text-lg font-finger-paint mt-2 mb-2 animation-contact">
        CONTACTO
      </p>

      <div className="mt-5 grid grid-cols-1 350px:grid-cols-2 500px:grid-cols-3">
        <div>
          <Tools
            name="GitHub"
            icon="bg-logo-github"
            link="https://github.com/MiguelPositive"
          />
        </div>
        <div>
          <Tools
            name="Linkedin"
            icon="bg-logo-linkedin"
            link="https://www.linkedin.com/in/miguel-angel-clavijo-moreno-6ab3aa148/"
          />
        </div>

        <div>
          <Tools
            name="WhatsApp"
            icon="bg-logo-ws"
            link="https://wa.me/+0573223380551"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
