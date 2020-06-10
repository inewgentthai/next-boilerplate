// #region Interface Imports
import { IHomePage, IAwesome, IMenu } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    menu: IMenu.IStateProps;
    awesome: IAwesome.IStateProps;
    home: IHomePage.IStateProps;
}
