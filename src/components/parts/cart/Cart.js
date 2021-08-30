import { Col, InputNumber, Layout, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../cart/Cart.css";
import Footer from "../footer/Footer";
import AppHeader from "../header/AppHeader";
const { Content } = Layout;

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"))
   const dispatch = useDispatch();

  function onChange(value) {
    // dispatch(update({product:cart,quantity:value}))
  
  }
  const getCart = () => {
 var result=null;
  if(cart){
    result= cart.map((item)=>{
      return (
        <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
               src={item.image}
              />
            </div>
            <div className="product-details">
              <h1>
                <strong>
                  <span className="item-quantity">{item.quantity}</span> x 
                </strong>{" "}
          {item.productname}
              </h1>
              <p>Product Code - 232321939</p>
            </div>
          </div>
          <div className="price">${item.price }</div>
          <div className="quantity">
          <InputNumber size="small" min={1} max={10} defaultValue={1} onChange={onChange} />
          </div>
          <div className="subtotal">{item.quantity * item.price}</div>
          <div className="remove">
            {/*<button onClick={()=>dispatch(remove(cart))}>Remove</button>*/}
          </div>
        </div>
      );
     })
  }
 return result;
  };

  const cartTotal=()=>{
    let total=0;
  if(cart>0){
    for (let i = 0; i < cart.length; i++) {
      total+=cart[i].quantity*cart[i].price
     
   }
  }
    return total
  }
  return (
    <Layout>
      <AppHeader />
      <Content>
        <div className="cart">
          <div className="wraper">
            <Row>
              <Col xl={19} md={12} sm={24} xs={24}>
                <div className="basket">
                  <div className="basket-module">
                    <label htmlFor="promo-code">Enter a promotional code</label>
                    <input
                      id="promo-code"
                      type="text"
                      name="promo-code"
                      maxLength={5}
                      className="promo-code-field"
                    />
                    <button className="promo-code-cta">Apply</button>
                  </div>
                  <div className="basket-labels">
                    <ul>
                      <li className="item item-heading">Item</li>
                      <li className="price">Price</li>
                      <li className="quantity">Quantity</li>
                      <li className="subtotal">Subtotal</li>
                    </ul>
                  </div>

                  { getCart()}
                </div>
              </Col>
              <Col xl={5} md={12} sm={24} xs={24}>
                <aside>
                  <div className="summary">
                    <div className="summary-total-items">
                      <span className="total-items" /> Items in your Bag
                    </div>
                    <div className="summary-subtotal">
                      <div className="subtotal-title">Subtotal</div>
                      <div
                        className="subtotal-value final-value"
                        id="basket-subtotal"
                      >
                        {cartTotal()}
                      </div>
                      <div className="summary-promo hide">
                        <div className="promo-title">Promotion</div>
                        <div
                          className="promo-value final-value"
                          id="basket-promo"
                        />
                      </div>
                    </div>
                    <div className="summary-delivery">
                      <select
                        name="delivery-collection"
                        className="summary-delivery-selection"
                      >
                        <option value={0} selected="selected">
                          Select Collection or Delivery
                        </option>
                        <option value="collection">Collection</option>
                        <option value="first-class">
                          Royal Mail 1st Class
                        </option>
                        <option value="second-class">
                          Royal Mail 2nd Class
                        </option>
                        <option value="signed-for">
                          Royal Mail Special Delivery
                        </option>
                      </select>
                    </div>
                    <div className="summary-total">
                      <div className="total-title">Total</div>
                      <div
                        className="total-value final-value"
                        id="basket-total"
                      >
                     {cartTotal()}
                      </div>
                    </div>
                    <div className="summary-checkout">
                      <Link to="/vanibeauty/cart/checkout">
                        <button className="checkout-cta">
                          Go to Secure Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </aside>
              </Col>
            </Row>

            {/* <Row gutter={[20]}>
              <Col xl={12} md={12} sm={24} xs={24}>
     <Table />
              </Col>
              <Col xl={12}  md={12}  sm={24} xs={24}>
                <div className="total">
                  <ul>
                    <li><h3>TỔNG SỐ LƯỢNG</h3></li>
                    <li>
                      <div className="total-content">
                        <h3>Tổng phụ</h3>
                        <p>4000</p>
                      </div>
                    </li>
                    <li>
                    <div className="total-content">
                        <h3>Giao hàng</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                      </div>
                    </li>
                    <li>
                    <div className="total-content">
                        <h3>Tổng</h3>
                        <p>4000</p>
                      </div>
                    </li>
                    <li>
<Link to="/vanibeauty/cart/checkout">
<Button type="prime">TIỀN HÀNH THANH TOÁN</Button>
</Link>
                    </li>
                 
                  </ul>
                </div>
              </Col>
            </Row> */}
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default Cart;
