import React from "react";
import { Button, Col, Input, Layout, List, Rate, Row, Tabs } from "antd";
import AppHeader from "../../components/parts/header/AppHeader";
import Footer from "../../components/parts/footer/Footer";

import img2 from '../../assets/images/image2.png'
import img3 from '../../assets/images/image3.png'
import img4 from '../../assets/images/image4.png'
import img5 from '../../assets/images/image5.png'
import img6 from '../../assets/images/5.jpg'
import '../categori/CategoriDetail.css';
import AppBreadCrumb from '../../components/parts/breadcrumb/AppBreadCrumb'

const { Content } = Layout;
function CategoriDetail() {
  return (
    <Layout className="container">
      <AppHeader />
      <AppBreadCrumb/>
      <Content>
     <div className="categori-detail">
       <div className="wraper">
            <Row gutter={[20]}>
              <Col xl={6} sm={8} xs={24}>
              <div className="categori-content-left">
                   <div className="categori-content-top">
                        <img src={img2}/>
                         <h3>New Feature</h3>
                         <p>
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                         </p>
                   </div>
                   <div className="categori-content-bottom">
                   <img src={img3}/>
                         <h3>New Feature</h3>
                         <p>
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                         </p>
                   </div>
              </div>
              </Col>
              <Col  xl={12} sm={8} xs={24}>
          <div className="categori-content-center">
          <img src={img6}/>
          </div>
              </Col>
              <Col  xl={6} sm={8} xs={24}>
              <div className="categori-content-right">
                   <div className="categori-content-top">
                        <img src={img3}/>
                         <h3>New Feature</h3>
                         <p>
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                         </p>
                   </div>
                   <div className="categori-content-bottom">
                   <img src={img4}/>
                         <h3>New Feature</h3>
                         <p>
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                         </p>
                   </div>
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

export default CategoriDetail;
