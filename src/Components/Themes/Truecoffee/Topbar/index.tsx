// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { ITopbar } from "./Topbar";
// #endregion Local Imports

const Topbar: React.FunctionComponent<ITopbar.IProps> = (): JSX.Element => {
    return (
      <section className="topbar fixed-top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col text-left">
              <div className="icn-history float-left">
                <a href="order-history.html" data-toggle="tooltip" data-placement="right" title="Order History" /></div>
            </div>
            <div className="col-6 text-center">
              <a href="index.html"><img src="static/truecoffee-ordering/images/logo.svg" /></a>
            </div>
            <div className="col text-right">
              <div className="icn-cart float-right">
                <a href="cart.html"><div className="icn-noti">1</div></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export { Topbar };
