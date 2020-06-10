// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IHorecaTheme } from "./HorecaTheme";
// #endregion Local Imports

const HorecaTheme: React.FunctionComponent<IHorecaTheme.IProps> = (): JSX.Element => {
    return (
     <div>
        <div className="loading-icon" />
        <div className="wrapper">
          {/* Topbar */}
          <section className="topbar fixed-top">
            <div className="container">
              <div className="row no-gutters">
                <div className="col text-left">
                  <div className="icn-history float-left"><a href="order-history.html" data-toggle="tooltip" data-placement="right" title="Order History" /></div>
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
          {/* End Topbar */}
          {/* Categories */}
          <section className="categories">
            <div className="container">
              <div className="categories-list row justify-content-center">
                <div className="item capsule"><a href="#">Allsss</a></div>
                <div className="item capsule active"><a href="#">Coffee</a></div>
                <div className="item capsule"><a href="#">Tea</a></div>
                <div className="item capsule"><a href="#">Non Coffee</a></div>
                <div className="item capsule"><a href="#">Tea</a></div>
                <div className="item capsule"><a href="#">Non Coffee</a></div>
                <div className="item capsule"><a href="#">Tea</a></div>
              </div>
              <div className="row">
                <div className="col cat-found text-center"><b className="text-red">“Coffee”</b> Found 8 item</div>
              </div>
            </div>
          </section>
          {/* End Categories */}
          {/* Item List */}
          <section className="item-list">
            <div className="container">
              <div className="row no-gutters">
                <div className="item">
                  <div className="paper">
                    <a href="#" data-toggle="modal" data-target="#itemModal" data-backdrop="static">
                      <div className="product-thumb">
                        <div className="product-size">L</div>
                        <img src="static/truecoffee-ordering/images/product-coffee1.png" srcSet="static/truecoffee-ordering/images/product-coffee1.png 2x, static/truecoffee-ordering/images/product-coffee1.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cafe Latte - LIced Cafe Latte - L</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee1.png" srcSet="static/truecoffee-ordering/images/product-coffee1.png 2x, static/truecoffee-ordering/images/product-coffee1.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Americano - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee3.png" srcSet="static/truecoffee-ordering/images/product-coffee3.png 2x, static/truecoffee-ordering/images/product-coffee3.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Caramel Macchiato - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="paper">
                    <a href="#">
                      <div className="product-thumb">
                        <div className="product-size">M</div>
                        <img src="static/truecoffee-ordering/images/product-coffee4.png" srcSet="static/truecoffee-ordering/images/product-coffee4.png 2x, static/truecoffee-ordering/images/product-coffee4.png 3x" className="product-thumb" />
                      </div>
                      <div className="product-info">
                        <div className="product-type">Coffee</div>
                        <div className="product-name">Iced Cappuccino - M</div>
                        <div className="product-price-add">
                          <div className="product-price">฿85.00</div>
                          <div className="product-add icn-add-cart" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Item List */}
          {/* Cart Bar */}
          <section className="cart-bar fixed-bottom">
            <div className="container">
              <a href="cart.html">
                <div className="row no-gutters justify-content-between align-items-center">
                  <div className="col-4"><div className="item-in-cart badge">3</div></div>
                  <div className="col go-to-cart">Go to Cart</div>
                  <div className="col-4 total">
                    <div>Total</div>
                    <div>฿9,999.00</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
          {/* End Cart Bar */}
          {/* Modal */}
          <div className="modal fade" id="itemModal" tabIndex={-1} role="dialog" aria-labelledby="itemModal" aria-hidden="true">
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
          {/* End Modal */}
        </div>
        <button id="fabbtt" title="Go to top">Back to Top</button>
      </div>
    );
};

export { HorecaTheme };
