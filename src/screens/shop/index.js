import React from "react";
import ShopList from "../../components/helpers/shop-helpers/shop-list";

function ShopScreen() {
  return (
    <div>
      <div className="ui segment">
        <div className="text-size-large text-weight-medium">Shops</div>
      </div>
      <div className="ui segment">
        <ShopList />
      </div>
    </div>
  );
}

export default ShopScreen;
