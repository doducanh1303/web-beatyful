import React from 'react';
import Slider from "react-slick";
import "../footer/FooterSlider.css";
import logo1 from 'assets/images/logo1.jpg';
import logo2 from 'assets/images/logo2.jpg';
import logo3 from 'assets/images/logo3.jpg';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    arrow: false,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
function FooterSlider() {
    return (
<div className="footer-content">
<Slider {...settings}>
          <div>
         <img src={logo1}/>
          </div>
          <div>
          <img src={logo2}/>
          </div>
          <div>
          <img src={logo3}/>
          </div>
          <div>
          <img src={logo1}/>
          </div>
          <div>
          <img src={logo2}/>
          </div>
          <div>
          <img src={logo3}/>
          </div>
          <div>
          <img src={logo3}/>
          </div>
          <div>
          <img src={logo1}/>
          </div>
          <div>
          <img src={logo2}/>
          </div>
          <div>
          <img src={logo3}/>
          </div>
        </Slider>
</div>
    )
}

export default FooterSlider
