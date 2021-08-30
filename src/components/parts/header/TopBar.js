import {
  Button,
  Drawer,
  Empty,
  Form,
  Input,
  Modal,
  notification,
  Popover,
} from "antd";
import "antd/dist/antd.css";
import logo from "assets/images/logo-light.png";
import "assets/styles/Style.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchSearch } from "redux/product/action";
import { logout } from "redux/user/reducer";

import FormLogin from "../auth/FormLogin";
import FormRegister from "../auth/FormRegister";
import TopBarCart from "../cart/TopBarCart";
import "../header/AppHeader.css";
import NavMobie from "../header/NavMobie";
function TopBar() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isvisible, setIsVisible] = useState(false);
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onModalVisible, setOnModalVisible] = useState(false);
  const [text, setText] = useState("");

  const cart = localStorage.getItem("cart");
  let history = useHistory();
  const userInfo = localStorage.getItem("userInfo");
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(userInfo);

  const content1 = (
    <div>
      <ul>
        <li>Thông tin cá nhân</li>

        <a onClick={() => dispatch(logout())}>Đăng xuất</a>
      </ul>
    </div>
  );

  const content = <div>{cart ? <TopBarCart /> : <Empty />}</div>;

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setOnModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setText({ text: e.target.value });
  };

  const onSearch = () => {
    dispatch(fetchSearch(text));
  };

  return (
    <div className="app-content">
      <div className="wrapper">
        <div className="menu-left">
          {token && user ? (
            <div>
              <Popover content={content1}>
                <div className="user">
                  <img src={user.avatar} />

                  <h3>{user.username}</h3>
                </div>
              </Popover>
            </div>
          ) : (
            <div className="btn-auth">
              <Button
                type="text"
                className="btn-login"
                onClick={() => setIsVisible(true)}
              >
                Đăng Nhập
              </Button>
              {"/"}
              <Button
                type="text"
                className="btn-sign-up"
                onClick={() => setRegister(true)}
              >
                Đăng Ký
              </Button>
            </div>
          )}

          <i
            className="fa fa-bars navbar-mobie"
            aria-hidden="true"
            onClick={showDrawer}
          ></i>

          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <NavMobie />
          </Drawer>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className="modal-seach"
          >
            <div className="seach-modal">
              <Form
                name="q"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="q"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Tìm kiếm ......."
                    className="input-seach"
                    onChange={onChange}
                  />
                  <i
                    className="fa fa-search"
                    aria-hidden="true"
                    onClick={onSearch}
                  ></i>
                </Form.Item>
              </Form>
            </div>
          </Modal>
          {/* formLogin */}
          <Modal
            centered
            visible={isvisible}
            width={900}
            onOk={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            className="modal-login"
          >
            <div className="form-login">
              <h3>ĐĂNG NHẬP</h3>

              <FormLogin setVisible={(isvisible) => setIsVisible(isvisible)} />
              <Button type="text" className="forgost-password">
                <Link to="/forgotpassword">Quên mật khẩu ?</Link>
              </Button>
            </div>
          </Modal>

          {/* formRegister */}

          <Modal
            centered
            visible={register}
            onOk={() => setRegister(false)}
            onCancel={() => setRegister(false)}
            width={900}
            className="modal-login-one"
            setVisible={false}
          >
            <div className="form-login">
              <h3>ĐĂNG KY</h3>

              <FormRegister />
              <Button type="text" className="forgost-password">
                Quên mật khẩu ?
              </Button>
            </div>
          </Modal>
        </div>

        <div className="menu-center">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div className="menu-right">
          <i
            className="fa fa-search"
            onClick={showModal}
            aria-hidden="true"
          ></i>

          <Popover content={content} overlayStyle={{ width: 30 }}>
            <Link to="/vanibeauty/cart">
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            </Link>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
