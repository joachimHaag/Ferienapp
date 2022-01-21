import styled from "styled-components";
import { useState } from "react";
import { saveToLocal, loadFromLocal } from "./localStorage";

export default function Kachel(props) {
  const buttons = [];
  const [selectedDays, setSelectedDays] = useState([]);
  const toggleCard = (i) => {
    if (selectedDays.includes(i)) {
      setSelectedDays(selectedDays.filter((day) => day !== i));
    } else {
      setSelectedDays([...selectedDays, i]);
    }
  };
  for (let i = 0; i < props.diff + 1; i++) {
    buttons.push(
      <Tile
        id="{props.days[i].id}"
        className={` ${selectedDays.includes(i) ? "unselected" : "selected"}`}
        value="{props.days[i].id}"
        onClick={() => toggleCard(i)}
      >
        <h2>{props.dOW[i]}</h2>
        <p>
          {props.days[i].day}.{props.endMonth}.
        </p>
      </Tile>
    );
  }
  console.log(selectedDays);
  return (
    <section>
      <h2>1. Woche</h2>
      <div>{buttons}</div>
    </section>
  );
}

const Tile = styled.button`
  height: 5rem;
  width: 5rem;
  margin: 1rem;
  padding: 0;
  font-size: 1rem;
  border-radius: 5%;
  box-shadow: 5px 5px 10px black;
`;
