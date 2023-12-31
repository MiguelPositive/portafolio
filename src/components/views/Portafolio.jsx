import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { store } from "../context/ContextApp";
import Profile from "../profile/Profile";
import Contact from "../contact/Contact";
import Technologies from "../technologies/Technologies";
import Nav from "../nav/Nav";

const Portafolio = ({ children }) => {
  const { modeDark } = useContext(store);

  const [count, setCount] = useState(0);
  const [animationPreloader, setAnimationPreloader] =
    useState("animate__bounceIn");
  const [overflowTemp, setOverflowTemp] = useState("overflow-hidden");

  //variables para el cambio de modo oscuro a claro

  const [bgColor, setBgColor] = useState("bg-dark");

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        setAnimationPreloader("animate__bounceOut");
        clearInterval(interval);
      } else {
        setCount(count + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    if (animationPreloader == "animate__bounceOut") {
      setTimeout(() => {
        setAnimationPreloader("hidden");
        setOverflowTemp("");
      }, 600);
    }
  }, [animationPreloader]);

  useEffect(() => {
    if (modeDark) {
      setBgColor("bg-dark");
    } else {
      setBgColor("bg-[#E9E9E9]");
    }
  }, [modeDark]);

  return (
    <div
      className={`${overflowTemp} overflow-x-hidden w-full h-screen ${bgColor} p-5 custom-scroll transition-all duration-150`}
    >
      <div
        id="animation-preloader"
        className={`animated__animated ${animationPreloader} w-full h-full flex justify-center items-center mb-10`}
      >
        <div
          id="card-animation"
          className="bg-card w-[20rem] h-[20rem] rounded-md flex flex-wrap justify-center items-center p-5 350px:h-[22rem] 400px:w-[22rem]  450px:w-[24rem] 450px:h-[24rem] 500px:w-[26rem] 500px:h-[28rem] "
        >
          <div className="bg-logo-react bg-cover w-[10rem] h-[10rem] animate-spin"></div>

          <div className="w-full text-center text-white text-[300%] font-finger-paint">
            <span className="text-shadow-animation">{count}%</span>
          </div>
        </div>
      </div>
      <div className="portafolio-desktop">
        <div>
          <div className="mb-7">
            <Profile />
          </div>

          <div className="mb-7">
            <Contact />
          </div>

          <div className=" mb-7">
            <Technologies />
          </div>
        </div>

        {/* De aqui para abajo es lo que se va a cargar en aplicaciones, webs y educación */}
        <div id="contend" className="overflow-hidden">
          <div className="mb-5">
            <Nav />
          </div>

          <div className="w-[100%] 1000px:w-[97%]"> {children}</div>
        </div>
      </div>
    </div>
  );
};
export default Portafolio;
