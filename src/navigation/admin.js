import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import StockHome from "../screens/admin/stock";
import Category from "../screens/admin/stock/category";
import Item from "../screens/admin/stock/item";

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
    path: "admin/stock/item",
    component: Item
  }
];

const AdminRoutes = () => {
  return (
    <Fragment>
      {adminRouteConfig.map((route) => (
        <Switch key={route.path}>
          <Route path={route.path} component={route.component} />
        </Switch>
      ))}
    </Fragment>
  );
};

export default AdminRoutes;
