import { combineReducers } from "redux";
import { filmsReducer } from "./flimsReducer";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers ({
  films: filmsReducer,
  filter: filterReducer,
  user: userReducer
})