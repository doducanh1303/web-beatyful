import { Col, Row, Tabs } from "antd";
import React from "react";
import sp from "../../../assets/images/1.jpg";
import sp2 from "../../../assets/images/sp2.jpg";
import "../sell/Selling.css";
const { TabPane } = Tabs;
function Selling() {
  return (
    <div className="sell">
      <div className="wraper">
        <div className="tabs-sell">
          <Tabs defaultActiveKey="1">
            <TabPane tab="BÁN CHẠY" key="1">
              <Row gutter={[20]}>
                <Col xl={8} lg={7} md={9}>
                  <div className="images-left-sell">
                    <img src={sp} />
                    <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                  </div>
                </Col>
                <Col xl={15} lg={17} md={15}>
                  <div className="images-right-sell">
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small-sell">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                   
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="GIÁ TỐT" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="NỔI BẬT" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Selling;
