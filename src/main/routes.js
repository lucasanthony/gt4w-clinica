import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

import { isAuthenticated } from '../auth/index';

isAuthenticated();
const auth = localStorage.getItem("isAuthenticated");

const routes = () =>
  true ? ( // mock
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/home" component={Home} />
      <Redirect from="*" to="/home" />;
    </Switch>
  ) : (
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Redirect from="*" to="/" />;
    </Switch>
  );

export default routes;
