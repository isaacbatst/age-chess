import { Provider } from "react-redux";
import { store } from "../../store";
import { StyledApp, StyledHeader } from "./styles";
import Game from "../Game";


function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <StyledHeader>Age Chess</StyledHeader>
        <Game />
      </StyledApp>
    </Provider>
  );
}

export default App;
