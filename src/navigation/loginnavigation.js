import React, { Fragment, createRef } from "react";
import { Switch, Route } from "react-router-dom";
import login from "../screens/loginscreen";

import TopNav from "../components/loginscreen/nav";

export const defaultRouteConfig = [
  {
    path: "/login",
    component: login
  }
];

const LoginscreenRoutes = () => {
  const ref = createRef();

  return (
    <Fragment>
      <div ref={ref}>
        
        <TopNav contextRef={ref} />
        {defaultRouteConfig.map((route) => (
          <Switch key={route.path}>
            <Route path={route.path} component={route.component} exact={true} />
          </Switch>
        ))}
      </div>
    </Fragment>
  );
};

export default LoginscreenRoutes;
