// #region Interface Imports
import { IHomePage, IAwesome } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    awesome: IAwesome.IStateProps;
    home: IHomePage.IStateProps;
}
