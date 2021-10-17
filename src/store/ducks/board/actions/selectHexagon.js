import { HexUtils } from "react-hexgrid-with-context-api"
import { attackTypes } from "../../../../data/Game/attack";


export function selectHexagon(state, action){
  return {
    ...state,
    selectedHexagon: action.payload.id
  }
}

export function unselectHexagon(state){
  return {
    ...state,
    selectedHexagon: null
  }
}

export function moveOrAttack(state, action, selectedHexagon){
  const clickedHexagon = state.hexagons.find(hexagon => hexagon.id === action.payload.id)
  const distance = HexUtils.distance(selectedHexagon.coordinates, clickedHexagon.coordinates);

  if(distance === selectedHexagon.piece.move){
    if(!clickedHexagon.owner){
      return move(state, selectedHexagon, clickedHexagon)
    }

    return attack(state, selectedHexagon, clickedHexagon)
  }

  return state;
}

function move(state, selectedHexagon, clickedHexagon){
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

function attack(state, attackerHexagon, defenderHexagon){
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

function removePieceAndOwner(hexagon){
  return {
    ...hexagon,
    piece: undefined,
    owner: undefined
  }
}

function addPieceAndOwner(hexagon, piece, owner){
  return {
    ...hexagon,
    owner: owner,
    piece: piece
  }
}

function updatedHexagonPiece(hexagon, newPiece){
  return {
    ...hexagon,
    piece: newPiece
  }
}
