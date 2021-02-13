import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import Carousel from "../../components/ecolife/carousel";
import ItemCard from "../../components/ecolife/item-card";
import PromoContent from "../../components/ecolife/promo-content";

const categories = new Array(12).fill({ name: "category" });

function Home() {
  return (
    <Fragment>
      <div className="ui segment margin-top-no" style={{ height: "65vh" }}>
        <Carousel />
      </div>
      <div className="ui container">
        <PromoContent />
        <div className="ui segments border-none box-shadow-none">
          <div className="ui segment">
            <div className="text-size-large text-weight-medium">New Arrivals</div>
            <div className="text-color-grey margin-top-ten">
              It has roots in a piece of classical
            </div>
          </div>
          <div className="ui segment">
            <Card.Group itemsPerRow={4}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </Card.Group>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
