import React from "react";
import {
  CarinfoButton,
  CarinfoButtons,
  CarinfoHeaderContainer,
  CarinfoName,
  CarinfoTexts,
} from "../../style/headerStyle";
import { campcar } from "../data/mockdata";
import { Link, useParams } from "react-router-dom";

const CarinfoHeader = () => {
  const data = campcar.maindata;
  let { id } = useParams();
  const filterData = data.filter((value) => value.id == id);
  return (
    <div>
      <CarinfoHeaderContainer>
        {filterData.map((value) => {
          return (
            <CarinfoTexts key={value.id}>
              <CarinfoName>{value.car.name}</CarinfoName>
              <CarinfoButtons>
                <Link to={`/MotorCart/${value.id}`}>
                  <CarinfoButton $blue>ADD TO CART</CarinfoButton>
                </Link>
                <CarinfoButton $white>COMPARE</CarinfoButton>
              </CarinfoButtons>
            </CarinfoTexts>
          );
        })}
      </CarinfoHeaderContainer>
    </div>
  );
};

export default CarinfoHeader;
