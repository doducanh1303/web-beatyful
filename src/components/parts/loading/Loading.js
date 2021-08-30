import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import loadingImg from '../../../assets/images/loading.gif';
import '../loading/Loading.css';

// import internal libs

function Loading() {
  return (
    <div className="loading-global">
      <div className="loading">
        <img src={loadingImg} alt="loading" />
      </div>
    </div>
  );
}

export default Loading;
