import { combineReducers } from "redux";
import menuReducer from "../services/food/reducer";
import coverReducer from "../services/cover/reducer";

export default combineReducers({
  menu: menuReducer,
  cover: coverReducer
});
