// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { AwesomeActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Awesome action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Awesome.SetReducer
            },
        ];

        store.dispatch(AwesomeActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            awesome: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Awesome.ResetReducer
            },
        ];

        store.dispatch(AwesomeActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
