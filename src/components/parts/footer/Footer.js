import { Col, Form, Input, Row } from "antd";
import React from "react";
import "../footer/Footer.css";
import FooterSlider from "../footer/FooterSlider";
function Footer() {
  return (
    <div className="footer">
      <div className="wraper">
        <div className="top-footer">
          <FooterSlider />
        </div>
        <hr className="border-footer" />
        <div className="main-footer">
          <Row>
            <Col xl={8} sm={12}>
              <h3>LIÊN HỆ</h3>
              <div className="contact">
                <ul>
                  <li>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span>
                      319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span>012345678</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span>12345551@gmail.com</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={8} sm={12}>
              <h3>MẠNG XÃ HỘI</h3>
              <div className="network">
                <ul>
                  <li>
                    <span>
                      Đăng ký để nhận được được thông tin ưu đãi mới nhất từ
                      chúng tôi.
                    </span>
                  </li>
                  <li>
                    <div className="icon-footer">
                      <ul>
                        <li>
                          {" "}
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={8} sm={12}>
              <h3>ĐĂNG KÝ</h3>
              <div className="form-register">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className="input-form" />
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6} sm={6} xs={12}>
              <h3>MENU</h3>
              <div className="navarbar">
                <ul>
                  <li>Trang chủ</li>
                  <li>Gioi thiệu</li>
                  <li>Cửa hàng</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </Col>
            <Col xl={6} sm={6} xs={12}>
              <h3>MENU</h3>
              <div className="navarbar">
                <ul>
                  <li>Trang chủ</li>
                  <li>Gioi thiệu</li>
                  <li>Cửa hàng</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </Col>
            <Col xl={6} sm={6} xs={12}>
              <h3>MENU</h3>
              <div className="navarbar">
                <ul>
                  <li>Trang chủ</li>
                  <li>Gioi thiệu</li>
                  <li>Cửa hàng</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </Col>
            <Col xl={6} sm={6} xs={12}>
              <h3>MENU</h3>
              <div className="navarbar">
                <ul>
                  <li>Trang chủ</li>
                  <li>Gioi thiệu</li>
                  <li>Cửa hàng</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
