// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const AwesomeActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Awesome.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Awesome.ResetReducer
    })
};
