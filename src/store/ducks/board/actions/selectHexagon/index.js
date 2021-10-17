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
    if(!clickedHexagon.owner){
      return move(state, clickedHexagon)
    }

    return attack(state, state.selectedHexagon, clickedHexagon)
  }

  return state;
}
