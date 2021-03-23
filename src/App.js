import React from "react";
import SwiperCore, { Navigation, A11y } from "swiper";
import { CodeBlock, a11yDark } from "react-code-blocks";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import { FocusOn } from "react-focus-on";

SwiperCore.use([Navigation, A11y]);

const Slide = ({ children, code, enabled = false }) => {
  return (
    <FocusOn enabled={enabled} className="slide">
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
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const slide = (e) => {
      if (e.keyCode === 37) {
        if (swiper) swiper.slidePrev();
      }
      if (e.keyCode === 39) {
        if (swiper) swiper.slideNext();
      }
    };
    document.addEventListener("keydown", slide);
    return () => {
      document.removeEventListener("keydown", slide);
    };
  }, [swiper]);

  return (
    <Swiper
      className="slider"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      onSlideChange={(e) => setActiveIndex(e.activeIndex)}
      onSwiper={setSwiper}
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
