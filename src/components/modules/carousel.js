import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => (
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

export default Carousel;
