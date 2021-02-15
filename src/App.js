import Board from "./components/Board/";
import styled from "styled-components";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Header = styled.header`
  padding: 1em;
  margin-bottom: 2em;
  background-color: #123a82;
  align-self: stretch;
  color: white;
  text-align: center;
`

function App() {
  return (
    <StyledApp>
      <Header>Age Chess</Header>
      <Board />
    </StyledApp>
  );
}

export default App;
