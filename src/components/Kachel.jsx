import styled from "styled-components";

export default function Kachel(props) {
  const buttons = [];
  for (let i = 0; i < props.diff + 1; i++) {
    buttons.push(
      <Tile id="{props.days.day.id}">
        {props.dOW[i]}
        {props.id}
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

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  height: 200%;
  width: 100%;
  padding: auto;
  margin: auto;
  background-color: red;
  text-align: center;
`;
const Tile = styled.button`
  height: 5rem;
  width: 5rem;
  margin: 1rem;
  background-color: blue;
  font-size: 2rem;
  border-radius: 20%;
  box-shadow: 5px 5px 10px black;
`;
