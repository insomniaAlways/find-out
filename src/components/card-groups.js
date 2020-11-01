import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function CardGroup(props) {
  return (
    <div className="ui link five centered doubling cards">
      {props.cards &&
        props.cards.length &&
        props.cards.map((c, i) => (
          <Card key={i} isCategoryCard={props.isCategoryCard} data={{ ...c, id: i }} />
        ))}
    </div>
  );
}

export default CardGroup;

CardGroup.propTypes = {
  isCategoryCard: PropTypes.bool,
  cards: PropTypes.array
};
