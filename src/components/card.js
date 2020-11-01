import React from "react";
import faker from "faker";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/${props.data.id}/item`} className="card">
      <div className="image">
        <img src={faker.image.food()} alt="" />
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
      </div>
    </Link>
  );
}

export default Card;

Card.propTypes = {
  isCategoryCard: PropTypes.bool,
  data: PropTypes.object.isRequired
};
