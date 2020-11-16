import React from "react";
import Card from "./card";
import PropTypes from "prop-types";
import clsx from "clsx";

function CardGroup(props) {
  return (
    <div className={clsx("ui link", props.size, "centered doubling cards", props.className)}>
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
  cards: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string
};
