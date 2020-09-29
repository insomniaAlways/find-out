import React from "react";
import ItemAction from "./item-action";
import PropertyRow from "./property-row";

function ItemCard() {
  return (
    <div className="ui segment">
      <p className="text-center text-size-large text-weight-medium margin-no">Item Name</p>
      <div className="ui grid margin-no">
        <PropertyRow
          propery={
            <>
              <span>Price</span>
              <span className="text-size-small">(per 500gm) :</span>
            </>
          }
          value={"50"}
        />
        <PropertyRow
          propery={
            <>
              <span>MRP</span>
              <span className="text-size-small">(per 500gm) :</span>
            </>
          }
          value={"53"}
        />
        <PropertyRow
          propery={
            <>
              <span>Sale as :</span>
            </>
          }
          value={"open"}
        />
        <PropertyRow
          propery={
            <>
              <span>Currently Available</span>
              <span className="text-size-small">(in kg) :</span>
            </>
          }
          value={"50"}
        />
      </div>
      <ItemAction />
    </div>
  );
}

export default ItemCard;
