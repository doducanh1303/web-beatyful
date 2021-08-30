import React from 'react'
import { Breadcrumb } from 'antd';
import "../breadcrumb/AppBreadCrumb.css"
function ContentBreadCrumb() {
    return (
    <Breadcrumb>
    <Breadcrumb.Item className="text-breadcrumb">Trang chủ</Breadcrumb.Item>
    <Breadcrumb.Item className="text-breadcrumb">
      <a href="">Cửa hàng </a>
    </Breadcrumb.Item>
  
  </Breadcrumb>
    )
}

export default ContentBreadCrumb
