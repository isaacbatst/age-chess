import { useSelector } from "react-redux";
import Board from "./Board";
import './index.css'
import SelectedHexagonDetails from "./SelectedHexagonDetails";
import TurnDetails from "./TurnDetails";


function Game(){
  const selectedHexagon = useSelector(state => state.board.selectedHexagon)

  return <div className="game">
    <div className="game-container">
      <TurnDetails />
      <Board /> 
      { selectedHexagon &&  <SelectedHexagonDetails selectedHexagon={selectedHexagon} /> }
    </div>
  </div>
}

export default Game;