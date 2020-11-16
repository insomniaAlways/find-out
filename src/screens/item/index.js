import React, { Fragment } from "react";
import ItemCard from "../../components/item-card";
// import PropTypes from "prop-types";

const items = new Array(15).fill({ name: "item" });

function ItemScreen(props) {
  return (
    <Fragment>
      <div className="ui segment">
        <h3>Electronics</h3>
      </div>
      <div className="ui segment">
        <div className="ui unstackable items">
          {items.map((c, i) => (
            <ItemCard key={i} data={{ ...c, id: i }} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default ItemScreen;

ItemScreen.propTypes = {};
