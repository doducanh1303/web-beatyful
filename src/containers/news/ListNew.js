import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
} from "antd";
import AppHeader from "../../components/parts/header/AppHeader";
import Footer from "../../components/parts/footer/Footer";
import MenuNews from "../news/MenuNews";
import ProductNew from "../news/ProductNews";
import { useSelector, useDispatch } from "react-redux";
import {get} from "lodash"
import "../news/ListNew.css";
import { fetchNews } from "../../redux/news/action";
const { Content } = Layout;
function ListNew() {
  const news = useSelector((state) => state.news);
  const newcontent=get(news,"item.result.data",[])
  const dispatch = useDispatch();
  console.log(newcontent);
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <Layout className="container">
      <AppHeader />
      <Content>
        <div className="wraper">
          <h3 className="news">Tin tức</h3>
          <Row>
            <Col xl={6}>
              <MenuNews />
            </Col>
            <Col xl={18}>
              <ProductNew newcontent={newcontent} />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default ListNew;
