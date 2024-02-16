import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./Component/Routes/AllRoutes.jsx";

const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
