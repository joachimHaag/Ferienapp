import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import serverImport from "./data.js";
import Kachel from "./components/Kachel";
import { saveToLocal, loadFromLocal } from "./components/localStorage";

function App() {
  const [count, setCount] = useState(0);
  const [alleFerien, setAlleFerien] = useState([]);
  const nextHoliday = serverImport[0].name;
  const startDateHol = serverImport[0].start;
  const endDatumFerien = serverImport[0].end;
  const startDatumFerienMs = Date.parse(startDateHol);
  const endDatumFerienMs = Date.parse(endDatumFerien);
  const diff = (endDatumFerienMs - startDatumFerienMs) / 86400000;
  const eMonth = endDatumFerien.slice(0, 4); //Year !!!
  const endDay = endDatumFerien.slice(8, 10);
  const endMonth = endDatumFerien.slice(5, 7);
  const endDate = endDay + "." + endMonth + ".";
  const startDay = startDateHol.slice(8, 10);
  const startMonth = startDateHol.slice(5, 7);
  const startDate = startDay + "." + startMonth + ".";
  const days = [];
  for (let i = 0; i < diff + 1; i++) {
    let day = Number(startDay) + i;
    days.push({ day: day, id: `${day}${startMonth}22` });
  }
  const dayOfWeek = [
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So",
  ];

  console.log(days.id);

  return (
    <div className="App">
      {/* {days.map((day) => (
        <p>{day.id}</p>
      ))} */}
      <header>
        <div className="header"></div>
        <h1 id="FerienName">
          {nextHoliday} {eMonth}
        </h1>
        <h2>
          {startDate} {"- "} {endDate}22
        </h2>
        <p></p>
        <div>An welchen der {diff + 1} Tage würde Ihr Kind gerne spielen?</div>

        <div></div>
      </header>
      <div>
        <Kachel diff={diff} dOW={dayOfWeek} days={days} endMonth={endMonth} />
      </div>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
