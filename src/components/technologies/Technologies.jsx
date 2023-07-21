import React from "react";
import Tools from "../tools/Tools";

const Technologies = () => {
  return (
    <div className="bg-card shadow-md shadow-black/80 text-white p-5 rounded-md overflow-hidden ">
      <p className="font-finger-paint text-center text-xl mt-3 mb-5 text-shadow-animation">
        TECNOLOGÍAS
      </p>
      <div className="grid grid-cols-1 350px:grid-cols-2 500px:grid-cols-4 900px:grid-cols-2 900px:gap-5">
        <div>
          <Tools
            name="React"
            icon="bg-logo-react"
            link={"https://es.react.dev/"}
          />
        </div>

        <div>
          <Tools
            name="React-router-dom"
            icon="bg-logo-react-router-dom"
            link={"https://reactrouter.com/en/main"}
          />
        </div>

        <div>
          <Tools
            name="Tailwind"
            icon="bg-logo-tailwind"
            link={"https://tailwindcss.com/"}
          />
        </div>
        <div>
          <Tools
            name="Node Js"
            icon="bg-logo-node"
            link={"https://nodejs.org/en/docs"}
          />
        </div>
        <div>
          <Tools
            name={"Express Js"}
            icon="bg-logo-express"
            link={"https://expressjs.com/es/"}
          />
        </div>

        <div>
          <Tools
            name={"MongoDB"}
            icon={"bg-logo-mongo"}
            link={"https://www.mongodb.com/es/atlas/database"}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
