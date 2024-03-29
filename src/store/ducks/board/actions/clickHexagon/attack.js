import { attackTypes } from "../../../../../data/Game/attack";
import { addPieceAndOwner, removePieceAndOwner, updatedHexagonPiece } from "./helpers";

export default function attack(state, attackerHexagon, defenderHexagon){
  const { hexagons, players, playerTurnIndex } = state;
  const attacker = attackerHexagon.piece;
  const defender = defenderHexagon.piece;

  const doSpecificAttack = attackTypes[attacker.type] || attackTypes.default;

  const result = doSpecificAttack(attacker, defender);
  
  const hexagonsAfterAttack = hexagons.map(hexagon => {
    if(hexagon.id === defenderHexagon.id  && hasDefenderDied(result)){
      return addPieceAndOwner(defenderHexagon, result.attacker, players[playerTurnIndex]);
    }

    if(hexagon.id === defenderHexagon.id ){
      return updatedHexagonPiece(defenderHexagon, result.defender)
    }

    if(hexagon.id === attackerHexagon.id && hasDefenderDied(result)){
      return removePieceAndOwner(hexagon);
    }

    return hexagon;
  })

  return  hexagonsAfterAttack
}

function hasDefenderDied(result){
  return result.defender.health.actual <= 0
}
