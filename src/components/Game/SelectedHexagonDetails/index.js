import React from 'react'

function SelectedHexagonDetails({selectedHexagon}) {
  const { piece, owner, coordinates } = selectedHexagon

  function pieceDetails(piece){
    return (
      <div className="piece">
        <p>Name: {piece.name}</p>
        <p>Health: {piece.health.actual}/{piece.health.full}</p>
        <p>Type: {piece.type}</p>
        <p>Move: {piece.move}</p>
      </div>
    )
  }

  function hexDetails(owner, coordinates){
    return (
      <div className="hex">
        <p>Coords: {`${coordinates.q} ${coordinates.r} ${coordinates.s}`}</p>
        <p>Owner: { owner || 'none' }</p>
      </div>
    )
  }

  return (
    <section className="selected-hexagon-details details left">
      { piece && pieceDetails(piece) }
      { hexDetails(owner, coordinates) }
    </section>
  )
}

export default SelectedHexagonDetails
