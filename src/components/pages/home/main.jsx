import React from "react";
import MainHeader from "../../header/mainHeader";
import {
    CarouselItem,
    MainCarousel,
    MainContainer,
    MainVideoContainer,
    RecommendText,
    SectionTitle,
} from "../../../style/style";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// imgs
import recommendImg from "../../../assets/recommend-img-1.png";
import discoverText from "../../../assets/discover-button.png";
import arrow from "../../../assets/big-down-arrow.svg";
import video1 from "../../../assets/home-box-1.png"
import video2 from "../../../assets/home-box-2.png"
import video3 from "../../../assets/home-box-3.png"
import video4 from "../../../assets/home-box-4.png"
import video5 from "../../../assets/home-box-5.png"
import video6 from "../../../assets/home-box-6.png"
import video7 from "../../../assets/home-box-7.png"
import video8 from "../../../assets/home-box-8.png"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1245 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1245, min: 700 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
    },
};

const MainComponent = () => {
    return (
        <div>
            <MainHeader />

            <MainContainer>
                <SectionTitle>Recommend</SectionTitle>

                <MainCarousel>
                    <Carousel
                        className="custom-carousel"
                        responsive={responsive}
                    >
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={recommendImg} alt="" />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                    </Carousel>
                </MainCarousel>
            </MainContainer>

            <MainContainer $videos>
                <SectionTitle>Videos</SectionTitle>
                <MainVideoContainer>
                  <img src={video1} alt="" />
                  <img src={video2} alt="" />
                  <img src={video3} alt="" />
                  <img src={video4} alt="" />
                  <img src={video5} alt="" />
                  <img src={video6} alt="" />
                  <img src={video7} alt="" />
                  <img src={video8} alt="" />
                </MainVideoContainer>
            </MainContainer>
        </div>
    );
};

export default MainComponent;
