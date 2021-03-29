import dayjs from "dayjs";
import React, { useState } from "react";
import "./timeslots.scss";

const getRandomTilgjengelig = () => {
  return Math.random() > 0.8;
};

const dateFormat = "DD.MM.YYYY-HH:mm";
const targetTimeslot = dayjs(new Date(2021, 3, 15, 15, 30)).format(dateFormat);

const createTimeslots = (date) => {
  const slots = [];
  let current = dayjs(date).set("hour", 8).set("minute", 0).set("second", 0);
  let idx = 0;
  do {
    current = current.add(30, "minutes");
    const erTargetTimeslot =
      dayjs(current).format(dateFormat) === targetTimeslot;
    slots.push({
      dato: current.toDate(),
      tidspunkt: current.format("HH:mm"),
      tilgjengelig: erTargetTimeslot ? true : getRandomTilgjengelig(),
      targetTimeslot: erTargetTimeslot,
    });
    idx++;
  } while (idx < 16);
  return slots;
};

const mandag = createTimeslots(new Date(2021, 3, 12));
const tirsdag = createTimeslots(new Date(2021, 3, 13));
const onsdag = createTimeslots(new Date(2021, 3, 14));
const torsdag = createTimeslots(new Date(2021, 3, 15));
const fredag = createTimeslots(new Date(2021, 3, 16));
const tidspunkter = [...mandag];

const Task3 = ({ onSubmit }) => {
  const [valgtTimeslot, setValgtTimeslot] = useState(undefined);

  return (
    <div>
      <h1>Velg ledig tid i kalender</h1>
      <table className="timeslots">
        <thead>
          <tr>
            <th>Mandag</th>
            <th>Tirsdag</th>
            <th>Onsdag</th>
            <th>Torsdag</th>
            <th>Fredag</th>
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
      <div className="timeslot_buttonrow">
        <button className="timeslotNextButton" onClick={onSubmit}>
          Gå videre
        </button>
      </div>
    </div>
  );
};

const renderTimeslot = (timeslot) => {
  return (
    <td
      className={`
        ${timeslot.tilgjengelig ? "timeslot--tilgjengelig" : "timeslot--opptatt"}
        ${timeslot.targetTimeslot ? "timeslot--target" : ""}
      `}
    >
      {timeslot.tidspunkt}
    </td>
  );
};

export default Task3;
