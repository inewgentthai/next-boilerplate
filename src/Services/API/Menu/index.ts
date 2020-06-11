// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { MenuModel } from "@Interfaces";
// #endregion Interface Imports

export const MenuService = {
    GetMenu: async (
        payload: MenuModel.GetMenuPayload
    ): Promise<MenuModel.GetMenuResponse> => {
        let response: MenuModel.GetMenuResponse;
        
        try {
            response = await Http.Request<MenuModel.GetMenuResponse>(
                "GET",
                "/36b63702-bcd5-40fa-b9a6-59647e84d2db",
                payload.params
            );
        } catch (error) {
            response = {
                data: []
            };
        }

        return response;
    },
};
