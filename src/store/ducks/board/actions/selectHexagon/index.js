import { HexUtils } from "react-hexgrid-with-context-api"
import attack from "./attack";
import move from "./move";


export function selectHexagon(state, clickedHexagon){

  return {
    ...state,
    selectedHexagon: clickedHexagon
  }
}

export function unselectHexagon(state){
  return {
    ...state,
    selectedHexagon: null
  }
}

export function moveOrAttack(state, clickedHexagon){
  const { selectedHexagon } = state;

  const distance = HexUtils.distance(selectedHexagon.coordinates, clickedHexagon.coordinates);

  if(distance === selectedHexagon.piece.move){
    const nextTurn = getNextTurn(state.playerTurnIndex, state.players);

    const updatedState = {
      ...state,
      selectedHexagon: null,
      playerTurnIndex: nextTurn
    }

    if(!clickedHexagon.owner){
      const hexagons = move(state, clickedHexagon);

      return {
        ...updatedState,
        hexagons
      }
    }

    const hexagons = attack(state, state.selectedHexagon, clickedHexagon);

    return {
      ...updatedState,
      hexagons
    }
  }

  return state;
}

function getNextTurn(playerTurnIndex, players){
  if(playerTurnIndex >= (players.length - 1)){
    return 0;
  }

  return playerTurnIndex + 1;
}