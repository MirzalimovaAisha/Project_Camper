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
import { usedCar } from "../../data/usedCar";

const GridMenu = ({search}) => {
  const data = usedCar.maindata;

  return (
    <div>
      <MotorRightBox>
        {search.map((value) => {
          return (
            <Link to={`/used-car/${value.id}`}>
              <MotorItems key={value.id}>
                <MotorItemImg>
                  <MotorImgs src={value.used.image} />
                </MotorItemImg>
                <MotorItemTexts>
                  <MotorName $gridMenu>{value.used.name}</MotorName>
                  <MotorBrand>
                    <div>{value.used.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.used.rating}</div>
                    </MotorRating>
                  </MotorBrand>
                  <MotorsCost>{value.used.price}</MotorsCost>
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
