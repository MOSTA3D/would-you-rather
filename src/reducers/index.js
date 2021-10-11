import { combineReducers } from "redux";
import user from "./user";
import question from "./question";
import login from "./authed";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({user, question, login, loadingBar: loadingBarReducer});
