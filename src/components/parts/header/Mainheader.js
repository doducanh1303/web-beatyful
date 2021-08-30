import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  NavLink,
} from "react-router-dom";
import { Col, Row, Table, Layout, Popover } from "antd";
const content = (
  <div className="store">
    <ul>
      <li>Cửa hàng</li>
      <li>Cửa hàng</li>
      <li>Cửa hàng</li>
      <li>Cửa hàng</li>
      <li>Cửa hàng</li>
    </ul>
  </div>
);
function Mainheader() {
  let location = useLocation();

  return (
    <div>
      <div className="mainheader">
        <div className="wraper">
          <div className="menu-mainheader">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  <h3>TRANG CHỦ</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="active">
                  <h3>GIỚI THIỆU</h3>
                </NavLink>
              </li>
              <li>
                <Popover content={content} className="popver-menu" style={{width:200}}>
                  <NavLink to="/vanibeauty/grocery" activeClassName="active">
                    <h3>CỬA HÀNG</h3>
                  </NavLink>
                </Popover>
              </li>
              <li>
                <NavLink to="/vanibeauty/news" activeClassName="active">
                  <h3>TIN TỨC</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/vanibeauty/contact" activeClassName="active">
                <h3>LIÊN HỆ</h3>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainheader;
