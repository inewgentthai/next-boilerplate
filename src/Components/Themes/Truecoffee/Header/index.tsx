// #region Global Imports
import * as React from "react";
import Head from 'next/head';
// #endregion Global Imports

// #region Local Imports
import "./style.scss";
// #endregion Local Imports

// #region Interface Imports
import { IHeader } from "./Header";
// #endregion Interface Imports

const Header: React.FunctionComponent<IHeader.IProps> = (
    props
): JSX.Element => {
    const { text } = props;

    return (
        <Head>
          <title>{ text } </title>
          <meta property="og:title" content={ text } key="title" />
        </Head>
    );
};

export { Header };
