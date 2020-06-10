// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AwesomeReducer } from "./awesome";
import { MenuReducer } from "./menu";
// #endregion Local Imports

export default combineReducers({
    menu: MenuReducer,
    awesome: AwesomeReducer,
    home: HomeReducer,
});
