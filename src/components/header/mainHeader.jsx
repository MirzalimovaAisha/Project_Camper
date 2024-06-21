import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


// imgs
import headerImg1 from "../../assets/header-img2.jpg";
import headerImg2 from "../../assets/header-img26.jpg";
import headerImg3 from "../../assets/header-2.png";
import { HeaderContainer, HeaderTextContainer } from "../../style/headerStyle";
import { CampingFont } from "../../style/style";

const MainHeader = () => {
  return (
    <HeaderContainer $main>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img src={headerImg1} alt="" style={{objectPosition:"bottom"}}/>
            <CampingFont $mainHeader></CampingFont>
          </SwiperSlide>
          <SwiperSlide>
            <img src={headerImg2} alt="" />
            <CampingFont $mainHeader></CampingFont>
          </SwiperSlide>
          <SwiperSlide>
            <img src={headerImg3} alt=""  style={{objectPosition:"center"}}/>
            {/* <CampingFont $mainHeader></CampingFont> */}
          </SwiperSlide>
      </Swiper>
      
    </HeaderContainer>
  );
};

export default MainHeader;
