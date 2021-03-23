import React from "react";
import SwiperCore, { A11y } from "swiper";
import { CodeBlock, a11yDark } from "react-code-blocks";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import { FocusOn } from "react-focus-on";

SwiperCore.use([A11y]);

const Slide = ({ children, code, enabled = false }) => {
  const [isEnabled, setEnabled] = React.useState(enabled);
  React.useEffect(() => {
    setTimeout(() => {
      setEnabled(enabled);
    }, 250);
  }, [enabled]);
  return (
    <FocusOn enabled={isEnabled} className="slide">
      <div className="slide-content">{children}</div>
      {code && (
        <div className="slide-code" aria-hidden="true">
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

const code2 = `<div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
  Lorem ipsum
</div>
<p>Dolor sit amet</p>

<article>
  <header>
    <h1>Lorem ipsum</h1>
  </header>
  <main>
    <section>
      <h2>Section title</h2>
    </section>
    <section title="Section 2 title">2</section>
    <section aria-label="Section 3 title">3</section>
    <p>Dolor sit amet</p>
  </main>
</article>
`;

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
        <Slide enabled={activeIndex === 0} code={code0}>
          <input />
          <br />
          <br />
          <label>
            Enter e-mail
            <br />
            <input placeholder="email" onChange={() => slideTo(1)} />
          </label>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide enabled={activeIndex === 1} code={code1}>
          <button>X</button>
          <br />
          <br />
          <button aria-label="Cancel" onClick={() => slideTo(2)}>
            X
          </button>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide enabled={activeIndex === 2} code={code2}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Lorem ipsum
          </div>
          <p>Dolor sit amet</p>
          <article>
            <header>
              <h1>Lorem ipsum</h1>
            </header>
            <main>
              <section>
                <h2>Section title</h2>
              </section>
              <section title="Section 2 title">2</section>
              <section aria-label="Section 3 title">3</section>
              <p>Dolor sit amet</p>
            </main>
          </article>
        </Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
