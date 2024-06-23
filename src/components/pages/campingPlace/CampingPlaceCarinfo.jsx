import React from "react";
import { campingPlace } from "../../data/campingPlace";
import { Link, useParams } from "react-router-dom";
import {
    BlueText,
    CampinInformation,
    CampingFont,
    CampingImgs,
    CampingInformationContainer,
    CampingPlaceCarinfoContainer,
    CampingPlaceImgs,
    CampingPlaceItem,
    CampingPlaceMap,
    CarinfoInfoName,
    ItemReviewItems,
    MotorItemImg,
    MotorsContainer,
    MotorsLeftCheckInputContainer,
    OrangeButton,
} from "../../../style/style";
import { Imgwrapper } from "../../../style/navbarStyle";
import location from "../../../assets/location-icon.png";
import clock from "../../../assets/time-icon.png";
import phone from "../../../assets/phone-icon.png";
import home from "../../../assets/home-icon.png";
import map from "../../../assets/map2.png";

const CampingPlaceCarinfo = () => {
    const data = campingPlace.maindata;
    let { id } = useParams();
    const filterData = data.filter((value) => value.id == id);
    const SliceData = data.slice(0, 6);
    return (
        <MotorsContainer $campingPlace>
            <CampingPlaceCarinfoContainer>
                <CampingPlaceImgs>
                    {SliceData.map((value) => {
                        return (
                            <Link to={`/camping-place/${value.id}`}>
                                <CampingPlaceItem $small key={value.id}>
                                    <MotorItemImg $campingPlace>
                                        <CampingImgs
                                            $small
                                            src={value.campingPlace.photo}
                                        />
                                        <CampingFont></CampingFont>
                                    </MotorItemImg>
                                </CampingPlaceItem>
                            </Link>
                        );
                    })}
                </CampingPlaceImgs>

                <div>
                    {filterData.map((value) => {
                        return (
                            <CampingPlaceCarinfoContainer $campingPlace>
                                <ItemReviewItems $campingPlace>
                                    <CarinfoInfoName>
                                        {value.campingPlace.name}
                                    </CarinfoInfoName>
                                    <MotorsLeftCheckInputContainer
                                        $campingPlace
                                    >
                                        <BlueText $bigText>
                                            {value.campingPlace.location}
                                        </BlueText>
                                        <OrangeButton>Copy map</OrangeButton>
                                    </MotorsLeftCheckInputContainer>
                                </ItemReviewItems>

                                <CampingInformationContainer>
                                    <CampinInformation>
                                        <Imgwrapper src={location} />
                                        <div>{value.campingPlace.location}</div>
                                    </CampinInformation>

                                    <CampinInformation>
                                        <Imgwrapper src={clock} />
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "5px",
                                            }}
                                        >
                                            from
                                            <div style={{ color: "#FF7A00" }}>
                                                {
                                                    value.campingPlace
                                                        .working_hour.from
                                                }
                                            </div>
                                            to
                                            <div style={{ color: "#FF7A00" }}>
                                                {
                                                    value.campingPlace
                                                        .working_hour.to
                                                }
                                            </div>
                                        </div>
                                    </CampinInformation>

                                    <CampinInformation $informationLeft>
                                        <Imgwrapper src={phone} />
                                        <div>
                                            {value.campingPlace.phone_number}
                                        </div>
                                    </CampinInformation>

                                    <CampinInformation>
                                        <Imgwrapper src={home} />
                                        <BlueText>
                                            {value.campingPlace.home_page}
                                        </BlueText>
                                    </CampinInformation>
                                </CampingInformationContainer>

                                <div>
                                    <BlueText $description $bigText>
                                        Description
                                    </BlueText>
                                    <div>{value.campingPlace.description}</div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CampingPlaceMap src={map} />
                                </div>
                            </CampingPlaceCarinfoContainer>
                        );
                    })}
                </div>
            </CampingPlaceCarinfoContainer>
        </MotorsContainer>
    );
};

export default CampingPlaceCarinfo;
