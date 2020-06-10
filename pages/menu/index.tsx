// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { MenuActions } from "@Actions";
import { HorecaTheme } from "@Components/Themes";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IMenu } from "@Interfaces";
// #endregion Interface Imports

export const Menu: NextPage<
    IMenu.IProps,
    IMenu.InitialProps
> = ({ t, i18n }) => {
    const menu = useSelector((state: IStore) => state.menu);
    const dispatch = useDispatch();

    return (
        <HorecaTheme></HorecaTheme>
    );
};

Menu.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IMenu.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Menu);
