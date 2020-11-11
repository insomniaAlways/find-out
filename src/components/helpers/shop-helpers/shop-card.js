import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { useHistory } from "react-router-dom";

function ShopCard(props) {
  const history = useHistory();

  const onClick = () => {
    history.push({
      pathname: `/shop/${props.data.id}`
    });
  };
  return (
    <div className="item" onClick={onClick}>
      <div className="ui segment">
        <div className="ui grid margin-no">
          <div className="row">
            <div className="twelve wide column">
              <div className="text-weight-medium text-size-sixteen">Shop {props.data.id}</div>
              <div className="">grocery shop</div>
            </div>
            <div className="four wide middle aligned column text-center">
              <img src={faker.image.abstract()} alt="" style={{ width: 60 }} />
            </div>
          </div>
          <div className="row">
            <div className="twelve wide column">
              <div>Open: 09:00 AM - 8:00 PM</div>
              <div>HSR Layout, Bangalore, 560068</div>
            </div>
            <div className="four wide middle aligned column text-center">30m</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;

ShopCard.propTypes = {
  data: PropTypes.object.isRequired
};
