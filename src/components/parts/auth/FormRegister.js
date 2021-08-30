import React, { useState } from "react";
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
  Checkbox,
  DatePicker,
  Space,
} from "antd";
import { useDispatch } from "react-redux";
import { doRegiter } from "redux/user/action";

function FormRegister() {
  const onChange = (value) => {
    console.log(value);
  };
  const onFinish = (values) => {
    dispatch(doRegiter(values));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <Form
        name="Dang ky"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="form-group">
          <label>Tên * </label>
          <div className="input-group">
            <Form.Item
              name="name"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập ten!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <div className="input-group">
            <Form.Item
              name="email"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập email!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <label>Mật Khẩu *</label>
          <div className="input-group">
            <Form.Item
              name="password"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập mat khau!" }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        </div>

        <div className="form-group">
          <label>address</label>
          <div className="input-group">
            <Form.Item
              name="address"
              className="form-group-item"
              rules={[{ required: true, message: "Bạn chưa nhập dia chi!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <label>Nhập Ngay Sinh *</label>
          <div className="input-group">
            <Form.Item name="date" className="form-group-item">
              <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
              ,
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <Form.Item name="password" className="form-group-item">
              <Checkbox onChange={onChange}>
                Đồng ý với điều khoản của beatyFull white
              </Checkbox>
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

export default FormRegister;
