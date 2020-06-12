// #region Interface Imports
import { IHomePage, IMenu } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    menu: IMenu.IStateProps;
    home: IHomePage.IStateProps;
}
