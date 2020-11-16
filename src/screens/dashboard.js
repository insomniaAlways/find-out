import React, { Fragment } from "react";
import CardGroup from "../components/card-groups";
import Carousel from "../components/modules/carousel";

const categories = new Array(12).fill({ name: "category" });

function Dashboard() {
  return (
    <Fragment>
      <div className="ui segment" style={{ height: "35vh" }}>
        <Carousel />
      </div>
      <div className="ui segment">
        <div className="ui stackable centered grid margin-no">
          <div className="row">
            <div className="fourteen wide center aligned column">
              <div className="text-size-medium text-weight-medium margin-bottom-ten text-left">
                Grocery
              </div>
              <CardGroup cards={categories} className="category-cards" size={"ten"} />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <div className="text-size-medium text-weight-medium margin-bottom-ten text-left">
                Fruits
              </div>
              <CardGroup cards={categories} className="category-cards" size={"ten"} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
