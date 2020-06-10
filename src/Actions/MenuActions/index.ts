// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const MenuActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Menu.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Menu.ResetReducer
    })
};
