import styled from "styled-components";
import { useState } from "react";

export default function Kachel(props) {
  const buttons = [];
  /* const [toggle, setToggle] = useState(false);
  const toggleCard = () => {
    setToggle(!toggle); 
  }; */
  for (let i = 0; i < props.diff + 1; i++) {
    buttons.push(
      <Tile id="{props.days[i].id}">
        <h2>{props.dOW[i]}</h2>
        <p>
          {props.days[i].day}.{props.endMonth}.
        </p>
      </Tile>
    );
  }
  console.log(buttons);
  return (
    <section>
      <h2>1. Woche</h2>
      <div>{buttons}</div>
    </section>
  );
}

const section = styled.section`
  background-color: red;
`;
const Tile = styled.button`
  height: 5rem;
  width: 5rem;
  margin: 1rem;
  padding: 0;
  background-color: blue;
  font-size: 1rem;
  border-radius: 20%;
  box-shadow: 5px 5px 10px black;
`;
