import React from "react";
import SwiperCore, { Navigation, A11y } from "swiper";
import { CodeBlock, a11yDark } from "react-code-blocks";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/a11y/a11y.scss";
import { FocusOn } from "react-focus-on";

SwiperCore.use([Navigation, A11y]);

const Slide = ({ children, code, enabled = false }) => {
  return (
    <FocusOn enabled={enabled} className="slide">
      <div className="slide-content">{children}</div>
      {code && (
        <div className="slide-code">
          <CodeBlock text={code} language="markup" theme={a11yDark} />
        </div>
      )}
    </FocusOn>
  );
};

const code0 = `<input />

<label>
  Enter e-mail
  <input placeholder="email" />
</label>
`;

const code1 = `<button>X</button>

<button aria-label="Cancel">X</button>
`;

const App = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Swiper
      className="slider"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      onSlideChange={(e) => setActiveIndex(e.activeIndex)}
    >
      <SwiperSlide>
        <Slide enabled={activeIndex === 0} code={code0}>
          <input />
          <br />
          <br />
          <label>
            Enter e-mail
            <br />
            <input placeholder="email" />
          </label>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide enabled={activeIndex === 1} code={code1}>
          <button>X</button>
          <br />
          <br />
          <button aria-label="Cancel">X</button>
        </Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
