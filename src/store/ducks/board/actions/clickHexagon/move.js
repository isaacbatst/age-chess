import { addPieceAndOwner, removePieceAndOwner } from "./helpers";

export default function move(state, clickedHexagon){
  const { selectedHexagon, players, playerTurnIndex } = state;
  
  const hexagonsAfterMove = state.hexagons.map(hexagon => {
    if(hexagon.id === clickedHexagon.id){
      return addPieceAndOwner(hexagon, selectedHexagon.piece, players[playerTurnIndex])
    }

    if(hexagon.id === selectedHexagon.id){
      return removePieceAndOwner(hexagon)
    }
    
    return hexagon;
  })

  return hexagonsAfterMove;
}