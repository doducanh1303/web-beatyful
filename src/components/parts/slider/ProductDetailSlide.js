import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../parts/slider/ProductDetailSlide.css";
import { useSelector } from "react-redux";
import { get } from "lodash";

function ProductDetailSlide(props) {
  const { item } = props;

  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <div className="img-big">
    //       <img src={item[i]} className="img-big-style" />
    //     </div>
    //   );
    // },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {item.map((product, index) => {
          return (
            <div>
              <img src={product} key={index} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductDetailSlide;
