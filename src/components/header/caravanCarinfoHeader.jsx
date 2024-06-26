import React from "react";
import {
  CarinfoButton,
  CarinfoButtons,
  CarinfoHeaderContainer,
  CarinfoName,
  CarinfoTexts,
} from "../../style/headerStyle";
import { caravan } from "../data/caravan";
import { Link, useParams } from "react-router-dom";

const CaravanCarinfoHeader = () => {
  const data = caravan.maindata;
  let { id } = useParams();
  const filterData = data.filter((value) => value.id == id);
  return (
    <div>
      <CarinfoHeaderContainer>
        {filterData.map((value) => {
          return (
            <CarinfoTexts key={value.id}>
              <CarinfoName>{value.caravan.name}</CarinfoName>
              <CarinfoButtons>
                <Link to={`/caravanCart/${value.id}`}>
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

export default CaravanCarinfoHeader;
