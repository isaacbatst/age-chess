import Board from "../Board";
import { Provider } from "react-redux";
import { store } from "../../store";
import { StyledApp, StyledHeader } from "./styles";


function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <StyledHeader>Age Chess</StyledHeader>
        <Board />
      </StyledApp>
    </Provider>
  );
}

export default App;
