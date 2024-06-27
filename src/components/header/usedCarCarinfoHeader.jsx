import React from "react";
import {
  CarinfoButton,
  CarinfoButtons,
  CarinfoHeaderContainer,
  CarinfoName,
  CarinfoTexts,
} from "../../style/headerStyle";
import { usedCar } from "../data/usedCar";
import { Link, useParams } from "react-router-dom";

const UsedCarCarinfoHeader = () => {
  const data = usedCar.maindata;
  let { id } = useParams();
  const filterData = data.filter((value) => value.id == id);
  return (
    <div>
      <CarinfoHeaderContainer>
        {filterData.map((value) => {
          return (
            <CarinfoTexts key={value.id}>
              <CarinfoName>{value.used.name}</CarinfoName>
              <CarinfoButtons>
                <Link to={`/used-car/cart/${value.id}`}>
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

export default UsedCarCarinfoHeader;
