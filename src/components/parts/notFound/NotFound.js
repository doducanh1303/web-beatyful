import React from "react";
import { Result, Button, Row, Col } from "antd";
import AppHeader from "../header/AppHeader";
import { Content } from "antd/lib/layout/layout";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <AppHeader />

      <Content>
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button type="primary">
              <Link to="/">Home</Link>
            </Button>
          }
        />
        ,
      </Content>
      <Footer />
    </div>
  );
}
