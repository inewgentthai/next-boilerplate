// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AwesomeReducer } from "./awesome";
// #endregion Local Imports

export default combineReducers({
    awesome: AwesomeReducer,
    home: HomeReducer,
});
