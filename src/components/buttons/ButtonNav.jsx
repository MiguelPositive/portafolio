import React from "react";

import { Link } from "react-router-dom";

const ButtonNav = ({ name, action, go }) => {
  return (
    <Link to={go}>
      <div
        className="font-finger-paint text-white border-[1px] border-gray-300/50 rounded-md p-1 pl-2 pr-2 transition-all duration-200 hover:bg-custom-blue"
        onClick={action}
      >
        {name}
      </div>
    </Link>
  );
};

export default ButtonNav;
