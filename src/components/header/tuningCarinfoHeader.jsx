import React from "react";
import {
  CarinfoButton,
  CarinfoButtons,
  CarinfoHeaderContainer,
  CarinfoName,
  CarinfoTexts,
} from "../../style/headerStyle";
import { Link, useParams } from "react-router-dom";
import { tuning } from "../data/tuning";

const TuningCarinfoHeader = () => {
  const data = tuning.maindata;
  let { id } = useParams();
  const filterData = data.filter((value) => value.id == id);
  return (
    <div>
      <CarinfoHeaderContainer>
        {filterData.map((value) => {
          return (
            <CarinfoTexts key={value.id}>
              <CarinfoName>{value.tuning.name}</CarinfoName>
              <CarinfoButtons>
                <Link to={`/tuningCart/${value.id}`}>
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

export default TuningCarinfoHeader;
