import { useRef, useState } from "react";
import dayjs from "dayjs";
import Slide from "../Slide/Slide";
import "./timeslots.scss";
import "dayjs/locale/nb";
import ScreenReaderOnly from "../ScreenReaderOnly/ScreenReaderOnly";

dayjs.locale("nb");

const dateFormat = "DD.MM.YYYY-HH:mm";
const targetTimeslot = dayjs(new Date(2021, 3, 15, 15, 0)).format(dateFormat);

const Task3 = ({ onSubmit }) => {
  const [feilmelding, setFeilmelding] = useState();
  const tidspunkt = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = tidspunkt.current;
    if (value === "15:00" || value === "1500" || value === "15") {
      onSubmit();
    } else setFeilmelding(`"${value}" er ikke riktig svar`);
  };

  return (
    <Slide title="Velg tidspunkt for vaksinasjon">
      <div className="blurredContent-4">
        <div className="wrapper">
          <table className="timeslots" aria-labelledby="tableCaption">
            <caption id="tableCaption">
              Oversikt over tilgjengelige timer i kommende uke
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  aria-label={`Mandag, ${getAntallLedigeTimerPåDag(mandag)}`}
                >
                  <span aria-hidden>Mandag</span>
                  <ScreenReaderOnly>
                    Mandag, {getAntallLedigeTimerPåDag(mandag)}
                  </ScreenReaderOnly>
                </th>
                <th
                  scope="col"
                  aria-label={`Tirsdag, ${getAntallLedigeTimerPåDag(tirsdag)}`}
                >
                  <span aria-hidden>Tirsdag</span>
                  <ScreenReaderOnly>
                    Tirsdag, {getAntallLedigeTimerPåDag(tirsdag)}
                  </ScreenReaderOnly>
                </th>
                <th
                  scope="col"
                  aria-label={`Onsdag, ${getAntallLedigeTimerPåDag(onsdag)}`}
                >
                  <span aria-hidden>Onsdag</span>
                  <ScreenReaderOnly>
                    Onsdag, {getAntallLedigeTimerPåDag(onsdag)}
                  </ScreenReaderOnly>
                </th>
                <th
                  scope="col"
                  aria-label={`Torsdag, ${getAntallLedigeTimerPåDag(torsdag)}`}
                >
                  <span aria-hidden>Torsdag</span>
                  <ScreenReaderOnly>
                    Torsdag, {getAntallLedigeTimerPåDag(torsdag)}
                  </ScreenReaderOnly>
                </th>
                <th
                  scope="col"
                  aria-label={`Fredag, ${getAntallLedigeTimerPåDag(fredag)}`}
                >
                  <span aria-hidden>Fredag</span>
                  <ScreenReaderOnly>
                    Fredag, {getAntallLedigeTimerPåDag(fredag)}
                  </ScreenReaderOnly>
                </th>
              </tr>
            </thead>
            <tbody>
              {tidspunkter.map((timeslot, index) => {
                return (
                  <tr key={index}>
                    {renderTimeslot(mandag[index])}
                    {renderTimeslot(tirsdag[index])}
                    {renderTimeslot(onsdag[index])}
                    {renderTimeslot(torsdag[index])}
                    {renderTimeslot(fredag[index])}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <form
          onSubmit={handleSubmit}
          className="valgtMelding"
          autoComplete="off"
        >
          <div>
            <label className={"svarInput"}>
              Skriv inn ledig tid (tt:mm):
              <input
                type="text"
                ref={tidspunkt}
                aria-invalid={feilmelding !== undefined}
              />
              <span role="alert" aria-live="assertive" className="feilmelding">
                {feilmelding}
              </span>
            </label>
          </div>
          <button className="timeslotNextButton">Gå videre</button>
        </form>
      </div>
    </Slide>
  );
};

const renderLedigTekst = (timeslot) =>
  timeslot.tilgjengelig ? "Ledig" : "Ikke ledig";

const renderTimeslot = (timeslot, onSelect, valgtTimeslot) => {
  const ledigTekst = renderLedigTekst(timeslot);
  const { tidspunkt } = timeslot;
  const tidspunktOgStatus = `${tidspunkt}: ${ledigTekst}`;

  return (
    <td aria-label={tidspunktOgStatus}>
      <span aria-hidden>{tidspunkt}</span>
      <ScreenReaderOnly>{tidspunktOgStatus}</ScreenReaderOnly>
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
      tilgjengelig: erTargetTimeslot ? true : false,
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
