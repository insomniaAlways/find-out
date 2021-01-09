import React from "react";
import ShopCard from "./shop-card";

const shops = new Array(5).fill({ name: "shop" });

function ShopList() {
  return (
    <div className="ui unstackable items">
      {shops.map((s, i) => (
        <ShopCard key={i} data={{ ...s, id: i }} />
      ))}
    </div>
  );
}

export default ShopList;
