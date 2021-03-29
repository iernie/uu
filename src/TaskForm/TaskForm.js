import ScreenReaderTips from "../ScreenReaderTips/ScreenReaderTips";
import styles from "./TaskForm.module.scss";

const TaskCheckbox = ({ onSubmit }) => {
  const submitForm = (e) => {
    e.preventDefault();

    console.log(e);
    // gå til neste side
    onSubmit();
  };
  return (
    <>
      <ScreenReaderTips />
      <form className={styles.container} onSubmit={submitForm}>
        <h1 className={styles.title}>
          Send inn dette skjemaet for å gå videre
        </h1>

        <fieldset className={styles.formGrouping}>
          <legend></legend>
          <label className={styles.inputLabel}>
            <span>Hva heter du?</span>
            <input required name="first" aria-describedby="nameDescription" />
            <div id="nameDescription" className={styles.visuallyHidden}>
              Fyll inn fornavnet ditt
            </div>
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
        </fieldset>

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
      </form>
    </>
  );
};

export default TaskCheckbox;
