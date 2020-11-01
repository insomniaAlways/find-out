import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
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

function Dashboard() {
  return (
    <div className="ui segments" style={{ marginTop: 41 }}>
      <div className="ui segment" style={{ height: "45vh" }}>
        <Slider />
      </div>
      <div className="ui segment">
        <div className="ui stackable centered grid margin-no">
          <div className="row">
            <div className="fourteen wide center aligned column">
              <h2>Grocery</h2>
              <CardGroup />
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide center aligned column">
              <h2>Fruits</h2>
              <CardGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
