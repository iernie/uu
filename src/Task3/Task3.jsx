import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import Slide from "../Slide/Slide";
import "./timeslots.scss";
import "dayjs/locale/nb";

dayjs.locale("nb");

const dateFormat = "DD.MM.YYYY-HH:mm";
const targetTimeslot = dayjs(new Date(2021, 3, 15, 15, 0)).format(dateFormat);

const Task3 = ({ enabled, onSubmit }) => {
  const [valgtTimeslot, setValgtTimeslot] = useState(undefined);
  const nextForm = useRef();

  const velgTimeslot = (timeslot) => {
    setValgtTimeslot(timeslot);
    setTimeout(() => {
      nextForm.current.focus();
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Slide enabled={enabled}>
      <div className="blurredContent">
        <h1>Velg tidspunkt for vaksinasjon</h1>
        <table className="timeslots" aria-labelledby="tableCaption">
          <caption id="tableCaption">
            Tilgjengelige timer i kommende uke
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                aria-label={`Mandag, ${getAntallLedigeTimerPåDag(mandag)}`}
              >
                Mandag
              </th>
              <th
                scope="col"
                aria-label={`Tirsdag, ${getAntallLedigeTimerPåDag(tirsdag)}`}
              >
                Tirsdag
              </th>
              <th
                scope="col"
                aria-label={`Onsdag, ${getAntallLedigeTimerPåDag(onsdag)}`}
              >
                Onsdag
              </th>
              <th
                scope="col"
                aria-label={`Torsdag, ${getAntallLedigeTimerPåDag(torsdag)}`}
              >
                Torsdag
              </th>
              <th
                scope="col"
                aria-label={`Fredag, ${getAntallLedigeTimerPåDag(fredag)}`}
              >
                Fredag
              </th>
            </tr>
          </thead>
          <tbody>
            {tidspunkter.map((timeslot, index) => {
              return (
                <tr key={index}>
                  {renderTimeslot(mandag[index], velgTimeslot, valgtTimeslot)}
                  {renderTimeslot(tirsdag[index], velgTimeslot, valgtTimeslot)}
                  {renderTimeslot(onsdag[index], velgTimeslot, valgtTimeslot)}
                  {renderTimeslot(torsdag[index], velgTimeslot, valgtTimeslot)}
                  {renderTimeslot(fredag[index], velgTimeslot, valgtTimeslot)}
                </tr>
              );
            })}
          </tbody>
        </table>

        <form
          tabIndex={-1}
          ref={nextForm}
          onSubmit={handleSubmit}
          role="alert"
          aria-live="assertive"
          aria-hidden={valgtTimeslot === undefined}
          hidden={valgtTimeslot === undefined}
          className="valgtMelding"
        >
          {valgtTimeslot && (
            <>
              <p>Du har valgt: {valgtTimeslot.valgTidspunkt}.</p>
              <button className="timeslotNextButton">
                Bekreft time og gå videre
              </button>
            </>
          )}
        </form>
      </div>
    </Slide>
  );
};

const renderLedigTekst = (timeslot) =>
  timeslot.tilgjengelig ? "Ledig" : "Ikke ledig";

const renderTimeslot = (timeslot, onSelect, valgtTimeslot) => {
  const ledigTekst = renderLedigTekst(timeslot);
  const { tilgjengelig, tidspunkt } = timeslot;
  const erValgtTidspunkt = valgtTimeslot === timeslot;
  const tidspunktOgStatus = `${tidspunkt}: ${ledigTekst}`;

  return (
    <td aria-label={tidspunktOgStatus}>
      {erValgtTidspunkt ? (
        <>{tidspunkt} - valgt</>
      ) : (
        <>
          {tilgjengelig && erValgtTidspunkt === false ? (
            <button onClick={() => onSelect(timeslot)}>
              <span className="sr-only">Velg </span>
              {tidspunkt}
            </button>
          ) : (
            <>{tidspunkt}</>
          )}
        </>
      )}
    </td>
  );
};

const createTimeslots = (date) => {
  const slots = [];
  let current = dayjs(date).set("hour", 8).set("minute", 0).set("second", 0);
  let idx = 0;
  do {
    current = current.add(60, "minutes");
    const erTargetTimeslot =
      dayjs(current).format(dateFormat) === targetTimeslot;
    slots.push({
      dato: current.toDate(),
      tidspunkt: current.format("HH:mm"),
      valgTidspunkt: `${current.format("HH:mm på dddd")}`,
      tilgjengelig: erTargetTimeslot ? true : Math.random() > 0.7,
      targetTimeslot: erTargetTimeslot,
    });
    idx++;
  } while (idx < 8);
  return slots;
};

const mandag = createTimeslots(new Date(2021, 3, 12));
const tirsdag = createTimeslots(new Date(2021, 3, 13));
const onsdag = createTimeslots(new Date(2021, 3, 14));
const torsdag = createTimeslots(new Date(2021, 3, 15));
const fredag = createTimeslots(new Date(2021, 3, 16));
const tidspunkter = [...mandag];

const getAntallLedigeTimerPåDag = (timeslots) => {
  const ledige = timeslots.filter((t) => t.tilgjengelig === true).length;
  switch (ledige) {
    case 0:
      return "Ingen ledige timer";
    case 1:
      return "1 ledig time";
    default:
      return `${ledige} ledige timer`;
  }
};

export default Task3;
