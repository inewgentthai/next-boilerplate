// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IDefaultLayout } from "./DefaultLayout";
import { CartBar } from "../../CartBar";
import { CategoryBar } from "../../CategoryBar";
import { Topbar } from "../../Topbar";
import { Modal } from "../../Modal";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
// #endregion Local Imports

const DefaultLayout: React.FunctionComponent<IDefaultLayout.IProps> = (
  { children, title = 'True Coffee : Smart Ordering' }
  ): JSX.Element => {
    return (
     <div>
        <Header title={ title }/>
        <div className="loading-icon" />
        <div className="wrapper">
          <Topbar />
          <CategoryBar />
          { children }
          <CartBar />
          <Modal />
        </div>
        <Footer />
      </div>
    );
};

export { DefaultLayout };
