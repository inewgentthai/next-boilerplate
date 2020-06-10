// #region Local Imports
import { IAction, IAwesome } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { AwesomeReducer } from ".";
// #endregion Local Imports

describe("Awesome reducer", () => {
    it("should return the initial state", () => {
        expect(AwesomeReducer(
            undefined,
            {} as IAction<IAwesome.IStateProps>)
        ).toEqual({});
    });
});
