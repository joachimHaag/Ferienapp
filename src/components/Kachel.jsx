import styled from "styled-components";

export default function Kachel({ diff, sDH }) {
  return (
    <section>
      <h2>1.Woche</h2>
      <Container>
        <Tile>Mo</Tile>
        <Tile>Di</Tile>
        <Tile>Mi</Tile>
        <Tile>Do</Tile>
        <Tile>Fr</Tile>
        <Tile>Sa</Tile>
        <Tile>So</Tile>
      </Container>
      <h2>2.Woche</h2>
      <Container>
        <Tile>Mo</Tile>
        <Tile>Di</Tile>
        <Tile>Mi</Tile>
        <Tile>Do</Tile>
        <Tile>Fr</Tile>
        <Tile>Sa</Tile>
        <Tile>So</Tile>
      </Container>
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
`;
