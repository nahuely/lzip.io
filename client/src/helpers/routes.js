import React from "react";
import { Route } from "react-router-dom";

export const generateRoutes = (route, path) => {
  if (!route.routes) {
    return (
      <Route
        exact={route.exact}
        key={path}
        path={path}
        component={route.component}
      />
    );
  }

  return Object.entries(route.routes).map(([_, r]) =>
    generateRoutes(r, path + r.path)
  );
};
