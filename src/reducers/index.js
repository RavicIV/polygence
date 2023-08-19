import { combineReducers } from "redux";
import spendingsReducer from "./spendings";

const PolygenceApp = combineReducers({
  spendingsReducer,
});

export default PolygenceApp;
