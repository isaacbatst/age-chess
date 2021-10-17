import { unselectHexagon, selectHexagon, moveOrAttack } from "./actions/selectHexagon"

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
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLICK_HEXAGON:
      const { selectedHexagon, players, playerTurnIndex } = state;
      const { payload: { clickedHexagon } } = action;

      console.log(players, playerTurnIndex)

      if(selectedHexagon && selectedHexagon.id === clickedHexagon.id ) {
        return unselectHexagon(state);
      }

      if (selectedHexagon && selectedHexagon.owner !== clickedHexagon.owner && selectedHexagon.owner === players[playerTurnIndex]) {
        return moveOrAttack(state, clickedHexagon)
      }
      
      return selectHexagon(state, clickedHexagon)
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