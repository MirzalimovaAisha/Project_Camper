import React from "react";
import {
  BlueButton,
  CarinfoContactMap,
  CarinfoContactText,
  CarinfoContactTextContainer,
  CarinfoInput,
  CarinfoInputs,
  CarinfoTabSend,
  CarinfoTabsContainer,
  ItemReviewBoxContainer,
  ItemReviewTop,
} from "../style/style";
import map from "../assets/map.png"

const CarinfoContactTab = () => {
  return (
    <div>
      <CarinfoTabsContainer>
        <ItemReviewBoxContainer>
            <div>
                <CarinfoContactMap src={map}/>
                <ItemReviewTop $map>
                    <CarinfoContactTextContainer>
                        <CarinfoContactText $text1>Phone number:</CarinfoContactText>
                        <CarinfoContactText>+7 237 181 181</CarinfoContactText>
                        <CarinfoContactText>+7 210 181 191</CarinfoContactText>
                    </CarinfoContactTextContainer>
                    <CarinfoContactTextContainer>
                        <CarinfoContactText $text1>E-mail::</CarinfoContactText>
                        <CarinfoContactText>logo.uz</CarinfoContactText>
                    </CarinfoContactTextContainer>
                </ItemReviewTop>
            </div>

          <CarinfoTabSend>
            <div>Have you got a question</div>
            <CarinfoInputs>
              <CarinfoInput placeholder="Your name" />
              <CarinfoInput placeholder="Your email" />
              <CarinfoInput $big placeholder="Your question" />
            </CarinfoInputs>
            <BlueButton $sendButton>Send question</BlueButton>
          </CarinfoTabSend>
        </ItemReviewBoxContainer>
      </CarinfoTabsContainer>
    </div>
  );
};

export default CarinfoContactTab;
