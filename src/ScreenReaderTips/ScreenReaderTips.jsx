import styles from "./ScreenReaderTips.module.scss";

const ScreenReaderTips = () => {
  return (
    <section aria-hidden className={styles.screenReaderTips}>
      Noen enkle skjermlesertips
      <h2>VoiceOver</h2>
      <p>
        <code>VO</code> under tilsvarer «VoiceOver modifier», og er som standard{" "}
        <code>CTRL + Option</code> eller <code>CAPS LOCK</code>
      </p>
      <ul className={styles.list}>
        <li>
          Hold inne <code>CMD</code> og trippelklikk på fingeravtrykkleseren for
          å aktivere/deaktivere VoiceOver
        </li>
        <li>
          Åpne Rotor: <code>VO + u</code>. Man kan bla gjennom forskjellige
          lister med piltastene
        </li>
        <li>
          Bla til forrige/neste element på siden:{" "}
          <code>VO + pil venstre / VO + pil høyre</code>
        </li>
      </ul>
    </section>
  );
};

export default ScreenReaderTips;
