import React from "react";
import ReactDOM from "react-dom/client";
import ContextApp from "./components/context/ContextApp.jsx";
import App from "./App.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApp>
      <App />
    </ContextApp>
  </React.StrictMode>
);
