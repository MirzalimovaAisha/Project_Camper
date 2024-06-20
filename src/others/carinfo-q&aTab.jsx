import React from "react";
import {
  BlueButton,
  CarinfoInput,
  CarinfoInputs,
  CarinfoTabSend,
  CarinfoTabsContainer,
  ItemReviewBoxContainer,
  ItemReviewItems,
  QuestionText,
} from "../style/style";

const Q_ATab = () => {
  return (
    <div>
      <CarinfoTabsContainer>
        <ItemReviewBoxContainer>
          <div>
            <ItemReviewItems $qaTab>
              <QuestionText $name>Name</QuestionText>
              <QuestionText>Question Lorem ipsum dolor sit amet ?</QuestionText>
            </ItemReviewItems>
            <ItemReviewItems $qaTab>
              <QuestionText $name>Name</QuestionText>
              <QuestionText>Question Lorem ipsum dolor sit amet ?</QuestionText>
            </ItemReviewItems>
            <ItemReviewItems $qaTab>
              <QuestionText $name>Name</QuestionText>
              <QuestionText>Question Lorem ipsum dolor sit amet ?</QuestionText>
            </ItemReviewItems>
            <ItemReviewItems $qaTab>
              <QuestionText $name>Name</QuestionText>
              <QuestionText>Question Lorem ipsum dolor sit amet ?</QuestionText>
            </ItemReviewItems>
            <ItemReviewItems $qaTab>
              <QuestionText $name>Name</QuestionText>
              <QuestionText>Question Lorem ipsum dolor sit amet ?</QuestionText>
            </ItemReviewItems>
          </div>

          <CarinfoTabSend>
            <div>Send a question</div>
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

export default Q_ATab;
