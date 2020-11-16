import React from "react";
import faker from "faker";
import AddToCart from "../../components/add-to-cart";

function ItemDetails(props) {
  return (
    <div
      className="ui segment padding-no border-radius-none border-none box-shadow-none"
      style={{ height: "calc(100vh - 40px)" }}
    >
      <div className="ui segments padding-no margin-no">
        <div className="ui segment padding-no" style={{ width: "100%", height: "100%" }}>
          <img src={faker.image.food()} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="ui segment padding-vs-vertical">
          <div className="text-size-medium text-weight-medium">Item Name</div>
          <div className="text-size-small">Item description</div>
        </div>
        <div className="ui segment padding-vs-vertical">
          <div className="text-weight-medium">Seller</div>
          <div style={{ width: "50%" }}>Location</div>
          <div style={{ width: "50%" }}>Delivery Time</div>
          <div>Seller details</div>
        </div>
        <div className="ui segment padding-vs-vertical">
          <div className="text-weight-medium">Reviews</div>
          <div>Review list</div>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 40, width: "100%", zIndex: 2 }}>
        <AddToCart />
      </div>
    </div>
  );
}

export default ItemDetails;
