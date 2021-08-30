import React from "react";
import {
  Button,
  Col,
  Input,
  Layout,
  List,
  Rate,
  Row,
  Tabs,
  Form,
  InputNumber,
  Checkbox,
} from "antd";
import "../contact/Contact.css";
import AppHeader from "../../components/parts/header/AppHeader";
import Footer from "../../components/parts/footer/Footer";
import AppBreadCrumb from "../../components/parts/breadcrumb/AppBreadCrumb";
import map from "../../assets/images/map.png";
import logomona from "assets/images/logo-mona.png";
const { Content } = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const { TextArea } = Input;
function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <AppHeader />
      <AppBreadCrumb />
      <Content>
        <div className="wraper">
          <Row>
            <Col xl={12} sm={12}>
             <div className="img-contact">
             <img src={map} className="img-map" />
             </div>
            </Col>
            <Col xl={12} xs={24} sm={12} >
              <div className="contact">
                <div className="logo-mona">
                  <img src={logomona} />
                </div>

                <div className="contact-text">
                  <ul>
                    <li>
                      <span>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <span>
                        319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <span>012345678</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <span>demonhunterg@gmail.com mon@mona.media</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <span>demonhunterp</span>
                    </li>
                  </ul>
                </div>

                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      name="year"
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                    >
                      <Input size="large" placeholder="Họ vả tên"  />
                    </Form.Item>
                    <Form.Item
                      name="month"
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input size="large" placeholder="Email" />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item  style={{ marginBottom: 0 }}>
                    <Form.Item
                      name="year"
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                    >
                      <Input size="large" placeholder="Số điện thoại" />
                    </Form.Item>
                    <Form.Item
                      name="month"
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input size="large" placeholder="Địa chỉ" />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                  <TextArea showCount maxLength={100} placeholder="Lời nhắn" />
                  </Form.Item>
                  <Form.Item>
           <div className="btn-send-mess">
           <Button className="primary">
              Gửi đi
            </Button>
           </div>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default Contact;
