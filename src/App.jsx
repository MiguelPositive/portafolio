import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portafolio from "./components/views/Portafolio";
import Apps from "./Apps/Apps";

const router = createBrowserRouter([
  { path: "/", element: <Portafolio /> },
  {
    path: "/apps",
    element: (
      <>
        <Portafolio>
          <Apps />
        </Portafolio>
      </>
    ),
  },
  { path: "*", element: <Portafolio /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
