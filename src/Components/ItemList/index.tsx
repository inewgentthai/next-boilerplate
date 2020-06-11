// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IItemList } from "./ItemList";
// #endregion Local Imports

const ItemList: React.FunctionComponent<IItemList.IProps> = (): JSX.Element => {
    return (
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
    );
};

export { ItemList };
