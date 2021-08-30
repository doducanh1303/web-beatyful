import { Col, Row } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import categori from "assets/images/categori.jpg";
import categori1 from "assets/images/categori1.jpg";
import categori2 from "assets/images/categori2.jpg";
import categori3 from "assets/images/categori3.jpg";

import "../categori/Categori.css";

function Categori() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="categori">
      <div className="wraper">
        <Row>
          <Col xl={12} lg={12} xs={24} md={24} sm={24}>
            <div className="img-categori">
              <div
                className="img-categori-top "
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <img src={categori} alt="description of image"  />

                <img src={categori1} alt="description of image" />
              </div>

              <div
                className="img-categori-bottom img-hover-zoom img-hover-zoom--brightness"
                data-aos-duration="3000"
                data-aos="fade-right"
              >
                <Link to="/vanibeauty/categoridetail">
                  <img src={categori3} alt="description of image" />
                </Link>
              </div>
            </div>
          </Col>

          <Col xl={11} lg={12} xs={24} sm={24} md={24}>
            <div
              className="img-categori-left img-hover-zoom img-hover-zoom--brightness"
              data-aos-duration="3000"
              data-aos="fade-left"
            >
              <img src={categori2} alt="description of image" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Categori;
