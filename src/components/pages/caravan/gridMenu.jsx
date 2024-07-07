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

const GridMenu = ({search}) => {

  return (
    <div>
      <MotorRightBox>
        {search.map((value) => {
          return (
            <Link to={`/caravan/${value.id}`} key={value.id}>
              <MotorItems key={value.id}>
                <MotorItemImg>
                  <MotorImgs src={value.caravan.image} />
                </MotorItemImg>
                <MotorItemTexts>
                  <MotorName $gridMenu>{value.caravan.name}</MotorName>
                  <MotorBrand>
                    <div>{value.caravan.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.caravan.rating}</div>
                    </MotorRating>
                  </MotorBrand>
                  <MotorsCost>{value.caravan.price}</MotorsCost>
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
