import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
import nhanVienReducer from "./nhanVienReducer";

const allReducers = combineReducers({
  toDoReducer,
  nhanVienReducer
});
export default allReducers;