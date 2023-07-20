import React, { useEffect, useState } from "react";

const Tools = ({ name, icon, link }) => {
  const [w, setW] = useState("w-[4rem]");
  const [h, setH] = useState("h-[4rem]");

  useEffect(() => {
    if (name == "React-router-dom") {
      setW("w-[6rem]");
    } else if (name == "Node Js") {
      setW("w-[4.5rem]");
      setH("h-[5.2rem]");
    } else if (name == "MongoDB") {
      setH("h-[5rem]");
    }
  }, []);

  return (
    <div>
      <a
        target="_blank"
        href={link}
        className="w-full flex justify-center items-center flex-wrap "
      >
        <div
          id="image-tool"
          className={`${w} ${h} ${icon} bg-cover`}
          title={name}
        ></div>

        <div id="name-tool" className="w-full text-center mt-5">
          {name}
        </div>
      </a>
    </div>
  );
};

export default Tools;
