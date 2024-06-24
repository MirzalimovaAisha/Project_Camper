import React from "react";
import {
  CarinfoButton,
  CarinfoButtons,
  CarinfoHeaderContainer,
  CarinfoName,
  CarinfoTexts,
} from "../../style/headerStyle";
import { campcar } from "../data/mockdata";
import { useParams } from "react-router-dom";

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
                <CarinfoButton $blue>ADD TO CART</CarinfoButton>
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
