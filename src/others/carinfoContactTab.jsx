import React, { useEffect, useRef } from "react";
import {
    CarinfoContactMap,
    CarinfoContactText,
    CarinfoContactTextContainer,
    CarinfoTabsContainer,
    ItemReviewBoxContainer,
    ItemReviewTop,
} from "../style/style";
import { ContactUs } from "./email";

const CarinfoContactTab = () => {
    const new_script = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.addEventListener("load", () => {
                resolve();
            });
            script.addEventListener("error", (e) => {
                reject(e);
            });
            document.head.appendChild(script);
        });
    };

    useEffect(() => {
        const my_script = new_script(
            "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6ae0c8a12777a444eb25d5f3b1a597ad"
        );
        my_script.then(() => {
            console.log("script loaded!!!");
            const kakao = window["kakao"];
            kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(35.88419, 128.7029796),
                    level: 3,
                };
                const map = new kakao.maps.Map(mapContainer, options);

                const markerPositions = [
                    new kakao.maps.LatLng(35.88419, 128.7029796),
                ];

                markerPositions.forEach((position) => {
                    const marker = new kakao.maps.Marker({
                        position: position,
                    });
                    marker.setMap(map);
                });
            });
        });
    }, []);
    const addressRef = useRef(null);
    return (
        <div>
            <CarinfoTabsContainer>
                <ItemReviewBoxContainer>
                    <div>
                        <CarinfoContactMap
                            id="map"
                            className="map"
                        ></CarinfoContactMap>
                        <ItemReviewTop $map>
                            <CarinfoContactTextContainer>
                                <CarinfoContactText $text1>
                                    Phone number:
                                </CarinfoContactText>
                                <CarinfoContactText>
                                    +7 237 181 181
                                </CarinfoContactText>
                                <CarinfoContactText>
                                    +7 210 181 191
                                </CarinfoContactText>
                            </CarinfoContactTextContainer>
                            <CarinfoContactTextContainer>
                                <CarinfoContactText $text1>
                                    E-mail:
                                </CarinfoContactText>
                                <CarinfoContactText>logo.uz</CarinfoContactText>
                            </CarinfoContactTextContainer>
                        </ItemReviewTop>
                    </div>

                    <ContactUs />
                </ItemReviewBoxContainer>
            </CarinfoTabsContainer>
        </div>
    );
};

export default CarinfoContactTab;
