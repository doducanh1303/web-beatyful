import { Col, Row, Tabs } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import { get } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sp2 from "../../../assets/images/sp2.jpg";
import sp3 from "../../../assets/images/sp3.jpg";
import sp4 from "../../../assets/images/sp4.jpg";
import sp5 from "../../../assets/images/sp5.jpg";
import sp6 from "../../../assets/images/sp6.jpg";
import sp7 from "../../../assets/images/sp7.jpg";
import sp8 from "../../../assets/images/sp8.jpg";
import { fetchProducts } from "../../../redux/product/action";
import "../product/ProductList.css";
const { TabPane } = Tabs;
function ProductList() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const contentproduct = get(product, "item.result.data", []);

  useEffect(() => {
    Aos.init();
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="productlist">
      <div className="wraper2">
        <Row>
          <Col>
            <div className="product-text">
              <h3 className="text-title">Beauty Mona</h3>
              <h1 className="a">SẢN PHẨM NỔI BẬT</h1>
            </div>

            <div
              className="tab-product"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="SKINCARE" key="1">
                  <div className="tab-content">
                    {contentproduct.map((item, index) => {
                      return (
                        <div className="tab-content-small " key={index}>
                          <Link
                            to={
                              "vanibeauty/productlist/product-detail/" +
                              item._id
                            }
                          >
                            <div className="img-hover-zoom">
                              <img src={item.image} />
                            </div>
                          </Link>
                          <h3 className="product-title">{item.productname}</h3>
                          <p className="product-price">{item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane tab="LIPSTICK" key="2">
                  <div className="tab-content">
                    <div className="tab-content-small ">
                      <Link to="/productlist/product-detail">
                        <img src={sp5} />
                      </Link>
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>

                    <div className="tab-content-small ">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp3} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp4} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp5} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp6} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp7} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small ">
                      <img src={sp8} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="VANI BEAUTY" key="4">
                  <div className="tab-content">
                    <div className="tab-content-small img-hover-zoom">
                      <Link to="/productlist/product-detail">
                        <img src={sp5} />
                      </Link>
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>

                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp2} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp3} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp4} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp5} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp6} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp7} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                    <div className="tab-content-small img-hover-zoom">
                      <img src={sp8} />
                      <h3 className="product-title">
                        Sem qwase eiusmod default
                      </h3>
                      <p className="product-price">250,000 $</p>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductList;
