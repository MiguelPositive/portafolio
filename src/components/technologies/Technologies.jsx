import React from "react";
import Tools from "../tools/Tools";

const Technologies = () => {
  return (
    <div className="bg-card text-white p-5 rounded-md overflow-hidden">
      <p className="font-finger-paint text-center mt-3 mb-5">TECNOLOGÍAS</p>
      <div className="grid grid-cols-1 350px:grid-cols-2 500px:grid-cols-4 730px:grid-cols-6">
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
        <div>
          <Tools name={"Express Js"} icon="bg-logo-express" />{" "}
        </div>

        <div>
          <Tools name={"MongoDB"} icon={"bg-logo-mongo"} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
