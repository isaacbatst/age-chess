import { HexUtils } from "react-hexgrid-with-context-api"

export const Types = {
  SELECT_HEXAGON: "board/SELECT_HEXAGON",
  SETUP: "board/SETUP"
}

const initialState = {
  config: null,
  hexagons: [],
  selectedHexagon: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SELECT_HEXAGON:
      if(state.selectedHexagon === action.payload.id) {
        return {
          ...state,
          selectedHexagon: null
        }
      }

      if (state.selectedHexagon) {
        const [a, b] = state.hexagons.filter(hexagon => hexagon.id === state.selectedHexagon || hexagon.id === action.payload.id)

        console.log(HexUtils.distance(a.coordinates, b.coordinates))
        return {
          ...state,
          selectedHexagon: null
        }
      }

      return {
        ...state,
        selectedHexagon: action.payload.id
      }
    case Types.SETUP:
      return {
        ...state,
        hexagons: action.payload.hexagons
      }
    default:
      return state;
  }
}

export function selectHexagon(id) {
  return {
    type: Types.SELECT_HEXAGON,
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