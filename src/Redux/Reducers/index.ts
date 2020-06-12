// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { MenuReducer } from "./menu";
// #endregion Local Imports

export default combineReducers({
    menu: MenuReducer,
    home: HomeReducer,
});
