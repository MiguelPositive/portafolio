import React from "react";

const Diplomas = ({ img, link }) => {
  return (
    <a target="_blank" href={link}>
      <div className={`${img} bg-cover w-[40rem] h-[60rem] rounded-md `}></div>
    </a>
  );
};

export default Diplomas;
