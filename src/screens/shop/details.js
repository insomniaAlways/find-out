import React from "react";
import faker from "faker";
import ItemCard from "../../components/item-card";
import CardGroup from "../../components/card-groups";

const items = new Array(15).fill({ name: "item" });
const categories = new Array(5).fill({ name: "category" });

function ShopeDetails() {
  return (
    <div className="ui segments box-shadow-none border-none">
      <div className="ui segmnet box-shadow-none border-none text-center">
        <img
          src={faker.image.abstract()}
          alt=""
          style={{ width: "80%", height: "calc(100vh -  650px)", borderRadius: 70 }}
        />
      </div>
      <div className="ui segmnet">
        <div></div>
        <p>The categories</p>
        <div className="text-size-large text-weight-medium">Browser by category</div>
        <div className="ui centered grid margin-no">
          <div className="eleven wide column">
            <CardGroup isCategoryCard={true} cards={categories} />
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div className="text-size-large text-weight-medium">Explore Product</div>
        <div className="ui segment">
          <div className="ui link five centered doubling cards">
            {items.map((c, i) => (
              <ItemCard key={i} data={{ ...c, id: i }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopeDetails;
