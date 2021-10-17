export function removePieceAndOwner(hexagon){
  return {
    ...hexagon,
    piece: undefined,
    owner: undefined
  }
}

export function addPieceAndOwner(hexagon, piece, owner){
  return {
    ...hexagon,
    owner: owner,
    piece: piece
  }
}

export function updatedHexagonPiece(hexagon, newPiece){
  return {
    ...hexagon,
    piece: newPiece
  }
}

