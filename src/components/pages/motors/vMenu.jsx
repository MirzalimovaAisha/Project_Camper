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
  VMenuContainer,
  VMenuItems,
  VmenuCost,
} from "../../../style/style";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";

import { Imgwrapper } from "../../../style/navbarStyle";
import { campcar } from "../../data/mockdata";

const VMenu = () => {
  const data = campcar.maindata;

  return (
    <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
      <VMenuContainer $vMenu>
        {data.map((value) => {
          return (
            <Link to={`/motor/${value.id}`}>
              <VMenuItems key={value.id}>
                <MotorItemImg>
                  <MotorImgs $VMenu src={value.car.photo} />
                </MotorItemImg>
                <MotorItemTexts $vMenu>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"5px"}}>
                    <MotorName $vMenu>{value.car.name}</MotorName>
                    <VmenuCost $vMenu>{value.car.cost}</VmenuCost>
                  </div>
                  <MotorBrand $vMenu>
                    <div>{value.car.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.car.rating}</div>
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