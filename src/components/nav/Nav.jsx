import React from "react";
import { Link } from "react-router-dom";

import ButtonNav from "../buttons/ButtonNav";

const Nav = () => {
  return (
    <div className="bg-card w-full flex justify-start items-center gap-2">
      <div>
        <ButtonNav name={"APLICACIONES"} go="/apps" />{" "}
      </div>

      <div>
        <ButtonNav name="WEBS" go="/webs" />
      </div>

      <div>
        <ButtonNav name="EDUCACIÓN" go="/education" />
      </div>
    </div>
  );
};

export default Nav;
