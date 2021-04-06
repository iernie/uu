import React from "react";
import Slide from "../Slide/Slide";

const EndSlide = ({ enabled }) => {
  return (
    <Slide enabled={enabled}>
      <div className="blurredContent-5">
        <h1>Gratulerer, du er nå ferdig</h1>
        <p>Og straks vaksinert(ish)</p>
      </div>
    </Slide>
  );
};

export default EndSlide;
