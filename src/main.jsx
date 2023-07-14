import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portafolio from "./views/Portafolio.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Portafolio /> },
  { path: "*", element: <Portafolio /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
