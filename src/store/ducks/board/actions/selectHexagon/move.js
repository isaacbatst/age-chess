import { addPieceAndOwner, removePieceAndOwner } from "./helpers";

export default function move(state, clickedHexagon){
  const { selectedHexagon } = state;
  
  const hexagonsAfterMove = state.hexagons.map(hexagon => {
    if(hexagon.id === clickedHexagon.id){
      return addPieceAndOwner(hexagon, selectedHexagon.piece, 'player1')
    }

    if(hexagon.id === selectedHexagon.id){
      return removePieceAndOwner(hexagon)
    }
    
    return hexagon;
  })

  return {
    ...state,
    hexagons: hexagonsAfterMove,
    selectedHexagon: null
  }
}