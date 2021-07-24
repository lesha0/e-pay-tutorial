import { combineReducers } from "redux";
import auth from "./auth";
import payment from "./payment";

export default combineReducers({
  auth,
  payment,
});
