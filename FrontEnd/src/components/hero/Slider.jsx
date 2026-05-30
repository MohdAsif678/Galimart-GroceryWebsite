import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./slider.css";
import Img1 from "../../assets/heroImages/img1.png" 
import Img2 from "../../assets/heroImages/img2.png";
import Img3 from "../../assets/heroImages/img3.png";

const Slider = () => {
  return (
    <Swiper id="hero"
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Img2} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img1} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt="" className="slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
