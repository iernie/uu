import React from "react";
import Slide from "../Slide/Slide";
import styles from "./Task0.module.scss";

const Task0 = ({ onSubmit, enabled }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  return (
    <Slide enabled={enabled}>
      <div className={styles.main}>
        <p>
          En venn ringte deg og foralte deg at nå kan alle få vaksine. Du lurer
          på om dette er sant så du går inn på FHI sine sider for å finne mer
          informasjon. Du er svaksynt og trenger en skjermleser for å finne ut
          hva du vil gjøre.
        </p>
        <article className="blurredContent-1">
          <h1>FHI</h1>
          <h2>AKTUELT</h2>
          <div className={styles.container}>
            <a href="/#0" className={styles.item}>
              <img
                alt="Koronavirus"
                src="https://www.fhi.no/contentassets/5aa334ec568e4b069a701b7e7a4b7686/koronavirus-tema21.png?preset=onethirdwidth"
              />
              <h3>Koronavirus</h3>
            </a>
            <a href="/#0" className={styles.item}>
              <img
                alt="Koronavaksinasjons-programmet"
                src="https://www.fhi.no/globalassets/bilder/alle-tematopper/film1_beskyttelse-2.png?preset=onethirdwidth"
              />
              <h3 aria-label="Jeg vil vaksinere">
                Koronavaksinasjons-programmet
              </h3>
            </a>
            <a href="/#0" className={styles.item}>
              <img
                alt="Smittestopp"
                src="https://www.fhi.no/globalassets/bilder/smittestopp/smittestopp-logo-temaside.png?preset=onethirdwidth"
              />
              <h3>Smittestopp</h3>
            </a>
          </div>
          <h2>TJENESTER OG RESSURSER</h2>
          <div className={styles.container2}>
            <a className={styles.item2} href="/#0">
              Beredskaps- og vakttelefoner
            </a>
            <a className={styles.item2} href="/#0">
              Melding og varsling om smittsom sykdom
            </a>
            <a className={styles.item2} href="/#0">
              Laboratorieanalyser
            </a>
            <a className={styles.item2} href="/#0">
              Statistikkbankene i FHI
            </a>
          </div>
        </article>
        {error && (
          <div className={styles.error} aria-live="polite">
            Nei, det er ikke det du vil. Prøv igjen.
          </div>
        )}
        <div>
          <input
            value={value}
            className={styles.input}
            style={{ border: error ? "1px solid red" : "" }}
            placeholder="Hva er det du vil gjøre?"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              setError(false);
              if (value.toLowerCase() === "vaksinere") {
                onSubmit();
              } else {
                setError(true);
              }
            }}
          >
            Gå videre
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default Task0;
