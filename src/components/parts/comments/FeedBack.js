import { Col, Row } from "antd";
import React from "react";
import team from "assets/images/team.jpg";
import "../comments/FeedBack.css";
function FeedBack() {
  return (
    <div className="feebdack">
      <div className="wraper">
        <Row>
          <div className="feedback-content">
            <p className="sale-text">Beauty Mona</p>
            <h1 className="ab">TIN TỨC</h1>

            <div className="feedback-content-user">
              <ul>
                <Col xl={7} lg={7} sm={7} xs={24}>
                  <li>
                    <img src={team} />
                    <p className="feedback-text">
                      Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được
                      dùng vào việc trình bày và dàn trang phục vụ cho in ấn
                    </p>
                    <span>
                      <strong>Mark Jance</strong>
                      {"/"}
                      <span>Facebook</span>
                    </span>
                  </li>
                </Col>
                <Col xl={7} lg={7} sm={7} xs={24}>
                  <li>
                    <img src={team} />
                    <p className="feedback-text">
                      Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được
                      dùng vào việc trình bày và dàn trang phục vụ cho in ấn
                    </p>
                    <span>
                      <strong>Mark Jance</strong>
                      {"/"}
                      <span>Facebook</span>
                    </span>
                  </li>
                </Col>
                <Col xl={7} lg={7} sm={7} xs={24}>
                  <li>
                    <img src={team} />
                    <p className="feedback-text">
                      Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được
                      dùng vào việc trình bày và dàn trang phục vụ cho in ấn
                    </p>
                    <span>
                      <strong>Mark Jance</strong>
                      {"/"}
                      <span>Facebook</span>
                    </span>
                  </li>
                </Col>
              </ul>
            </div>
          </div>
        </Row>
      </div>  
    </div>
  );
}

export default FeedBack;
