import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { useHistory, Link } from "react-router-dom";

function ShopCard(props) {
  const history = useHistory();

  const onClick = () => {
    history.push({
      pathname: `/shop/${props.data.id}`
    });
  };
  return (
    <Link to={`/shop/${props.data.id}`} className="item">
      <div className="image">
        <img src={faker.image.fashion() + "?random=" + Date.now()} alt="" />
      </div>
      <div className="content">
        <div className="header">Shop {props.data.id}</div>
        <div className="meta">
          <span>grocery shop</span>
        </div>
        <div className="description">
          <p></p>
        </div>
        <div className="extra">
          <p className="margin-bottom-five">Open: 09:00 AM - 8:00 PM</p>
          <p className="margin-bottom-five">HSR Layout, Bangalore, 560068</p>
          <p className="margin-bottom-five">30m</p>
        </div>
      </div>
    </Link>
  );
}

export default ShopCard;

ShopCard.propTypes = {
  data: PropTypes.object.isRequired
};
