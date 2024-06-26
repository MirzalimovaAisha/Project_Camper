import React from "react";

import {
  CarinfoBoxContainer,
  CarinfoContainer,
  CarinfoImg,
  CarinfoInfoName,
  CarinfoInfoTextBottom,
  CarinfoInfoTextTop,
  CarinfoInfoTexts,
  CarinfoInfoTitle,
  CarinfoInfoTopLeftTexts,
  CarinfoInformation,
  CarinfoItemImg,
  CarinfoItemText,
  CarinfoItemTextContainer,
  CarinfoItems,
  MotorsCost,
} from "../../../style/style";

import carinfoImg1 from "../../../assets/carInfo-1.png";
import carinfoImg2 from "../../../assets/carInfo-2.png";
import carinfoImg3 from "../../../assets/carInfo-3.png";
import carinfoImg4 from "../../../assets/carInfo-4.png";
import carinfoImg5 from "../../../assets/carInfo-5.png";
import { CarinfoButton, CarinfoButtons } from "../../../style/headerStyle";
import CarinfoItemTabs from "../../../others/carinfoItemTabs";
import { usedCar } from "../../data/usedCar";
import { Link, useParams } from "react-router-dom";
import UsedCarCarinfoHeader from "../../header/usedCarCarinfoHeader";

const UsedCarCarinfo = () => {
  const data = usedCar.maindata;
  let { id } = useParams();
  const filterData = data.filter((value) => value.id == id);
  return (
    <div>
      <UsedCarCarinfoHeader />

      {filterData.map((value) => {
        return (
          <CarinfoContainer>
            <CarinfoInformation key={value.id}>
              <CarinfoImg src={value.used.image} />

              <CarinfoInfoTexts>
                <CarinfoInfoTextTop>
                  <CarinfoInfoTopLeftTexts>
                    <CarinfoInfoName>{value.used.name}</CarinfoInfoName>
                    <div>aid</div>
                  </CarinfoInfoTopLeftTexts>

                  <MotorsCost $carinfoCost>{value.used.price}</MotorsCost>
                </CarinfoInfoTextTop>

                <div>
                  <CarinfoInfoTextBottom>
                    <CarinfoInfoTitle>Company</CarinfoInfoTitle>
                    <CarinfoInfoTitle $title2>
                      {value.used.company}
                    </CarinfoInfoTitle>
                  </CarinfoInfoTextBottom>
                  <CarinfoInfoTextBottom>
                    <CarinfoInfoTitle>People</CarinfoInfoTitle>
                    <CarinfoInfoTitle $title2>
                      {value.used.people}
                    </CarinfoInfoTitle>
                  </CarinfoInfoTextBottom>
                  <CarinfoInfoTextBottom>
                    <CarinfoInfoTitle>License type</CarinfoInfoTitle>
                    <CarinfoInfoTitle $title2>
                      {value.used.license}
                    </CarinfoInfoTitle>
                  </CarinfoInfoTextBottom>
                </div>
              </CarinfoInfoTexts>
            </CarinfoInformation>

            <CarinfoBoxContainer>
              <CarinfoItems>
                <CarinfoItemImg src={carinfoImg1} alt="img1" $mobile />
                <CarinfoItemTextContainer $leftText>
                  <CarinfoItemText $title>Comfort</CarinfoItemText>
                  <CarinfoItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Rutrum <br />
                    nibh urna sagittis arcu natoque lectus cursus felis. Nec,
                    felis risus, <br />
                    id in proin sed proin iaculis mi. Turpis ac ut metus, amet,
                    pulvinar. <br /> Eget amet dictum luctus quis molestie
                    tellus vitae.Lorem ipsum <br /> dolor sit amet, consectetur
                    adipiscing elit. Rutrum nibh urna <br /> sagittis arcu
                    natoque lectus cursus felis. Nec, felis risus, id in proin{" "}
                    <br /> sed proin iaculis mi.
                  </CarinfoItemText>
                </CarinfoItemTextContainer>

                <CarinfoItemImg src={carinfoImg1} alt="img1" />
              </CarinfoItems>

              <CarinfoItems>
                <CarinfoItemImg src={carinfoImg2} alt="img1" $mobile />
                <CarinfoItemImg src={carinfoImg2} alt="img1" />

                <CarinfoItemTextContainer $leftText>
                  <CarinfoItemText $title>
                    Tidying away is child’s play!
                  </CarinfoItemText>
                  <CarinfoItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Rutrum <br />
                    nibh urna sagittis arcu natoque lectus cursus felis. Nec,
                    felis risus, <br />
                    id in proin sed proin iaculis mi. Turpis ac ut metus, amet,
                    pulvinar. <br /> Eget amet dictum luctus quis molestie
                    tellus vitae.Lorem ipsum <br /> dolor sit amet, consectetur
                    adipiscing elit. Rutrum nibh urna <br /> sagittis arcu
                    natoque lectus cursus felis. Nec, felis risus, id in proin{" "}
                    <br /> sed proin iaculis mi.
                  </CarinfoItemText>
                </CarinfoItemTextContainer>
              </CarinfoItems>

              <CarinfoItems>
                <CarinfoItemImg src={carinfoImg3} alt="img1" $mobile />

                <CarinfoItemTextContainer $leftText>
                  <CarinfoItemText $title>Ventilated , Lit up</CarinfoItemText>
                  <CarinfoItemText>
                    In our vans and motorhomes, all our body lighting is 100%
                    LED: a <br /> guarantee of energy efficiency and durability.{" "}
                    <br /> As for ventilation, we also often offer double
                    ventilation in the <br />
                    bathroom (Skylight + window), which is very popular with our{" "}
                    <br /> customers… Camper relies on legendary Seitz windows.
                    They offer the best <br />
                    insulation and are also the easiest to use and safest
                    because they <br /> can’t be removed from the outside.
                  </CarinfoItemText>
                </CarinfoItemTextContainer>

                <CarinfoItemImg src={carinfoImg3} alt="img1" />
              </CarinfoItems>

              <CarinfoItems>
                <CarinfoItemImg src={carinfoImg4} alt="img1" $mobile />
                <CarinfoItemImg src={carinfoImg4} alt="img1" />

                <CarinfoItemTextContainer $leftText>
                  <CarinfoItemText $title>Easy access</CarinfoItemText>
                  <CarinfoItemText>
                    We add little touches that your joints will thank you for…{" "}
                    <br /> All our motorhomes are equipped with a built-in step
                    to facilitate <br /> entry to the vehicle <br /> All our
                    vans are equipped with an electric step.
                  </CarinfoItemText>
                </CarinfoItemTextContainer>
              </CarinfoItems>

              <CarinfoItems>
                <CarinfoItemImg src={carinfoImg5} alt="img1" $mobile />

                <CarinfoItemTextContainer $leftText>
                  <CarinfoItemText $title>Heating when driving</CarinfoItemText>
                  <CarinfoItemText>
                    Fuel heating is now very popular in the industry, but this
                    was not <br /> always the case; Camper (once again) led the
                    way in this area over <br /> 15 years ago. <br /> One of the
                    advantages it offers is that it can heat up your vehicle{" "}
                    <br /> while you drive, for a more comfortable arrival.
                  </CarinfoItemText>
                  <CarinfoItemText>
                    <CarinfoButtons>
                      <Link to={`/used-carCart/${value.id}`}>
                        <CarinfoButton $blue>ADD TO CART</CarinfoButton>
                      </Link>
                      <CarinfoButton $carinfoItem>COMPARE</CarinfoButton>
                    </CarinfoButtons>
                  </CarinfoItemText>
                </CarinfoItemTextContainer>

                <CarinfoItemImg src={carinfoImg5} alt="img1" />
              </CarinfoItems>
            </CarinfoBoxContainer>

            <CarinfoItemTabs />
          </CarinfoContainer>
        );
      })}
    </div>
  );
};

export default UsedCarCarinfo;
