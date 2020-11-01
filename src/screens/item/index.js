import React from "react";
import CardGroup from "../../components/card-groups";
// import PropTypes from "prop-types";

function ItemScreen() {
  return (
    <div className="ui segments">
      <div className="ui segment">
        <h3>Electronics</h3>
      </div>
      <div className="ui segment">
        <CardGroup />
      </div>
    </div>
  );
}

export default ItemScreen;

ItemScreen.propTypes = {};
