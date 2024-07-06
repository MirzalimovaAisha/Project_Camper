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
import { usedCar } from "../../data/usedCar";

const VMenu = ({search}) => {
  const data = usedCar.maindata;

  return (
    <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
      <VMenuContainer $vMenu>
        {search.map((value) => {
          return (
            <Link to={`/used-car/${value.id}`}>
              <VMenuItems key={value.id}>
                <MotorItemImg $vMenu>
                  <MotorImgs $VMenu src={value.used.image} />
                </MotorItemImg>
                <MotorItemTexts $vMenu>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"5px"}}>
                    <MotorName $vMenu>{value.used.name}</MotorName>
                    <VmenuCost $vMenu>{value.used.price}</VmenuCost>
                  </div>
                  <MotorBrand $vMenu>
                    <div>{value.used.company}</div>
                    <MotorRating>
                      <Imgwrapper src={star} />
                      <div>{value.used.rating}</div>
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
