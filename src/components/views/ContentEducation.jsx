import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { store } from "../context/ContextApp";
import Diplomas from "../diplomas/Diplomas";

const ContentEducation = () => {
  const { setButton3 } = useContext(store);

  useEffect(() => {
    setButton3(true);
  }, []);
  return (
    <div className="animated__animated animate__bounceIn border-white/30 border-[1px] rounded-md flex justify-evenly items-start flex-wrap gap-5  p-8 pt-10 pb-12 overflow-y-scroll  1000px:h-[82rem] 1060px:h-[80.5rem] 1160px:h-[79rem] 1196px:h-[77rem] 1479px:h-[75rem] custom-scroll">
      <div>
        <Diplomas
          img={"bg-img-tecnologo"}
          link={
            "https://drive.google.com/file/d/1Sk_C_IRnmdSzxJpOxgcugP6IQTVuKZkb/view?usp=sharing"
          }
        />
      </div>
      <div>
        <Diplomas
          img={"bg-img-tecnico"}
          link={
            "https://drive.google.com/file/d/1mwYkmzTUIpga9ZVfpbDROv2coq2VaZRy/view"
          }
        />
      </div>
      <div>
        <Diplomas
          img={"bg-img-bachiller"}
          link={
            "https://drive.google.com/file/d/1N8WSQ3jL7MxvGVu3tACXYEduy_fxqH8e/view"
          }
        />
      </div>
    </div>
  );
};

export default ContentEducation;
