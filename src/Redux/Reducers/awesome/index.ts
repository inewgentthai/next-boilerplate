// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IAwesome } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IAwesome.IStateProps = { };

type IMapPayload = IAwesome.Actions.IMapPayload;

export const AwesomeReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Awesome.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Awesome.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
