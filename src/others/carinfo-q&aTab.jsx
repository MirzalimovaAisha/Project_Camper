import React from "react";
import {
  CarinfoTabsContainer,
  ItemReviewBoxContainer,
  ItemReviewItems,
  QuestionText,
} from "../style/style";
import { ContactUs } from "./email";
// import { ContactUs } from "./email";

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

          <ContactUs />
        </ItemReviewBoxContainer>
      </CarinfoTabsContainer>
    </div>
  );
};

export default Q_ATab;
