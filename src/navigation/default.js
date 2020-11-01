import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AppContainer from "../components/app-container";
import CategoryScreen from "../screens/category";
import Dashboard from "../screens/dashboard";
import ItemScreen from "../screens/item";
import ShopScreen from "../screens/shop";

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
    component: CategoryScreen
  },
  {
    path: "/:category_id/item",
    component: ItemScreen
  },
  {
    path: "/shop",
    component: ShopScreen
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
