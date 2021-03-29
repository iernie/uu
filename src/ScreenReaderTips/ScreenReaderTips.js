import styles from "./ScreenReaderTips.module.scss";

const ScreenReaderTips = () => {
  return (
    <section aria-hidden>
      Noen enkle skjermlesertips
      <h2>VoiceOver</h2>
      <ul>
        <li>
          Trippelklikk på fingeravtrykkleseren for å aktivere/deaktivere
          VoiceOver
        </li>
        <li>
          Åpne Rotor: <code>VO+u</code>. Man kan bla gjennom forskjellige lister
          med piltastene
        </li>
        <li>
          Åpne Rotor: <code>VO+u</code>
        </li>
      </ul>
    </section>
  );
};

export default ScreenReaderTips;
