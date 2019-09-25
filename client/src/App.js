import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import { generateRoutes } from "./helpers/routes";
import ErrorBoundary from "./components/error-boundary";
import Footer from "./components/footer";
import Header from "./components/header";
import routes from "./config/routes";
import views from "./views";

import "./app.scss";

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
