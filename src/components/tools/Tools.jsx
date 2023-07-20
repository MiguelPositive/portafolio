import React from "react";

const Tools = ({ name, icon }) => {
  return (
    <a
      target="_blank"
      href=""
      className="w-full flex justify-center items-center flex-wrap "
    >
      <div
        id="image-tool"
        className={`w-[5rem] h-[5rem] ${icon} bg-cover`}
      ></div>

      <div id="name-tool" className="w-full text-center mt-5">
        {name}
      </div>
    </a>
  );
};

export default Tools;
