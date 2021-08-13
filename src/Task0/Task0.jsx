import { useState } from "react";
import Slide from "../Slide/Slide";
import styles from "./Task0.module.scss";

export const onKeyDown = (callback) => (event) => {
  return (event) => {
    // SPACE OR ENTER
    if (event.keyCode === 13 || event.keyCode === 32) {
      if (callback) callback(event);
    }
  };
};

const Task0 = ({ onSubmit }) => {
  const [error, setError] = useState(false);

  const onError = () => setError(true);

  return (
    <Slide>
      <div className={styles.main}>
        <p className={styles.introText}>
          En venn ringte deg og foralte deg at nå kan alle få vaksine. Du lurer
          på om dette er sant så du går inn på FHI sine sider for å finne ut
          mer. Du er svaksynt og trenger en skjermleser for å finne ut hvilken
          artikkel du må trykke på for å få informasjon om vaksinering.
        </p>
        {error && (
          <div className={styles.error} aria-live="polite">
            Nei, dette var feil artikkel. Prøv igjen.
          </div>
        )}
        <article className="blurredContent-1">
          <h1>FHI</h1>
          <h2>AKTUELT</h2>
          <div className={styles.container}>
            <a
              href="#0"
              className={styles.item}
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              <img
                alt="Koronavaksinasjons-programmet"
                src="https://www.fhi.no/globalassets/bilder/alle-tematopper/film1_beskyttelse-2.png?preset=onethirdwidth"
              />
              <h3>Koronavaksinasjons-programmet</h3>
            </a>
            <a
              href="#0"
              className={styles.item}
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              <img
                alt="Koronavirus"
                src="https://www.fhi.no/contentassets/5aa334ec568e4b069a701b7e7a4b7686/koronavirus-tema21.png?preset=onethirdwidth"
              />
              <h3>Koronavirus</h3>
            </a>
            <a
              href="#0"
              className={styles.item}
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              <img
                alt="Smittestopp"
                src="https://www.fhi.no/globalassets/bilder/smittestopp/smittestopp-logo-temaside.png?preset=onethirdwidth"
              />
              <h3>Smittestopp</h3>
            </a>
          </div>
          <h2>TJENESTER OG RESSURSER</h2>
          <div className={styles.container2}>
            <a
              className={styles.item2}
              href="#0"
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              Beredskaps- og vakttelefoner
            </a>
            <a
              className={styles.item2}
              href="#0"
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              Melding og varsling om smittsom sykdom
            </a>
            <a
              className={styles.item2}
              href="#0"
              onClick={onError}
              onKeyDown={onKeyDown(onError)}
            >
              Laboratorieanalyser
            </a>
            <a
              className={styles.item2}
              href="#0"
              onClick={onSubmit}
              onKeyDown={onKeyDown(onSubmit)}
            >
              Informasjon om vaksinering
            </a>
          </div>
        </article>
      </div>
    </Slide>
  );
};

export default Task0;
