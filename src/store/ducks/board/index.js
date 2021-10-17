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
      if(state.selectedHexagon){
        if(state.selectedHexagon.id === action.payload.clickedHexagon.id ) {
          return unselectHexagon(state);
        }

        if (state.selectedHexagon.owner !== action.payload.clickedHexagon.owner &&state.selectedHexagon.owner === state.turn) {
          return moveOrAttack(state, action.payload.clickedHexagon)
        }
      }
      
      return selectHexagon(state, action.payload.clickedHexagon)
    case Types.SETUP:
      return {
        ...state,
        hexagons: action.payload.hexagons
      }
    default:
      return state;
  }
}

export function clickHexagon(clickedHexagon) {
  return {
    type: Types.CLICK_HEXAGON,
    payload: {
      clickedHexagon
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