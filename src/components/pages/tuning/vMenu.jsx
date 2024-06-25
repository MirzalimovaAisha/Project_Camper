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
import { tuning } from "../../data/tuning";

const VMenu = () => {
  const data = tuning.maindata;

  return (
    <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
      <VMenuContainer $vMenu>
        {data.map((value) => {
          return (
            <Link to={`/tuning/${value.id}`}>
              <VMenuItems key={value.id}>
                <MotorItemImg $vMenu>
                  <MotorImgs $VMenu src={value.tuning.image} />
                </MotorItemImg>
                <MotorItemTexts $vMenu>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"5px"}}>
                    <MotorName $vMenu>{value.tuning.name}</MotorName>
                    <VmenuCost $vMenu>{value.tuning.price}</VmenuCost>
                  </div>
                  <MotorBrand $vMenu>
                    <div>{value.tuning.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.tuning.rating}</div>
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
