import {
    CartButton,
    CartContainer,
    CartImgContainer,
    CartNameContainer,
    CartNameText,
    CartPurchase,
    CartTextContainer,
    CartTextItems,
    CartTitleText,
    InputSelect,
    LoginInput,
    LoginText,
    MotorsCost,
    SectionTitle,
} from "../style/style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

import img2 from "../assets/camping-car-inside.jpg";
import img3 from "../assets/camping-car-inside2.jpg";
import img4 from "../assets/camping-car-inside3.png";
import { useParams } from "react-router-dom";
import { usedCar } from "../components/data/usedCar";

const UsedCarCartComponent = () => {
    const data = usedCar.maindata;
    let { id } = useParams();
    const filterData = data.filter((value) => value.id == id);
    return (
        <div>
            {filterData.map((value) => {
                return (
                    <CartContainer $container>
                        <div>
                            <SectionTitle>Cart</SectionTitle>
                        </div>
                        <CartContainer>
                            <CartImgContainer>
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff",
                                        borderRadius: "10px",
                                        background: "#fff",
                                        boxShadow:
                                            "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",
                                    }}
                                    zoom={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Zoom, Navigation, Pagination]}
                                    className="mySwiper cartSwiper"
                                >
                                    <SwiperSlide className="swiperImg">
                                        <div className="swiper-zoom-container">
                                            <img src={value.used.image} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperImg">
                                        <div className="swiper-zoom-container">
                                            <img src={img2} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperImg">
                                        <div className="swiper-zoom-container">
                                            <img src={img3} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperImg">
                                        <div className="swiper-zoom-container">
                                            <img src={img4} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "0",
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                            zIndex: "1",
                                        }}
                                    >
                                        <CartPurchase>
                                            <div>Purchase Price</div>
                                            <p>{value.used.price}</p>
                                        </CartPurchase>
                                    </div>
                                </Swiper>
                            </CartImgContainer>

                            <CartTextContainer>
                                <CartTextItems $first>
                                    <CartNameContainer>
                                        <CartTitleText $cartName>
                                            {value.used.name}
                                        </CartTitleText>
                                        <MotorsCost $carinfoCost>
                                            {value.used.price}
                                        </MotorsCost>
                                    </CartNameContainer>
                                    <div>
                                        <CartNameText $firstText>
                                            Description
                                        </CartNameText>
                                        <CartNameText>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Feugiat
                                            viverra amet, tortor tristique odio
                                            scelerisque aenean sodales. Nunc
                                            risus dolor amet porttitor tellus
                                        </CartNameText>
                                        <CartButton $continue>
                                            Continue to payment
                                        </CartButton>
                                    </div>
                                </CartTextItems>

                                <CartTextItems>
                                    <CartTitleText>
                                        Enter Account Details
                                    </CartTitleText>
                                    <div>
                                        <LoginText $title>First name</LoginText>
                                        <LoginInput
                                            type="email"
                                            placeholder="First name"
                                        />

                                        <LoginText $title>Last name</LoginText>
                                        <LoginInput
                                            type="text"
                                            placeholder="Last name"
                                        />
                                        <LoginText $title>Email</LoginText>
                                        <LoginInput
                                            $last
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <LoginText $title>
                                            Mobile Phone Number
                                        </LoginText>
                                        <LoginInput
                                            $last
                                            type="text"
                                            placeholder="Mobile Phone Number"
                                        />
                                    </div>
                                </CartTextItems>

                                <CartTextItems>
                                    <CartTitleText>Card</CartTitleText>
                                    <div>
                                        <LoginText $title>
                                            Name on card
                                        </LoginText>
                                        <LoginInput
                                            type="email"
                                            placeholder="Name on card"
                                        />

                                        <LoginText $title>
                                            Card Number
                                        </LoginText>
                                        <LoginInput
                                            type="text"
                                            placeholder="Card Number"
                                        />
                                        <LoginText $title>
                                            Expiration Month
                                        </LoginText>
                                        <InputSelect>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </InputSelect>
                                        <LoginText $title>
                                            Expiration Year
                                        </LoginText>
                                        <InputSelect>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                        </InputSelect>
                                        <LoginText $title>CVV</LoginText>
                                        <LoginInput
                                            $last
                                            type="text"
                                            placeholder="CVV"
                                        />
                                        <LoginText $title>
                                            Billing Zip Cod
                                        </LoginText>
                                        <LoginInput
                                            $last
                                            type="text"
                                            placeholder="Billing Zip Cod"
                                        />
                                        <CartButton>Place Order</CartButton>
                                    </div>
                                </CartTextItems>
                            </CartTextContainer>
                        </CartContainer>
                    </CartContainer>
                );
            })}
        </div>
    );
};

export default UsedCarCartComponent;
