import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Layout, Row, Form, Button, Input } from "antd";
import AppHeader from "../header/AppHeader";
import AppBreadCrumb from "../breadcrumb/AppBreadCrumb";
import {useDispatch,useSelector} from "react-redux";
import "./forgost.css";
import Footer from "../footer/Footer";
import {doForgotPassword} from "../../../redux/user/action";


const { Content } = Layout;
function ForgotPassword(props) {
  const dispath=useDispatch();


  const onFinish = (values) => {
    dispath(doForgotPassword(values))
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="container">
      <AppHeader />
      <AppBreadCrumb />
      <Content>
        <div className="categori-detail">
          <div className="wraper">
            <Row>
              <Col lg={24}>
                <div className="text-forgot">
                  <p>
                    Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ
                    email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua
                    email.
                  </p>
                  <h3>Tên đăng nhập hoặc email</h3>
                </div>
              </Col>
              <Col lg={24}>
                <div className="form-label-group">
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="mail"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input size={"large"} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default ForgotPassword;
