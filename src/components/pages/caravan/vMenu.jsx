import React from "react";
import {
  BlueButton,
  MotorBrand,
  MotorImgs,
  MotorItemImg,
  MotorItemTexts,
  MotorName,
  MotorRating,
  MotorsButtons,
  VMenuContainer,
  VMenuItems,
  VmenuCost,
} from "../../../style/style";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";

import { Imgwrapper } from "../../../style/navbarStyle";
import { caravan } from "../../data/caravan";

const VMenu = ({search}) => {
  const data = caravan.maindata;

  return (
    <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
      <VMenuContainer $vMenu>
        {search.map((value, index) => {
          return (
            <Link to={`/caravan/${value.id}`}>
              <VMenuItems key={value.id}>
                <MotorItemImg $vMenu>
                  <MotorImgs $VMenu src={value.caravan.image} />
                </MotorItemImg>
                <MotorItemTexts $vMenu>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"5px"}}>
                    <MotorName $vMenu>{value.caravan.name}</MotorName>
                    <VmenuCost $vMenu>{value.caravan.price}</VmenuCost>
                  </div>
                  <MotorBrand $vMenu>
                    <div>{value.caravan.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.caravan.rating}</div>
                    </MotorRating>
                  </MotorBrand>
                  <MotorsButtons>
                    <BlueButton $vMenu>Order</BlueButton>
                    <BlueButton $vMenu>Compare</BlueButton>
                  </MotorsButtons>
                </MotorItemTexts>
              </VMenuItems>
            </Link>
          );
        })}
      </VMenuContainer>
    </div>
  );
};

export default VMenu;
