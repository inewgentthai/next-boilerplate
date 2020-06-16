// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IModal } from "./Modal";
// #endregion Local Imports

const Modal: React.FunctionComponent<IModal.IProps> = (): JSX.Element => {
    return (
      <div className="modal fade show" id="itemModal" tabIndex={-1} role="dialog" aria-labelledby="itemModal" aria-hidden="false">
        <div className="item-modal modal-dialog" role="document">
          <div className="modal-content">
            <div className="paper">
              <div className="product-thumb-box">
                <div className="icn-close" data-dismiss="modal" aria-label="Close" />
                <img src="static/truecoffee-ordering/images/product-coffee1.png" srcSet="static/truecoffee-ordering/images/product-coffee1.png 2x, static/truecoffee-ordering/images/product-coffee1.png 3x" className="product-thumb" />
              </div>
              <div className="product-info">
                <div className="product-type">Coffee</div>
                <div className="product-name">Iced Cappuccino - M</div>
                <div className="product-desc">Our dark, rich espresso is combined with milk and served over ice. A perfect milk forward cool down.</div>
                <div className="product-price">฿85</div>
                <div className="product-quantity d-flex justify-content-center">
                  <a className="icn-minus disable" />
                  <input type="tel" className="form-control" id="itemquantity" min={1} max={99} maxLength={2} />
                  <a className="icn-plus" />
                </div>
                <div className="product-note d-flex justify-content-center">
                  <div className="form-group text-center">
                    <label htmlFor="itemnote">Additional Information</label>
                    <input type="text" className="form-control" id="itemnote" placeholder="เช่น ระดับความหวาน,น้ำแข็ง ฯลฯ" />
                  </div>
                </div>
              </div>
              <div className="btn-set">
                <button className="btn btn-red btn-block" >Add item to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export { Modal };
