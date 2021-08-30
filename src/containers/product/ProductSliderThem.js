import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/images/2-1.jpg";
import slider2 from "../../assets/images/2-3.jpg";
import slider3 from "../../assets/images/2-4.jpg";
import slider4 from "../../assets/images/2-5.jpg";
import "../product/ProductDetail.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function ProductSliderThem(props) {
  console.log(props);
  
  return (
    <div className="productthem">
      <div className="wraper">
      <h3 className="staus">SẢN PHẨM TƯƠNG TỰ</h3>
        <Slider {...settings}>
      
          <div>
            <div className="productthem-content">
              <img src={slider2} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
          <div>
          <div className="productthem-content">
              <img src={slider3} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
          <div>
          <div className="productthem-content">
              <img src={slider4} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
          <div>
          <div className="productthem-content">
              <img src={slider2} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
          <div>
          <div className="productthem-content">
              <img src={slider1} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
          <div>
          <div className="productthem-content">
              <img src={slider2} />
              <h3 className="productthem-title">Sem qwase eiusmod default</h3>
              <p className="productthem-price">20.000</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ProductSliderThem;
