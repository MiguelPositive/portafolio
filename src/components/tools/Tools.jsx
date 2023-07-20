import React, { useEffect, useState } from "react";

const Tools = ({ name, icon, link }) => {
  const [w, setW] = useState("w-[5rem]");
  const [h, setH] = useState("h-[5rem]");

  useEffect(() => {
    if (name == "React-router-dom") {
      setW("w-[7.5rem]");
    } else if (name == "Node Js") {
      setW("w-[5.5rem]");
      setH("h-[6.2rem]");
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
