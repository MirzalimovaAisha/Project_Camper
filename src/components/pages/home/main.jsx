import React from "react";
import MainHeader from "../../header/mainHeader";
import {
    BlogContainer,
    BlogsText,
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
import recommendImg1 from "../../../assets/recommend-img-1.png";
import recommendImg2 from "../../../assets/recommend-img-2.png";
import recommendImg3 from "../../../assets/recommend-img-3.png";
import recommendImg4 from "../../../assets/recommend-img-4.png";
import discoverText from "../../../assets/discover-button.png";
import arrow from "../../../assets/big-down-arrow.svg";
import blogs1 from "../../../assets/blogs-img-1.png";
import blogs2 from "../../../assets/blogs-img-2.png";
import blogs3 from "../../../assets/blogs-img-3.png";
import blogs4 from "../../../assets/blogs-img-4.png";
import blogs5 from "../../../assets/blogs-img-5.png";
import blogs6 from "../../../assets/blogs-img-6.png";

import VideoModal from "./videoModal";

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
                            <img
                                src={recommendImg1}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg2}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Aidal</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg3}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>escape</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg4}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Lyseo</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg1}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Knaus</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg2}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Aidal</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg3}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>escape</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={recommendImg4}
                                alt=""
                                style={{ width: "290px", height: "167px" }}
                            />
                            <RecommendText>Lyseo</RecommendText>
                            <img src={discoverText} alt="" />
                            <RecommendText $model>
                                <div>Choose a model</div>
                                <img src={arrow} />
                            </RecommendText>
                        </CarouselItem>
                    </Carousel>
                </MainCarousel>
            </MainContainer>

            <VideoModal />

            <MainContainer>
                <SectionTitle>Blogs</SectionTitle>
                <BlogContainer>
                    <BlogsText style={{ marginTop: "15px" }}>
                        <BlogsText $title>Camper</BlogsText>
                        <BlogsText $orange>@camper_1</BlogsText>
                        <BlogsText $texts>
                            Camping truly is for everyone, from your oldest
                            family member to little campers just trekking out
                            for the first time. Whether your plan is to relax,
                            explore or reconnect, CAMPER campgrounds are a great
                            place to create memories with those you love.
                        </BlogsText>
                    </BlogsText>

                    <MainVideoContainer $blogs>
                        <img src={blogs1} alt="blogs" />
                        <img src={blogs2} alt="blogs" />
                        <img src={blogs3} alt="blogs" />
                        <img src={blogs4} alt="blogs" />
                        <img src={blogs5} alt="blogs" />
                        <img src={blogs6} alt="blogs" />
                    </MainVideoContainer>
                </BlogContainer>
            </MainContainer>
        </div>
    );
};

export default MainComponent;
