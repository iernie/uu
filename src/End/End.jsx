import React from "react";
import Slide from "../Slide/Slide";

const EndSlide = ({ enabled }) => {
  return (
    <Slide
      enabled={enabled}
      title="Gratulerer, du er nå ferdig"
      className="blurredContent-5"
    >
      <p>Og straks vaksinert(ish)</p>
    </Slide>
  );
};

export default EndSlide;
