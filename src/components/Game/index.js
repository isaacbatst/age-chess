import { useSelector } from "react-redux";
import Board from "./Board";
import './index.css'
import SelectedHexagonDetails from "./SelectedHexagonDetails";


function Game(){
  const selectedHexagon = useSelector(state => state.board.selectedHexagon)

  return <div className="game">
    <div className="game-container">
      <Board /> 
      { selectedHexagon &&  <SelectedHexagonDetails selectedHexagon={selectedHexagon} /> }
    </div>
  </div>
}

export default Game;