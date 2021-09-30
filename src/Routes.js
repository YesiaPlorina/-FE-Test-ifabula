import { Redirect, Route, Router, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NextFunction from "./pages/NextFunction";
import PaginationPage from "./pages/Pagination";
import React from "react";
import { history } from "./helpers";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/next" component={NextFunction} />
        <Route path="/page" component={PaginationPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
