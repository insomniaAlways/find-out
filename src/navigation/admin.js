import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import StockHome from "../screens/admin/stock";
import Category from "../screens/admin/stock/category";
import Item from "../screens/admin/stock/item";
import AppContainer from "../components/app-container";
import AdminDashboard from "../screens/admin";

export const adminRouteConfig = [
  {
    path: "/admin/stocks",
    component: StockHome
  },
  {
    path: "/admin/stock/category",
    component: Category
  },
  {
    path: "/admin/stock/item",
    component: Item
  },
  {
    path: "/admin/dashboard",
    component: AdminDashboard
  }
];

const AdminRoutes = () => {
  return (
    <AppContainer>
      <Fragment>
        {adminRouteConfig.map((route) => (
          <Switch key={route.path}>
            <Route path={route.path} component={route.component} />
          </Switch>
        ))}
      </Fragment>
    </AppContainer>
  );
};

export default AdminRoutes;
