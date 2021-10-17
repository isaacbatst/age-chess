import handleClickHexagon from "./actions/clickHexagon"

export const Types = {
  CLICK_HEXAGON: "board/CLICK_HEXAGON",
  SETUP: "board/SETUP"
}

const initialState = {
  config: null,
  hexagons: [],
  selectedHexagon: null,
  players: ['player1', 'player2'],
  playerTurnIndex: 0,
  turnsCounter: 1,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLICK_HEXAGON:
      return handleClickHexagon(state, action)
      
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
