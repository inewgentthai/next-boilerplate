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
                "/472e5fcb-c786-4bf1-81d3-00cfd104c0c5",
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
