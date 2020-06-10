// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { AwesomeActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IAwesome } from "@Interfaces";
// #endregion Interface Imports

export const Awesome: NextPage<
    IAwesome.IProps,
    IAwesome.InitialProps
> = ({ t, i18n }) => {
    const awesome = useSelector((state: IStore) => state.awesome);
    const dispatch = useDispatch();

    return (
        <section id="awesome">
            Awesome Page
        </section>
    );
};

Awesome.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IAwesome.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Awesome);
