import React, { useReducer, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import { generateRoutes } from "./helpers/routes";
import ErrorBoundary from "./components/error-boundary";
import Footer from "./components/footer";
import Header from "./components/header";
import routes from "./config/routes";
import views from "./views";

import AppContext from "./context/appContext";
import DispatchContext from "./context/dispatchContext";
import { LOCAL_STORAGE_KEY } from "./config/constants";

import "./app.scss";

function getInitialState(storageKey) {
  const state = localStorage.getItem(storageKey);
  if (state) {
    return JSON.parse(state);
  }
  const initialState = { links: [] };
  localStorage.setItem(storageKey, JSON.stringify(initialState));
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case "addShortener":
      return {
        links: [...state.links, { ...action.payload }]
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    LOCAL_STORAGE_KEY,
    getInitialState
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <ErrorBoundary>
      <DispatchContext.Provider value={dispatch}>
        <AppContext.Provider value={state}>
          <Router history={history}>
            <div className="app">
              <div className="app__header">
                <Header />
              </div>
              <div className="app__main">
                <Switch>
                  {Object.entries(routes).map(([_, route]) =>
                    generateRoutes(route, route.path)
                  )}
                  <Route component={views.NotFound} />
                </Switch>
              </div>
              <div className="app__footer">
                <Footer />
              </div>
            </div>
          </Router>
        </AppContext.Provider>
      </DispatchContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
