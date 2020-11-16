import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { Link } from "react-router-dom";

function ItemCard(props) {
  return (
    <Link to={`item/${props.data.id}/details`} className="item">
      <div className="image">
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className="content">
        <div className="header">Header</div>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p></p>
        </div>
        <div className="extra">Additional Details</div>
      </div>
    </Link>
  );
}

export default ItemCard;

ItemCard.propTypes = {
  data: PropTypes.object.isRequired
};
