import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AppContainer from "../components/app-container";
import Category from "../screens/category";
import Dashboard from "../screens/dashboard";

export const defaultRouteConfig = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/category",
    component: Category
  }
];

const DefaultRoutes = () => {
  return (
    <AppContainer>
      <Fragment>
        {defaultRouteConfig.map((route) => (
          <Switch key={route.path}>
            <Route path={route.path} component={route.component} exact={true} />
          </Switch>
        ))}
      </Fragment>
    </AppContainer>
  );
};

export default DefaultRoutes;
