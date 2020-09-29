import React from "react";

function ItemAction() {
  return (
    <div className="ui three column centered grid margin-no padding-vs-top">
      <div className="column text-center padding-vs-vertical text-color-green cursor-pointer">
        Edit
      </div>
      <div className="column text-center padding-vs-vertical text-color-red cursor-pointer">
        Delete
      </div>
    </div>
  );
}

export default ItemAction;
