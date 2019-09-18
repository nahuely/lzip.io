import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import { generateRoutes } from "./helpers/routes";
import ErrorBoundary from "./components/error-boundary";
import Footer from "./components/footer";
import Header from "./components/header";
import routes from "./config/routes";

function App() {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Switch>
              {Object.entries(routes).map(([_, route]) =>
                generateRoutes(route, route.path)
              )}
              <Route
                render={() => (
                  <div>
                    <p>not found</p>
                  </div>
                )}
              />
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
