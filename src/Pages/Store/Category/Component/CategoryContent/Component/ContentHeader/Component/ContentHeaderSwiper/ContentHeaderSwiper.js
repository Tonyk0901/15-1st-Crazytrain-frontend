import React, { Component } from "react";
// import Swiper core and required components
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "./navigation.scss";
import "./pagination.scss";
import "./ContentHeaderSwiper.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

class ContentHeaderSwiper extends Component {
  render() {
    return (
      <Swiper
        className="ContentHeaderSwiper"
        spaceBetween={50}
        slidesPerView={1}
        style={{ height: "290px", width: "100%" }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
      >
        <SwiperSlide className="ContentHeaderSwiperSlide">
          <div className="test">test1</div>
        </SwiperSlide>
        <SwiperSlide className="ContentHeaderSwiperSlide">
          <div className="test">test2</div>
        </SwiperSlide>
        <SwiperSlide className="ContentHeaderSwiperSlide">
          <div className="test">test3</div>
        </SwiperSlide>
        ...
      </Swiper>
    );
  }
}

export default ContentHeaderSwiper;