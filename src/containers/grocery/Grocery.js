import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Input,
  Layout,
  List,
  Rate,
  Row,
  Tabs,
  Select,
  Drawer,
} from "antd";
import AppHeader from "../../components/parts/header/AppHeader";
import Footer from "../../components/parts/footer/Footer";
import ContentBreadCrumb from "../../components/parts/breadcrumb/ContentBreadCrumb";
import MenuGrocery from "../../containers/grocery/MenuGrocery";
import ProductGrocery from "../../containers/grocery/ProductGrocery";
import "../grocery/Grocery.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "redux/product/action";
import { get } from "lodash";
import { useRouteMatch } from "react-router";
const { Content } = Layout;
const { Option } = Select;

function Grocery() {
  const [visible, setVisible] = useState(false);
  const match = useRouteMatch();
  console.log("match........", match);

  const dispath = useDispatch();

  // const product = useSelector((state) => state.product);
  // const list = get(product, "item.result.data", []);

  // const [categoies, setCategoies] = useState([]);

  // setCategoies(
  //   list.map((item) => ({
  //     id: item._id,
  //     name: item.name,
  //   }))
  // );

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    dispath(fetchProducts());
  }, []);
  return (
    <Layout className="container">
      <AppHeader />
      <Content>
        <div className="wraper">
          <div className="appbreadcrum">
            <Row>
              <Col xl={12} xs={24}>
                <ContentBreadCrumb />
              </Col>
              <Col xl={0} xs={24}>
                <div className="fillter-mobie">
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    onClick={showDrawer}
                  ></i>
                  <span>Lọc</span>

                  <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    width="300"
                  >
                    <MenuGrocery />
                  </Drawer>
                </div>
              </Col>
              <Col xl={12} xs={24}>
                <div className="select-grocery">
                  <p>Hiển thị một kết quả duy nhất</p>
                  <Select
                    defaultValue="Thư tự mặc định"
                    style={{ width: 250, margin: "auto" }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Thứ tự theo mức độ phổ biến</Option>
                    <Option value="lucy">Thứ tự theo điểm đánh giá</Option>

                    <Option value="Yiminghe">Mới nhất</Option>
                    <Option value="Yiminghe1">
                      Thứ tự theo giá: thấp đến cao
                    </Option>
                    <Option value="Yiminghe2">
                      Thứ tự theo giá :cao xuống thấp
                    </Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </div>

          <div className="grocery-page">
            <Row>
              <Col xl={6} lg={8} md={8} xs={0}>
                <MenuGrocery />
              </Col>
              <Col xl={18} lg={16} md={16}>
                <ProductGrocery />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default Grocery;
