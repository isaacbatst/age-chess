export const Types = {
  SELECT_HEXAGON: "board/SELECT_HEXAGON",
  SETUP: "board/SETUP"
}

const SETUPialState = {
  config: null,
  hexagons: [],
  selectedHexagon: null,
}

export const reducer = (state = SETUPialState, action) => {
  switch(action.type){
    case Types.SELECT_HEXAGON: 
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

export function selectHexagonx(id){
  return {
    type: Types.SELECT_HEXAGON,
    payload: {
      id
    }
  }
}

export function setup(config, hexagons){
  return {
    type: Types.SETUP,
    payload: {
      hexagons,
      config
    }
  }
}