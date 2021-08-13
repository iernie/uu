import { useState } from "react";
import Slide from "../Slide/Slide";
import styles from "./Task2.module.scss";

const Task2 = ({ onSubmit }) => {
  const [showResults, setShowResults] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const advance = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Slide title="Du har funnet frem til riktig vaksinekontoret. Fyll inn dette skjemaet for å bestille vaksine.">
      <form onSubmit={submitForm} autoComplete={"off"}>
        <div className={styles.container}>
          <div className={styles.formGrouping}>
            <label className={styles.inputLabel}>
              <span>Hva heter du?</span>
              <input
                required
                name="first"
                aria-describedby="nameDescription"
                aria-errormessage="Fyll inn fornavnet ditt"
              />
              <div id="nameDescription" className={styles.visuallyHidden}>
                Fyll inn fornavnet ditt
              </div>
            </label>

            <label className={styles.inputLabel}>
              <span>Hvilken by bor du i?</span>
              <input name="city" />
            </label>

            <label className={styles.inputLabel}>
              <span>Hvor gammel er du?</span>
              <input
                type="number"
                required
                name="birthyear"
                min="0"
                max="150"
                aria-describedby="ageDescription"
              />
            </label>
          </div>

          <fieldset role="radiogroup" className={styles.agreeToTerms}>
            <legend>Godta vilkårene for å gå videre</legend>
            <label>
              <span>Ja, jeg godtar</span>
              <input type="radio" required name="terms" value="yes" />
            </label>
            <label>
              <span>Nei</span>
              <input type="radio" required name="terms" value="no" />
            </label>
          </fieldset>

          <div className={styles.buttons}>
            <button type="reset" className={styles.resetButton}>
              Avbryt
            </button>
            <button>Bestill vaksine</button>
          </div>
        </div>
      </form>

      <form
        className={[styles.container, styles.successContainer].join(" ")}
        onSubmit={advance}
        aria-live="assertive"
        aria-hidden={!showResults}
        hidden={!showResults}
      >
        <p>Gratulerer! Du kan nå gå videre for velge en ledig time.</p>
        <button>Gå videre</button>
      </form>
    </Slide>
  );
};

export default Task2;
