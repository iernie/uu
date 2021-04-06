import { useState } from "react";
import styles from "./ScreenReaderTips.module.scss";

const ScreenReaderTips = () => {
  const [showTips, setShowTips] = useState(true);
  return (
    <div aria-hidden="true" className={styles.screenReaderTips}>
      <div hidden={!showTips}>
        <h2>Noen enkle tips for bruk av VoiceOver</h2>
        <p>
          <code>VO</code> under tilsvarer «VoiceOver modifier», og er som
          standard bundet til tastekombinasjonene <code>CTRL + Option</code>{" "}
          eller <code>CAPS LOCK</code>
        </p>
        <ul className={styles.list}>
          <li>
            <code>CMD + F5</code> aktiverer/deaktiverer VoiceOver
          </li>
          <li>
            <code>VO + u</code> – Åpne Rotor. Man kan bla gjennom forskjellige
            lister med piltastene. (Headings, Form controls, Web spots,
            Landmarks, Articles, Window spots)
          </li>
          <li>
            <code>VO + pil venstre / VO + pil høyre</code> – Bla til
            forrige/neste element på siden
          </li>
          <li>
            <code>I tabeller: VO + piltaster</code> – Naviger i rader og
            kolonner. <code>I tabeller: VO + shift + piltast venstre/høyre</code> går ut av
            tabell 
          </li>
          <li>
            <code>VO + a</code> – Start/fortsett opplesning
          </li>
          <li>
            <code>CTRL</code> – Stopp opplesning
          </li>
          <li>
            <code>VO + h</code> – VoiceOver-hjelp
          </li>
          <li>
            <code>VO + b</code> – Les fra toppen av siden til fokusert punkt
          </li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className={styles.toggleTips}
      >
        {showTips ? "Skjul tips" : "Vis VoiceOver tips"}
      </button>
    </div>
  );
};

export default ScreenReaderTips;
