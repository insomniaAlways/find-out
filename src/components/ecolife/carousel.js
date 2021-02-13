import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={true}
    interval={6000}
    fillParent={true}
    bullets={false}
  >
    <div style={{ color: "white", background: "#b4b4ff" }}>
      <img src="/assets/images/sample-1.jpg" alt="" />
    </div>
    <div style={{ color: "black", background: "#ddf7dd" }}>
      <img src="/assets/images/sample-2.jpg" alt="" />
    </div>
  </AutoplaySlider>
);

export default Carousel;
