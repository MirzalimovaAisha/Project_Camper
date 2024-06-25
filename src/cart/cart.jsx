import React from "react";
import {
  CartContainer,
  CartImgContainer,
  MotorsContainer,
  SectionTitle,
} from "../style/style";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const CartComponent = () => {
  return (
    <div>
      <CartContainer $container>
        <div>
          <SectionTitle>Cart</SectionTitle>
        </div>
        <CartContainer>
          <CartImgContainer>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </CartImgContainer>
        </CartContainer>
      </CartContainer>
    </div>
  );
};

export default CartComponent;
