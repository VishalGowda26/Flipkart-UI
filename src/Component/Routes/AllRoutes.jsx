import React from "react";
import { Route } from "react-router-dom";
import App from "../../App";
import navs from "./Navigations";

const user = {
  username: "",
  role: "SELLER",
  isAuthenticated: false,
};
const { role, isAuthenticated } = user;

const AllRoutes = () => {
  const routes = () => {
    return (
      <Route path={"/"} element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };
  return routes();
};

export default AllRoutes;