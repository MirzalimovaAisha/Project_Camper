import React from "react";
import {
  BlueButton,
  MotorBrand,
  MotorImgs,
  MotorItemImg,
  MotorItemTexts,
  MotorItems,
  MotorName,
  MotorRating,
  MotorRightBox,
  MotorsButtons,
  MotorsCost,
} from "../../../style/style";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";

import { Imgwrapper } from "../../../style/navbarStyle";
import { campcar } from "../../data/mockdata";

const GridMenu = () => {
  const data = campcar.maindata;

  return (
    <div>
      <MotorRightBox>
        {data.map((value) => {
          return (
            <Link to={`/motor/${value.id}`}>
              <MotorItems key={value.id}>
                <MotorItemImg>
                  <MotorImgs src={value.car.photo} />
                </MotorItemImg>
                <MotorItemTexts>
                  <MotorName $gridMenu>{value.car.name}</MotorName>
                  <MotorBrand>
                    <div>{value.car.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.car.rating}</div>
                    </MotorRating>
                  </MotorBrand>
                  <MotorsCost>{value.car.cost}</MotorsCost>
                  <MotorsButtons>
                    <BlueButton $blue>Order</BlueButton>
                    <BlueButton>Compare</BlueButton>
                  </MotorsButtons>
                </MotorItemTexts>
              </MotorItems>
            </Link>
          );
        })}
      </MotorRightBox>
    </div>
  );
};

export default GridMenu;
