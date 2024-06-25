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
import { tuning } from "../../data/tuning";

const GridMenu = () => {
  const data = tuning.maindata;

  return (
    <div>
      <MotorRightBox>
        {data.map((value) => {
          return (
            <Link to={`/tuning/${value.id}`}>
              <MotorItems key={value.id}>
                <MotorItemImg>
                  <MotorImgs src={value.tuning.image} />
                </MotorItemImg>
                <MotorItemTexts>
                  <MotorName $gridMenu>{value.tuning.name}</MotorName>
                  <MotorBrand>
                    <div>{value.tuning.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.tuning.rating}</div>
                    </MotorRating>
                  </MotorBrand>
                  <MotorsCost>{value.tuning.price}</MotorsCost>
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
