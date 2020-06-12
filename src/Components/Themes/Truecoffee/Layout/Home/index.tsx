// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IHomeLayout } from "./HomeLayout";
import { DocumentContext } from "next/document";
import { Header } from "../../Header";
// #endregion Local Imports

const HomeLayout: React.FunctionComponent<IHomeLayout.IProps> = ({ children, title = 'True Coffee : Smart Ordering' }): JSX.Element => {
    return (
      <div className="splash">
      <Header text={ title }/>
      <div className="wrapper d-flex align-items-center justify-content-center">
        <section className="splash-container">
          <div className="container">
            <img src="/static/truecoffee-ordering/images/logo-splash.svg"/>
          </div>
        </section>
      </div>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
        body>div, #__next, #__next>div, #__next>div>div {
          height: 100%;
        }
       `}</style>

    </div>
    );
};

export { HomeLayout };
