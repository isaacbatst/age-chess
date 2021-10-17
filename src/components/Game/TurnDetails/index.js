import React from 'react'
import { useSelector } from 'react-redux'

function TurnDetails() {
  const playerTurn = useSelector(({ board }) => board.players[board.playerTurnIndex]);
  const turnsCounter = useSelector(state => state.board.turnsCounter)

  return (
    <section className="turn-details details right">
      <p>Player: {playerTurn}</p>  
      <p>Turn: {turnsCounter}</p>
    </section>
  )
}

export default TurnDetails
