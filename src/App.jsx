import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portafolio from "./components/views/Portafolio";
import ContentApps from "./components/views/ContentApps";
import ContentWebs from "./components/views/ContentWebs";
import ContentEducation from "./components/views/ContentEducation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Portafolio>
          <ContentApps />
        </Portafolio>
      </>
    ),
  },

  {
    path: "/webs",
    element: (
      <>
        <Portafolio>
          <ContentWebs />
        </Portafolio>
      </>
    ),
  },

  {
    path: "/education",
    element: (
      <>
        <Portafolio>
          <ContentEducation />
        </Portafolio>
      </>
    ),
  },

  {
    path: "*",
    element: (
      <>
        <Portafolio>
          <ContentApps />
        </Portafolio>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
