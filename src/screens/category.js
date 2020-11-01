import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Input } from "semantic-ui-react";
import CardGroup from "../components/card-groups";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider play={true} cancelOnInteraction={true} interval={6000} fillParent={true}>
    <div style={{ color: "white", background: "#b4b4ff" }}>
      <h1>1</h1>
    </div>
    <div style={{ color: "black", background: "#ddf7dd" }}>
      <h1>2</h1>
    </div>
    <div style={{ color: "black", background: "#ffffcc" }}>
      <h1>3</h1>
    </div>
  </AutoplaySlider>
);
function Category() {
  return (
    <div className="ui segments" style={{ marginTop: 41 }}>
      <div className="ui segment" style={{ height: "45vh" }}>
        <Slider />
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
              <CardGroup isCategoryCard={true} />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide column text-center">
              <h2>Recently Checked</h2>
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <CardGroup isCategoryCard={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
