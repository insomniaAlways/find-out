import React from "react";
import PropTypes from "prop-types";
import faker from "faker";

function ShopCard(props) {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={faker.image.business()} alt="" />
      </div>
      <div className="content">
        <div className="header">Shop {props.data.id}</div>
        <div className="meta">
          <span className="price">Meta data</span>
          <span className="stay">Meta data</span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;

ShopCard.propTypes = {
  data: PropTypes.object.isRequired
};
