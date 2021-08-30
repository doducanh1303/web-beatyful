import { Button, Col, Row } from "antd";
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import "../sales/Sales.css";
import Timer from "../sales/Timer";

function Sales() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="sales" >
      <div className="wraper1">
        <Row>
          <Col xl={24}>
            <div className="sales-content" data-aos="fade-up" data-aos-duration="2000" >
            <h1 className="a">GIẢM GIÁ 50%</h1>
            <p className="sale-text">
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn
            </p>

            <div className="sale-times">
              <Timer/>
            </div>

            <Button type="primary" className="btn-shopping">MUA NGAY</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sales;
