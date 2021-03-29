import styles from "./Task2.module.scss";

const Task2 = ({ onSubmit }) => {
  const submitForm = (e) => {
    e.preventDefault();

    console.log(e);
    // gi beskjed
    // gå til neste side
    onSubmit();
  };
  return (
    <form onSubmit={submitForm}>
      <h1 className={styles.title}>Send inn dette skjemaet for å gå videre</h1>
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
            <span>Hvilken by du i?</span>
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

        <fieldset role="radiogroup">
          <legend>Bekreft vilkårene for å gå videre</legend>
          <label>
            <span>Ja</span>
            <input type="radio" required name="terms" value="yes" />
          </label>
          <label>
            <span>Nei</span>
            <input type="radio" required name="terms" value="no" />
          </label>
        </fieldset>
        <button>Gå videre</button>
      </div>
    </form>
  );
};

export default Task2;
