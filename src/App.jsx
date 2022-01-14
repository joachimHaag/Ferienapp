import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import serverImport from "./data.js";
import Kachel from "./components/Kachel";

function App() {
  const [count, setCount] = useState(0);
  const [alleFerien, setAlleFerien] = useState([]);

  const nextHoliday = serverImport[0].name;
  const startDateHol = serverImport[0].start;
  const endDatumFerien = serverImport[0].end;
  const startDatumFerienMs = Date.parse(startDateHol);
  const endDatumFerienMs = Date.parse(endDatumFerien);
  const diff = (startDatumFerienMs - endDatumFerienMs) / 86400000;
  const eMonth = endDatumFerien.slice(0, 4); //Year !!!
  const endDay = endDatumFerien.slice(8, 10);
  const endMonth = endDatumFerien.slice(5, 7);
  const endDate = endDay + "." + endMonth + ".";
  const startDay = startDateHol.slice(8, 10);
  const startMonth = startDateHol.slice(5, 7);
  const startDate = startDay + "." + startMonth + ".";

  return (
    <div className="App">
      <body>
        <header>
          <div className="header"></div>
          <h1 id="FerienName">
            {nextHoliday} {eMonth}
          </h1>
          <h2>
            {endDate} {"- "} {startDate}
          </h2>
          <div>An welchen der {diff} Tage würde Ihr Kind gerne spielen?</div>

          <div></div>
        </header>
        <Kachel diff={diff} sDH={startDateHol} />

        <footer>
          <nav></nav>
        </footer>
      </body>
    </div>
  );
}

export default App;
