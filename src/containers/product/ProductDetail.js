import {
  Button,
  Col,
  Input,
  InputNumber,
  Layout,
  Rate,
  Row,
  Tabs,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";
import img10 from "../../assets/images/10.jpg";
import img11 from "../../assets/images/11.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";
import Footer from "../../components/parts/footer/Footer";
import AppHeader from "../../components/parts/header/AppHeader";
import ProductDetailSlide from "../../components/parts/slider/ProductDetailSlide";
import "../product/ProductDetail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductSliderThem from "./ProductSliderThem";
import { get } from "lodash";
import { fetchProduct } from "../../redux/product/action";
import { addtocart } from "redux/cart/reducer";

const { Content } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;

function ProductDetail(props) {
  const openNotification = () => {
    notification.open({
      description: "Mua hàng thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const contentproduct = get(product, "list.result.data", {});
  const item = get(contentproduct, "imageslide", []);
  const [quantity, setQuantity] = useState(1);

  console.log(item);

  function onChange(value) {
    console.log("changed", value);
    //   dispatch(update({product:contentproduct,quantity:value}));
    // setQuantity({quantity:value});
  }
  console.log("product..........", product);
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    dispatch(fetchProduct({ id: params.id }));
  }, []);
  const addToCart = (product) => {
    dispatch(addtocart(product));
  };

  return (
    <div>
      <AppHeader />

      <Content>
        <div className="product-detail">
          <div className="wraper">
            <Row gutter={[20]}>
              <Col xl={12}>
                <ProductDetailSlide item={item} />
              </Col>
              <Col xl={12}>
                <div className="productdetail-content">
                  <h3 className="productdetail-name">
                    {contentproduct.productname}
                  </h3>
                  <div className="is-divider"></div>
                  <h3 className="product-price">{contentproduct.price}</h3>
                  <p className="product-content">
                    <strong> Lorem Ipsum </strong>chỉ đơn giản là một đoạn văn
                    bản giả, được dùng vào việc trình bày và dàn trang phục vụ
                    cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn
                    cho ngành công nghiệp in ấn
                  </p>

                  <div className="btn-addtocart">
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={onChange}
                      size="small"
                    />

                    <Button
                      type="primary"
                      size="small"
                      className="addtocart"
                      onClick={() => addToCart(contentproduct)}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </Button>
                  </div>
                  <div className="free-auto">
                    <h3>Tính phí ship tự động</h3>
                    <ul>
                      <li>
                        {" "}
                        <img src={img6} />
                      </li>
                      <li>
                        <img src={img7} />
                      </li>
                      <li>
                        <img src={img8} />
                      </li>
                      <li>
                        {" "}
                        <img src={img9} />
                      </li>
                      <li>
                        {" "}
                        <img src={img10} />
                      </li>
                      <li>
                        {" "}
                        <img src={img11} />
                      </li>
                    </ul>
                  </div>
                  <p className="productdetail-description">
                    "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập
                    thụ động, kiếm tiền online"
                  </p>
                  <Button type="button" className="Affilicate">
                    Đăng ký Affilicate
                  </Button>
                </div>
              </Col>
            </Row>
            <hr className="hr-detail"></hr>
            <Row>
              <Col xl={24}>
                <div className="productdetail-tabs">
                  <Tabs onChange={callback} type="card" size="large">
                    <TabPane tab="Mô tả" key="1" className="tabs1">
                      <h3 className="tabs-title">Lorem Ipsum là gì?</h3>
                      <p className="tabs-content">
                        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được
                        dùng vào việc trình bày và dàn trang phục vụ cho in ấn.
                        Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho
                        ngành công nghiệp in ấn từ những năm 1500, khi một họa
                        sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
                        một bản mẫu văn bản. Đoạn văn bản này không những đã tồn
                        tại năm thế kỉ, mà khi được áp dụng vào tin học văn
                        phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã
                        được phổ biến trong những năm 1960 nhờ việc bán những
                        bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây
                        hơn, được sử dụng trong các ứng dụng dàn trang, như
                        Aldus PageMaker.
                      </p>
                      <h3 className="tabs-title">Tại sao lại sử dụng nó?</h3>
                      <p className="tabs-content">
                        Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ
                        đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
                        vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn
                        so với đoạn văn bản chỉ gồm nội dung kiểu “Nội dung, nội
                        dung, nội dung” là nó khiến văn bản giống thật hơn, bình
                        thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn
                        trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản
                        giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng
                        thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong
                        quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất
                        hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm
                        vào những câu hài hước hay thông tục).
                      </p>
                      <h3 className="tabs-title">Nó đến từ đâu?</h3>
                      <p className="tabs-content">
                        Trái với quan điểm chung của số đông, Lorem Ipsum không
                        phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm
                        thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh
                        cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là
                        nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường
                        Hampden-Sydney College (bang Virginia – Mỹ) quan tâm tới
                        một trong những từ la-tinh khó hiểu nhất, “consectetur”,
                        trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất
                        cả các ứng dụng của từ này trong văn học cổ điển, để từ
                        đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum.
                        Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và
                        1.10.33 của “De Finibus Bonorum et Malorum” (Đỉnh tối
                        thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm
                        45 trước Công Nguyên. Cuốn sách này là một luận thuyết
                        đạo lí rất phổ biến trong thời kì Phục Hưng.
                      </p>
                    </TabPane>
                    <TabPane tab="Đánh giá(0)" key="2" className="tabs2">
                      <h3 className="tabs-content-title">Đánh giá</h3>
                      <p className="tabs-content-comment">
                        Chưa có đánh giá nào
                      </p>

                      <div className="tabs-content-user">
                        <h3 className="tabs-content-user-firt">
                          Hãy là người đầu tiên nhận xét “Armani black suit”{" "}
                        </h3>
                        <p className="tabs-content-user-firt-your">
                          Đánh giá của bạn
                        </p>

                        <Rate allowHalf defaultValue={2.5} />

                        <p>Nhận xét của bạn *</p>
                        <TextArea
                          showCount
                          maxLength={100}
                          onChange={onChange}
                          size="large"
                        />
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
            <hr className="comment"></hr>

            <ProductSliderThem />
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default ProductDetail;
