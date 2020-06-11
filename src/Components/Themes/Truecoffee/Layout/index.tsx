// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { ILayout } from "./Layout";
import { CartBar } from "../CartBar";
import { CategoryBar } from "../CategoryBar";
import { Topbar } from "../Topbar";
import { Modal } from "../Modal";
import { Header } from "../Header";
import { Footer } from "@Components/Footer";
// #endregion Local Imports

const Layout: React.FunctionComponent<ILayout.IProps> = ({ children, title = 'True Coffee : Smart Ordering' }): JSX.Element => {
    return (
     <div>
        <Header text={ title }/>
        <div className="loading-icon" />
        <div className="wrapper">
          {/* Topbar */}
          <Topbar />
          {/* End Topbar */}
          {/* Categories */}
          <CategoryBar />
          {/* End Categories */}
          {/* Item List */}
          { children }
          {/* End Item List */}
          {/* Cart Bar */}
          <CartBar />
          {/* End Cart Bar */}
          {/* Modal */}
          <Modal />
          {/* End Modal */}
        </div>
        <Footer />
      </div>
    );
};

export { Layout };
