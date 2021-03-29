import React from "react";
import SwiperCore, { A11y } from "swiper";
import { CodeBlock, a11yDark } from "react-code-blocks";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import { FocusOn } from "react-focus-on";

import ScreenReaderTips from "./ScreenReaderTips/ScreenReaderTips";
import Task0 from "./Task0/Task0";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";

SwiperCore.use([A11y]);

const Slide = ({ children, code, enabled = false }) => {
  const [isEnabled, setEnabled] = React.useState(enabled);
  React.useEffect(() => {
    if (!enabled) {
      setEnabled(false);
    } else {
      setTimeout(() => {
        setEnabled(true);
      }, 250);
    }
  }, [enabled]);
  return (
    <FocusOn
      enabled={isEnabled}
      className="slide"
      autoFocus={false}
      returnFocus={false}
    >
      <div className="slide-content">{children}</div>
      {code && (
        <div className="slide-code" aria-hidden="true">
          <CodeBlock text={code} language="markup" theme={a11yDark} />
        </div>
      )}
    </FocusOn>
  );
};

const App = () => {
  const [swiper, setSwiper] = React.useState(null);
  const initialIndex = React.useMemo(() => {
    const hash = window.location.hash?.substring(1);
    if (Number.isInteger(parseInt(hash, 10))) {
      return parseInt(hash, 10);
    }
    return 0;
  }, []);
  const [activeIndex, setActiveIndex] = React.useState(initialIndex);

  const slideTo = (index) => {
    swiper.slideTo(index, 250);
  };

  React.useEffect(() => {
    window.location.hash = activeIndex;
  }, [activeIndex]);

  return (
    <>
      <ScreenReaderTips />
      <Swiper
        className="slider"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        initialSlide={initialIndex}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        onSwiper={setSwiper}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <Slide enabled={activeIndex === 0}>
            <Task0 onSubmit={() => slideTo(1)} />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide enabled={activeIndex === 1}>
            <Task1 onSubmit={() => slideTo(2)} />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide enabled={activeIndex === 2}>
            <Task2 onSubmit={() => slideTo(3)} />
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide enabled={activeIndex === 3}>
            <Task3 onSubmit={() => slideTo(4)} />
          </Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
