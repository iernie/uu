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
          standard <code>CTRL + Option</code> eller <code>CAPS LOCK</code>
        </p>
        <ul className={styles.list}>
          <li>
            Hold inne <code>CMD</code> og trippelklikk på fingeravtrykkleseren
            for å aktivere/deaktivere VoiceOver
          </li>
          <li>
            Åpne Rotor: <code>VO + u</code>. Man kan bla gjennom forskjellige
            lister med piltastene. (Headings, Form controls, Web spots,
            Landmarks, Articles, Window spots)
          </li>
          <li>
            Bla til forrige/neste element på siden:{" "}
            <code>VO + pil venstre / VO + pil høyre</code>
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
