import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portafolio from "./components/views/Portafolio";

const router = createBrowserRouter([
  { path: "/", element: <Portafolio /> },
  { path: "*", element: <Portafolio /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
