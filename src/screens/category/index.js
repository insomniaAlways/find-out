import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";
import CardGroup from "../../components/card-groups";
import Carousel from "../../components/modules/carousel";

const categories = new Array(5).fill({ name: "category" });

function CategoryScreen() {
  return (
    <Fragment>
      <div className="ui segment" style={{ height: "45vh" }}>
        <Carousel />
      </div>
      <div className="ui segment">
        <div className="ui stackable centered grid margin-no">
          <div className="row">
            <div className="fourteen wide column text-center">
              <h2>All Categories</h2>
            </div>
          </div>
          <div className="row">
            <div className="three wide column">
              <Input placeholder="Search..." className="width-full" icon="search" />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <CardGroup isCategoryCard={true} cards={categories} />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide column text-center">
              <h2>Recently Checked</h2>
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <CardGroup isCategoryCard={true} cards={categories} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryScreen;
