import { Col, Row } from "antd";
import { get } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "redux/product/action";
import IconSlider from "../grocery/IconSlider";
import "../grocery/MenuGrocery.css";

function MenuGrocery(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const contentproduct = get(product, "item.result.data", []);

  const handleCategory = (category) => {
    console.log("id.......", category._id);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="menugrocery">
      <Row gutter={[0, 30]}>
        <Col xl="24">
          <div className="menugrocery-content">
            <h3>DANH MỤC SẢN PHẨM</h3>
            <ul>
              {contentproduct.map((category) => {
                return (
                  <li onClick={() => handleCategory(category)}>
                    {category?.productname}
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xl="24">
          <div className="menugrocery-content">
            <h3>LỌC THEO GIÁ</h3>
            <IconSlider min={150000} max={300000} />
          </div>
        </Col>
        <Col xl="24">
          <div className="menugrocery-content">
            <h3>SẢN PHẨM</h3>
            <ul>
              {/* {item &&
                item.map((item, index) => {
                  return (
                    <li className="menugrocery-color" key={index}>
                      <Link
                        to={
                          "/vanibeauty/productlist/product-detail/" + item._id
                        }
                      >
                        <div className="menugrocery-product">
                          <img src={item.image} />
                          <div className="menugrocery-product-text">
                            <p>{item.productname}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })} */}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MenuGrocery;
