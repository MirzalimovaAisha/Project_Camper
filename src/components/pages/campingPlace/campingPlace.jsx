import React from "react";
import CampingPlaceHeader from "../../header/campingPlaceHeader";
import {
  CampingFont,
  CampingImgs,
  CampingPlaceItem,
  MotorBrand,
  MotorItemImg,
  MotorItems,
  MotorName,
  MotorRightBox,
  MotorsContainer,
} from "../../../style/style";
import { campingPlace } from "../../data/campingPlace";
import { Link } from "react-router-dom";

const CampingPlaceComponents = () => {
  const data = campingPlace.maindata;
  return (
    <div>
      <CampingPlaceHeader />

      <MotorsContainer>
        <MotorRightBox $campingPlace>
          {data.map((value) => {
            return (
              <Link to={`/camping-place/${value.id}`}>
                <CampingPlaceItem key={value.id}>
                  <MotorItemImg $campingPlace>
                    <CampingImgs src={value.campingPlace.photo} />
                    <CampingFont></CampingFont>
                  </MotorItemImg>
                  <MotorName $campingPlace>{value.campingPlace.name}</MotorName>
                  <MotorBrand $location>{value.campingPlace.location}</MotorBrand>
                </CampingPlaceItem>
              </Link>
            );
          })}
        </MotorRightBox>
      </MotorsContainer>
    </div>
  );
};

export default CampingPlaceComponents;
