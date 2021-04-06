import { useState } from "react";
import Slide from "../Slide/Slide";
import hytte from "./hytte.jpg";
import huset_til_bestemor from "./huset_til_bestemor.jpg";
import vaksinekontor from "./vaksinekontor.jpg";

const Task1 = ({ enabled, onSubmit }) => {
  const [inputVerdi, settInputVerdi] = useState("");
  const [feilmelding, settFeilmelding] = useState(false);

  return (
    <Slide enabled={enabled}>

        <p>Du har funnet frem til riktig artikkel på FHI sine sider. Nå skal du finne frem til informasjon om hvor du kan vaksinere deg.</p>
        <br/>

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
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridColumnGap: "2rem",
          gridRowGap: "1rem",
          gridTemplateAreas: `
                    'hus1 hus2 hus3'
                    '. input .'
                    '. knapp .'
                `,
        }}
      >
        <img
          style={{ gridArea: "hus1" }}
          src={hytte}
          width={"100%"}
          alt={"På hytta"}
        />
        <img
          style={{ gridArea: "hus2" }}
          src={huset_til_bestemor}
          width={"100%"}
          alt={"Huset til bestemor"}
        />
        <img
          style={{ gridArea: "hus3" }}
          src={vaksinekontor}
          width={"100%"}
          alt={"Vaksinekontoret. Dette er riktig svar."}
        />
        <div style={{ gridArea: "input", textAlign: "center" }}>
          <label htmlFor={"løsning"}>
            I hvilken bygning kan du vaksineres?
          </label>
          <input
            id={"løsning"}
            style={{ border: feilmelding ? "1px solid red" : "" }}
            onChange={(event) => {
              settFeilmelding(false);
              settInputVerdi(event.target.value);
            }}
          />
          {feilmelding && (
            <p style={{ color: "red" }}>
              Dessverre, dette var ikke riktig bygning
            </p>
          )}
        </div>
        <button style={{ gridArea: "knapp" }} type="submit">
          Gå videre
        </button>
      </form>
    </Slide>
  );
};

export default Task1;
