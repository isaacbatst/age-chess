import { combineReducers, createStore } from "redux";
import { reducer as board } from "./ducks/board";

const rootReducer = combineReducers({
  board
})

export const store = createStore(rootReducer);