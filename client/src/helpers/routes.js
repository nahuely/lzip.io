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

//TODO: refactor this function (naming, and error control)
export const getRoute = (route, routes, fullPath = "") => {
  if (route.length === 1) {
    if (!routes[route[0]]) throw new Error(`${route[0]} doesnt exists`);
    return (fullPath += routes[route[0]].path);
  } else {
    let first = route[0];
    if (!routes[first]) throw new Error(`${first} doesnt exists`);
    return getRoute(
      route.slice(1, route.length),
      routes[first].routes,
      (fullPath += routes[first].path)
    );
  }
};
