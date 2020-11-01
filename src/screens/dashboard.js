import React from "react";
import CardGroup from "../components/card-groups";
import Carousel from "../components/modules/carousel";

const categories = new Array(5).fill({ name: "category" });

function Dashboard() {
  return (
    <div className="ui segments" style={{ marginTop: 41 }}>
      <div className="ui segment" style={{ height: "45vh" }}>
        <Carousel />
      </div>
      <div className="ui segment">
        <div className="ui stackable centered grid margin-no">
          <div className="row">
            <div className="fourteen wide center aligned column">
              <h2>Grocery</h2>
              <CardGroup cards={categories} />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <h2>Fruits</h2>
              <CardGroup cards={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
