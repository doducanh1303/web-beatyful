import React,{ useEffect} from 'react'
import { Layout, Menu, Breadcrumb, Row, Carousel,Button } from 'antd';
import bannerA from '../../../assets/images/slide1.jpg';
import bannerB from '../../../assets/images/slide2.jpg';
import bannerC from '../../../assets/images/slide3.jpg';
import '../../../components/parts/slider/BigSlider.css'
import Aos from "aos";
import "aos/dist/aos.css";
function BigSlider() {
  useEffect(() => {
    Aos.init();
  }, []);
    return (
        <div className="big-slider" >
      <Carousel  autoplay dots={false}>
        <div className="slide">
          <img src={bannerA} />
          <div className="content-slider"  data-aos="zoom-out-up" data-aos-duration="2000">
            <p className="content-title">Combo dành cho da nhạy cảm</p>
            <h3 className="content-shop">TheFaceShop</h3>
            <p className="content-title">Uư đãi cho 100 khách hàng dặt sớm nhất</p>
            <Button type="button" className="shopping">Mua ngay</Button>
          </div>
        </div>
        <div className="slide">
          <img src={bannerB} />
          <div className="content-slider-two"  data-aos="zoom-out-up" data-aos-duration="2000">
          <p className="content-title">Combo dành cho da nhạy cảm</p>
            <h3 className="content-shop">TheFaceShop</h3>
            <p className="content-title">Uư đãi cho 100 khách hàng dặt sớm nhất</p>
            <Button type="button" className="shopping">Mua ngay</Button>
          </div>
        </div>
      </Carousel>
    </div>
    )
}

export default BigSlider
