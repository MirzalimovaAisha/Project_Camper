import React from "react";
import {
    CarinfoButton,
    CarinfoButtons,
    CarinfoHeaderContainer,
    CarinfoName,
    CarinfoTexts,
} from "../../style/headerStyle";
import { useParams } from "react-router-dom";
import { usedCar } from "../data/usedCar";

const TuningCarinfoHeader = () => {
    const data = usedCar.maindata;
    let {id} = useParams();
    const filterData = data.filter((value)=> value.id == id)
  return (
    <div>
      <CarinfoHeaderContainer>
        {filterData.map((value) => {
          return (
            <CarinfoTexts key={value.id}>
              <CarinfoName>{value.used.name}</CarinfoName>
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

export default TuningCarinfoHeader;
