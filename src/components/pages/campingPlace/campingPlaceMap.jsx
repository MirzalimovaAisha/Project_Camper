import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { campingPlace } from "../../data/campingPlace";
import { CampingPlaceMap } from "../../../style/style";

const CampingPlaceComponentMap = ({ map }) => {
    const { id } = useParams();
    const data = campingPlace.maindata.find((value) => value.id === parseInt(id));
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

    const ltd = data.campingPlace.map.latitude;
    const lng = data.campingPlace.map.longitude;

    // kakao map
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
                    // center: new kakao.maps.LatLng(35.88419, 128.88419),
                    center: new kakao.maps.LatLng(ltd, lng),
                    level: 6,
                };
                const map = new kakao.maps.Map(mapContainer, options);

                // const markerPositions = [new kakao.maps.LatLng(35.88419, 128.88419)];
                const markerPositions = [new kakao.maps.LatLng(ltd, lng)];

                markerPositions.forEach((position) => {
                    const marker = new kakao.maps.Marker({
                        position: position,
                    });
                    marker.setMap(map);
                });
            });
        });
    }, []);
    return (
        <div>
            <CampingPlaceMap id="map" className="map"></CampingPlaceMap>
        </div>
    );
};

export default CampingPlaceComponentMap;
