import { useState } from "react";
import Slide from "../Slide/Slide";
import hytte from "./hytte.jpg";
import huset_til_bestemor from "./huset_til_bestemor.jpg";
import vaksinekontor from "./vaksinekontor.jpg";
import styles from "./Task1.module.scss";

const Task1 = ({ onSubmit }) => {
  const [inputVerdi, settInputVerdi] = useState("");
  const [feilmelding, settFeilmelding] = useState(false);

  return (
    <Slide title="Hvor vil du?">
      <p>
        Du har funnet frem til riktig artikkel på FHI sine sider. Nå skal du
        finne frem til informasjon om hvor du kan vaksinere deg.
      </p>
      <br />
      <form
        className="blurredContent-2"
        autoComplete={"off"}
        onSubmit={(event) => {
          event.preventDefault();
          if (inputVerdi.toLowerCase() === "vaksinekontoret") {
            onSubmit();
          } else {
            settFeilmelding(true);
          }
        }}
      >
        <div className={styles.container}>
          <img className={styles.item} src={hytte} alt={"På hytta"} />
          <img
            className={styles.item}
            src={huset_til_bestemor}
            alt={"Huset til bestemor"}
          />
          <img
            className={styles.item}
            src={vaksinekontor}
            alt={"Vaksinekontoret. Dette er riktig svar."}
          />
        </div>

        <div style={{ gridArea: "input", textAlign: "center" }}>
          <label htmlFor={"løsning"}>
            I hvilken bygning kan du vaksineres?
          </label>
          {feilmelding && (
            <div className={styles.error} aria-live="polite">
              Dessverre, dette var ikke riktig bygning
            </div>
          )}
          <input
            className={styles.input}
            id={"løsning"}
            style={{ border: feilmelding ? "1px solid red" : "" }}
            onChange={(event) => {
              settFeilmelding(false);
              settInputVerdi(event.target.value);
            }}
          />
        </div>
        <button className={styles.button} type="submit">
          Gå videre
        </button>
      </form>
    </Slide>
  );
};

export default Task1;
