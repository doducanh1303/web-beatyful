import React, { useState } from "react";
import {
  Button,
  Col,
  Input,
  Layout,
  List,
  Rate,
  Row,
  Tabs,
  Select,
  Slider,
} from "antd";
import "../grocery/MenuGrocery.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IconSlider from "../grocery/IconSlider";
import ch from "../../assets/images/grocery/ch.jpg"
import ch1 from "../../assets/images/grocery/ch1.jpg"

function MenuNews(props) {

  return (
    <div className="menugrocery">
      <Row gutter={[0, 30]}>
        {/* <Col xl="24">
        
            <div className="input-news">
            <Input placeholder="Tìm kiếm ............" />
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </Col> */}
        <Col xl="24">
          <div className="menugrocery-content">
            <h3>Bài viết mới</h3>
            <ul>
              <li className="menugrocery-color">
                <Link to="/vanibeauty/productlist/product-detail">
                <div className="menugrocery-product radius-img">
                      <img src={ch} />
                      <div className="menugrocery-product-text">
                          <p>Sem qwase eiusmod</p>
                          <p>650,000</p>
                      </div>
                </div>
                </Link>
              </li>
              <li>
              <div className="menugrocery-product radius-img">
                      <img src={ch1} />
                      <div className="menugrocery-product-text">
                          <p>Sem qwase eiusmod</p>
                          <p>650,000</p>
                      </div>
                </div>
              </li>
              <li className="menugrocery-color">
              <div className="menugrocery-product radius-img">
                      <img src={ch1} />
                      <div className="menugrocery-product-text">
                          <p>Sem qwase eiusmod</p>
                          <p>650,000</p>
                      </div>
                </div>
              </li>
              <li>
              <div className="menugrocery-product radius-img">
                      <img src={ch1} />
                      <div className="menugrocery-product-text">
                          <p>Sem qwase eiusmod</p>
                          <p>650,000</p>
                      </div>
                </div>
              </li>
             
           
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MenuNews;
