import React from "react";
import WithHeaderBar from "../../../../components/header-bar";
import ItemCard from "../../../../components/item-helpers/item-card";

function Item() {
  return (
    <WithHeaderBar title="Add item">
      <div className="padding-md">
        <ItemCard />
      </div>
    </WithHeaderBar>
  );
}

export default Item;
