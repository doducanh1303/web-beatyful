import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import AppHeader from "../../components/parts/header/AppHeader";
import Categori from "../../components/parts/categori/Categori";
import BigSlider from "../../components/parts/slider/BigSlider";
import ProductList from "../../components/parts/product/ProductList";
import Sales from "../../components/parts/sales/Sales";
import Selling from "../../components/parts/sell/Selling";
import FeedBack from "../../components/parts/comments/FeedBack";
import Ship from "../../components/parts/ship/Ship";
import ProductSlider from "../../components/parts/slider/ProductSlider";
import Footer from "../../components/parts/footer/Footer";

const { Header, Content } = Layout;
function Home() {
  return (
    <div className="container">
      <AppHeader />
      <Content>
        <BigSlider />
        <Categori />
        <ProductList />
        <Sales />
        <Selling />
        <FeedBack />
        <Ship />
        <ProductSlider />

      </Content>
      <Footer />
    </div>
  );
}

export default Home;
