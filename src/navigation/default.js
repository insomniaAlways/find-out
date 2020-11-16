import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AppContainer from "../components/app-container";
import CategoryScreen from "../screens/category";
import Dashboard from "../screens/dashboard";
import ItemScreen from "../screens/item";
import ItemDetails from "../screens/item/details";
import ShopScreen from "../screens/shop";
import ShopeDetails from "../screens/shop/details";

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
    path: "/:category_id/item/:item_id/details",
    component: ItemDetails
  },
  {
    path: "/shop",
    component: ShopScreen
  },
  {
    path: "/shop/:shop_id",
    component: ShopeDetails
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
