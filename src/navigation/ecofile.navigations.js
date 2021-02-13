import React, { Fragment, createRef } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/ecolife";
import TopBar from "../components/ecolife/top-bar";
import NavBar from "../components/ecolife/nav-bar";

export const defaultRouteConfig = [
  {
    path: "/home",
    component: Home
  }
];

const EcoLifeDefaultRoutes = () => {
  const ref = createRef();

  return (
    <Fragment>
      <div ref={ref}>
        <TopBar />
        <NavBar contextRef={ref} />
        {defaultRouteConfig.map((route) => (
          <Switch key={route.path}>
            <Route path={route.path} component={route.component} exact={true} />
          </Switch>
        ))}
      </div>
    </Fragment>
  );
};

export default EcoLifeDefaultRoutes;
