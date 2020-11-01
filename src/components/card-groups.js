import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function CardGroup(props) {
  return (
    <div className="ui link five centered doubling cards">
      <Card isCategoryCard={props.isCategoryCard} />
      <Card isCategoryCard={props.isCategoryCard} />
      <Card isCategoryCard={props.isCategoryCard} />
      <Card isCategoryCard={props.isCategoryCard} />
    </div>
  );
}

export default CardGroup;

CardGroup.propTypes = {
  isCategoryCard: PropTypes.bool
};
