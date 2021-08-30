import React from 'react';
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './AppBreadCrumb.css'
const { Header, Content, Footer } = Layout;

// import internal libs

function AppBreadCrumb() {
  return (
    <div className="app-breadcrumb">
      <div className="wraper">
        <Breadcrumb>
             <h3>GIỚI THIỆU</h3>
          <Breadcrumb.Item href="">
            <span>TRANG CHỦ</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>GIỚI THIỆU</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default AppBreadCrumb;
