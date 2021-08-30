import React,{useEffect} from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Button, Tabs } from "antd";
import ship from "../../../assets/images/ship.png";
import ship2 from "../../../assets/images/ship2.png";
import ship3 from "../../../assets/images/ship3.png";
import ship4 from "../../../assets/images/ship4.png";
import '../ship/Ship.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Ship() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="ship">
      <Row>
        <Col xl={6} sm={12} xs={24}>
          <div className="ship-small ship-color" data-aos="fade-up" data-aos-duration="4000">
            <img src={ship} />
          <div className="ship-text">
            <p>GIAO HÀNG MIỄN PHÍ</p>
            <p>Cho đơn hàng từ 300k</p>
          </div>
          </div>
        </Col>
        <Col xl={6} sm={12} xs={24} data-aos="fade-up" data-aos-duration="1000">
          <div className="ship-small">
            <img src={ship2} />
            <div className="ship-text">
            <p>GIAO HÀNG MIỄN PHÍ</p>
            <p>Cho đơn hàng từ 300k</p>
          </div>
          </div>
        </Col>
        <Col xl={6} sm={12} xs={24}data-aos="fade-up" data-aos-duration="2000">
          <div className="ship-small ship-color">
            <img src={ship3} />
            <div className="ship-text">
            <p>GIAO HÀNG MIỄN PHÍ</p>
            <p>Cho đơn hàng từ 300k</p>
          </div>
          </div>
        </Col>
        <Col xl={6} sm={12} xs={24} data-aos="fade-up" data-aos-duration="3000">
          <div className="ship-small">
            <img src={ship4} />
            <div className="ship-text">
            <p>GIAO HÀNG MIỄN PHÍ</p>
            <p>Cho đơn hàng từ 300k</p>
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Ship;
