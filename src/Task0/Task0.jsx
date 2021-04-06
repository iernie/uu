import Slide from "../Slide/Slide";
import styles from "./Task0.module.scss";

const Task0 = ({ onSubmit, enabled }) => {
  return (
    <Slide enabled={enabled}>
      <main className={styles.main}>
        <article>
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
              <h3 aria-label="Det hemmelig ordet er: vaksinere">
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

        <input
          className={styles.input}
          placeholder="Hva er det du vil gjøre?"
          onChange={(e) => {
            if (e.target.value === "vaksinere") onSubmit();
          }}
        />
      </main>
    </Slide>
  );
};

export default Task0;
