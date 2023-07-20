import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ButtonNav = ({ name, go, main, action }) => {
  return (
    <Link to={go}>
      <div
        className={`font-finger-paint text-white border-[1px] rounded-md border-gray-300/50 p-1 pl-2 pr-2" 
        ${main ? "bg-custom-blue" : ""}`}
        onClick={action}
      >
        {name}
      </div>
    </Link>
  );
};

export default ButtonNav;
