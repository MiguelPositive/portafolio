import React, { useEffect, useState } from "react";

const Tools = ({ name, icon, link }) => {
  const [w, setW] = useState("w-[4rem]");
  const [h, setH] = useState("h-[4rem]");

  const [shadowIcon, setShadowIcon] = useState("");
  const [shadowText, setShadowText] = useState("");

  const handleMouseMove = () => {
    setShadowText("text-shadow-animation");

    switch (true) {
      case name == "GitHub" ||
        name == "React" ||
        name == "Tailwind" ||
        name == "Linkedin":
        setShadowIcon("shadow-blue");

        break;

      case name == "WhatsApp" || name == "Node Js" || name == "MongoDB":
        setShadowIcon("shadow-green");
        break;
      case name == "React-router-dom" || name == "Express Js":
        setShadowIcon("shadow-gray");
        break;
      default:
    }
  };

  const handleMouseOut = () => {
    setShadowIcon("");
    setShadowText("");
  };

  useEffect(() => {
    if (name == "React-router-dom") {
      setW("w-[6.3rem] rounded-md");
      setH("h-[4.2rem]");
    } else if (name == "Node Js") {
      setW("w-[3.9rem] rounded-md");
      setH("h-[4.5rem]");
    } else if (name == "MongoDB") {
      setH("h-[5.8rem] rounded-md");
    }
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      className="transition-all duration-100 hover:scale-110"
    >
      <a
        target="_blank"
        href={link}
        className="w-full flex justify-center items-center flex-wrap"
      >
        <div
          id="image-tool"
          className={` bg-cover transition-all duration-100 rounded-full ${w} ${h} ${icon} ${shadowIcon}`}
          title={name}
        ></div>

        <div
          id="name-tool"
          className={`w-full text-center text-xl font-raleway font-bold mt-5 transition-all duration-100 ${shadowText}`}
        >
          {name}
        </div>
      </a>
    </div>
  );
};

export default Tools;
