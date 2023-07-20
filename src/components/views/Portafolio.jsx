import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Profile from "../profile/Profile";
import Contact from "../contact/Contact";
import Technologies from "../technologies/Technologies";
import Nav from "../nav/Nav";

const Portafolio = ({ children }) => {
  const [count, setCount] = useState(0);
  const [animationPreloader, setAnimationPreloader] =
    useState("animate__bounceIn");
  const [overflowTemp, setOverflowTemp] = useState("overflow-hidden");

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

  return (
    <div
      className={`${overflowTemp} overflow-x-hidden w-screen h-screen bg-dark p-5`}
    >
      <div
        id="animation-preloader"
        className={`hidden animated__animated ${animationPreloader} w-full h-full flex justify-center items-center`}
      >
        <div
          id="card-animation"
          className="bg-card w-[90%] h-[60%] rounded-md flex flex-wrap justify-center items-center 400px:w-[70%] 460px:w-[65%] 530px:w-[60%] 750px:w-[50%] 850px:w-[45%] 900px:w-[42%] 1000px:w-[45%] 1000px:h-[70%]"
        >
          <div className="bg-logo-react bg-cover w-[10rem] h-[10rem] animate-spin"></div>

          <div className="w-full text-center text-white text-[300%] font-finger-paint">
            <span className="text-shadow-animation">{count}%</span>
          </div>
        </div>
      </div>

      <div className="mb-7">
        <Profile />
      </div>

      <div className="mb-7">
        <Contact />
      </div>

      <div className=" mb-7">
        <Technologies />
      </div>

      <div className="">
        <Nav />
      </div>

      <div>{children}</div>
    </div>
  );
};
export default Portafolio;
