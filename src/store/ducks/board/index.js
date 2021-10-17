import { unselectHexagon, selectHexagon, moveOrAttack } from "./actions/selectHexagon"

export const Types = {
  CLICK_HEXAGON: "board/CLICK_HEXAGON",
  SETUP: "board/SETUP"
}

const initialState = {
  config: null,
  hexagons: [],
  selectedHexagon: null,
  turn: 'player1'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLICK_HEXAGON:
      const selectedHexagon = state.hexagons.find(hexagon => hexagon.id === state.selectedHexagon)

      if(state.selectedHexagon === action.payload.id) {
        return unselectHexagon(state);
      }

      if (state.selectedHexagon && state.turn === selectedHexagon.owner) {
        return moveOrAttack(state, action, selectedHexagon)
      }

      return selectHexagon(state, action)
    case Types.SETUP:
      return {
        ...state,
        hexagons: action.payload.hexagons
      }
    default:
      return state;
  }
}

export function clickHexagon(id) {
  return {
    type: Types.CLICK_HEXAGON,
    payload: {
      id
    }
  }
}

export function setup(config, hexagons) {
  return {
    type: Types.SETUP,
    payload: {
      hexagons,
      config
    }
  }
}