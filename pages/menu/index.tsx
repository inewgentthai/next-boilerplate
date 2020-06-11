// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { MenuActions } from "@Actions";
import { Layout } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IMenu } from "@Interfaces";
import { ItemList } from "@Components";
// #endregion Interface Imports

export const Menu: NextPage<
    IMenu.IProps,
    IMenu.InitialProps
> = ({ t, i18n }) => {
    const menu = useSelector((state: IStore) => state.menu);
    const dispatch = useDispatch();
    
    return (
        <Layout title={ t("common:True Coffee Title") }>
            <ItemList menus={ menu }/>
        </Layout>
    );
};

Menu.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IMenu.InitialProps> => {
    await ctx.store.dispatch(
        MenuActions.GetMenu({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Menu);
