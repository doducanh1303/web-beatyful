import React from "react";
import {
  Button,
  Drawer,
  Modal,
  Popover,
  Input,
  Form,
  Affix,
  Empty,
  notification,
  Card,
} from "antd";
function TopBarCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log("cart........", cart);
  const renderCart = () => {
    const Listcart = cart.map((item) => {
      return (
        <div className="card_item">
          <div className="product_img">
            <img src={item?.payload?.image} alt="" />
          </div>
          <div className="product_info">
            <h1>{item?.payload?.productname}</h1>

            <div className="close-btn">
              <i className="fa fa-close" />
            </div>
            <div className="product_rate_info">
              <h1>$ {item?.payload?.price}</h1>
              <span className="pqt-minus">-</span>
              <span className="pqt">1</span>
              <span className="pqt-plus">+</span>
            </div>
          </div>
        </div>
      );
    });
    return Listcart;
  };

  const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }
    return total;
  };

  const renderTotal = () => {
    if (cart) {
      return (
        <div>
          <div className="order_price">
            <p>Order summary</p>
            <h4>$ {cartTotal()}</h4>
          </div>
          <div className="order_total">
            <p>Total Amount</p>
            <h4>$ {cartTotal()}</h4>
          </div>
        </div>
      );
    } else {
      <Empty />;
    }
  };
  return (
    <div>
      {renderCart()}

      <hr />
      {renderTotal}
    </div>
  );
}

export default TopBarCart;
