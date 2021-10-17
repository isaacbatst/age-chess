import { attackTypes } from "../../../../../data/Game/attack";
import { addPieceAndOwner, removePieceAndOwner, updatedHexagonPiece } from "./helpers";

export default function attack(state, attackerHexagon, defenderHexagon){
  const attacker = attackerHexagon.piece;
  const defender = defenderHexagon.piece;

  const doAttack = attackTypes[attacker.type];

  if(doAttack){
    const result = doAttack(attacker, defender);
    
    const hexagonsAfterAttack = state.hexagons.map(hexagon => {
      if(hexagon.id === defenderHexagon.id  && hasDefenderDied(result)){
        return addPieceAndOwner(defenderHexagon, result.attacker, 'player1');
      }

      if(hexagon.id === defenderHexagon.id ){
        return updatedHexagonPiece(defenderHexagon, result.defender)
      }

      if(hexagon.id === attackerHexagon.id && hasDefenderDied(result)){
        return removePieceAndOwner(hexagon);
      }

      return hexagon
    })


    return {
      ...state,
      selectedHexagon: null,
      hexagons: hexagonsAfterAttack
    }
  }

  return state;
}

function hasDefenderDied(result){
  return result.defender.health.actual <= 0
}
