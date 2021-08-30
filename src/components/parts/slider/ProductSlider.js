import React, { useEffect } from "react";
import Slider from "react-slick";
import slider1 from "../../../assets/images/2-1.jpg";
import slider2 from "../../../assets/images/2-3.jpg";
import slider3 from "../../../assets/images/2-4.jpg";
import slider4 from "../../../assets/images/2-5.jpg";
import "../slider/ProductSlider.css";
import Aos from "aos";
import "aos/dist/aos.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrow: true,
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
function ProductSlider() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="productslider">
      <div className="wraper">
        <div
          className="productslider-content"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="sale-text">Beauty Mona</p>
          <h1 className="ab">TIN TỨC</h1>
          <Slider {...settings} >
            <div>
              <div className="slider-content-product">
                <img src={slider1} />
                <h3>Lorem Ipsum là văn bản giả</h3>
                <p className="date">8 Tháng Ba, 2018</p>
                <div className="is-divider"></div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra ...
                </p>
              </div>
            </div>
            <div>
              <div className="slider-content-product">
                <img src={slider2} />
                <h3>Lorem Ipsum là văn bản giả</h3>
                <p className="date">8 Tháng Ba, 2018</p>
                <div className="is-divider"></div>
                <p  className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra ...
                </p>
              </div>
            </div>
            <div>
              <div className="slider-content-product">
                <img src={slider3} />
                <h3>Lorem Ipsum là văn bản giả</h3>
                <p className="date">8 Tháng Ba, 2018</p>
                <div className="is-divider"></div>
                <p  className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra ...
                </p>
              </div>
            </div>
            <div>
              <div className="slider-content-product">
                <img src={slider4} />
                <h3>Lorem Ipsum là văn bản giả</h3>
                <p className="date">8 Tháng Ba, 2018</p>
                <div className="is-divider"></div>
                <p  className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra ...
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
