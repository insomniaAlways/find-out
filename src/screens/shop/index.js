import React from "react";
import ShopList from "../../components/helpers/shop-helpers/shop-list";

function ShopScreen() {
  return (
    <div>
      <div className="ui segment">
        <div className="text-size-large text-weight-medium">Shops</div>
      </div>
      <div className="ui centered grid margin-no">
        <div className="ten wide column">
          <ShopList />
        </div>
      </div>
    </div>
  );
}

export default ShopScreen;
