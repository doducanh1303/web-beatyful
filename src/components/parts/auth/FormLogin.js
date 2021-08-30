import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { doLogin } from "redux/user/action";

function FormLogin(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    props.setVisible(false);
    dispatch(doLogin(values));
  };

  return (
    <div>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <div className="form-group">
          <label>Tên tài khoản hoặc địa chỉ email *</label>
          <div className="input-group">
            <Form.Item
              name="email"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập tài khoản!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <label>Mật khẩu *</label>
          <div className="input-group">
            <Form.Item
              name="password"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập mật khẩu!" }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        </div>
        {/* <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                /> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormLogin;
