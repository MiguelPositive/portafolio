import React from "react";
import Tools from "../tools/Tools";

const Technologies = () => {
  return (
    <div className="bg-card text-white">
      <p className="font-finger-paint text-center">Tecnologías</p>
      <div className="grid grid-cols-1 350px:grid-cols-2 500px:grid-cols-4">
        <div>
          <Tools name="React" icon="bg-logo-react" />
        </div>

        <div>
          <Tools name="React-router-dom" icon="bg-logo-react-router-dom" />
        </div>

        <div>
          <Tools name="Tailwind" icon="bg-logo-tailwind" />
        </div>
        <div>
          <Tools name="Node Js" icon="bg-logo-node" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
