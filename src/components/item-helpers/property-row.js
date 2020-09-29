import React from "react";
import PropTypes from "prop-types";

function PropertyRow(props) {
  const { propery, value } = props;
  return (
    <div className="row padding-vs-vertical">
      <div className="ten wide middle aligned column">{propery}</div>
      <div className="six wide column text-right">{value}</div>
    </div>
  );
}

export default PropertyRow;

PropertyRow.propTypes = {
  propery: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
