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

export default function handleClickHexagon(state, action){
  const { selectedHexagon: previouslySelected, players, playerTurnIndex } = state;
  const { payload: { clickedHexagon } } = action;

  const isPreviouslySelectedOwnedByPlayerTurn = isHexagonOwnedByPlayer(previouslySelected, players[playerTurnIndex]); 
  
  if(!previouslySelected || !isPreviouslySelectedOwnedByPlayerTurn){
    return selectHexagon(state, clickedHexagon)
  }
  
  const clickedTheSameSelected = isClickedHexagonTheSameSelected(previouslySelected, clickedHexagon);
  const distance = HexUtils.distance(previouslySelected.coordinates, clickedHexagon.coordinates);

  if(clickedTheSameSelected || distance !== previouslySelected.piece.move) {
    return unselectHexagon(state);
  }

  const nextTurnState = getNextTurn(state);

  if(!clickedHexagon.owner){
    const hexagonsAfterMove = move(state, clickedHexagon);

    return {
      ...nextTurnState,
      hexagons: hexagonsAfterMove,
    }
  }
  
  const hexagonsAfterAttack = attack(state, previouslySelected, clickedHexagon);

  return {
    ...nextTurnState,
    hexagons: hexagonsAfterAttack
  };
}

const isClickedHexagonTheSameSelected = (selected, clicked) => selected && selected.id === clicked.id;
const isHexagonOwnedByPlayer = (hexagon, playerTurn) => hexagon && hexagon.owner === playerTurn;

function getNextTurn(state){
  const { playerTurnIndex, players } = state;
  const nextPlayerTurnIndex = playerTurnIndex >= (players.length - 1) ? 0 : playerTurnIndex + 1;

  return {
    ...state,
    playerTurnIndex: nextPlayerTurnIndex,
    selectedHexagon: null,
  }
}
