import React from "react";
import {
    CarinfoTabsContainer,
    ItemReviewBoxContainer,
    ItemReviewImgs,
    ItemReviewInfoTextLeft,
    ItemReviewItems,
    ItemReviewLeft,
    ItemReviewRight,
    ItemReviewRightNumbers,
    ItemReviewRightTexts,
    ItemReviewTop,
    MotorItemNumbers,
    MotorLeftDownArrow,
    MotorLeftInput,
    MotorLeftTopLeftText,
} from "../style/style";
import { campcar } from "../components/data/mockdata";
import { Imgwrapper } from "../style/navbarStyle";
import downArrowInput from "../assets/down-arrow-input.svg";

const ItemReview = () => {
    const data = campcar.maindata;
    const filterData = data.slice(0, 6);

    return (
        <div>
            <CarinfoTabsContainer >
                <diw>
                    <ItemReviewTop>
                        <MotorLeftTopLeftText>
                            <MotorItemNumbers>Premium Review</MotorItemNumbers>
                            <MotorItemNumbers $number>
                                {data.length}
                            </MotorItemNumbers>
                        </MotorLeftTopLeftText>

                        <MotorLeftInput style={{ width: "177px" }}>
                            <input type="text" placeholder="Best" />
                            <MotorLeftDownArrow>
                                <Imgwrapper src={downArrowInput} />
                            </MotorLeftDownArrow>
                        </MotorLeftInput>
                    </ItemReviewTop>

                    {filterData.map((value) => {
                        return (
                            <ItemReviewBoxContainer $itemReview key={value.id}>
                                <ItemReviewItems>
                                    <ItemReviewLeft>
                                        <ItemReviewImgs src={value.car.photo} />
                                        <div>
                                            <ItemReviewInfoTextLeft $name>{value.car.name}</ItemReviewInfoTextLeft>
                                            <ItemReviewInfoTextLeft $company>{value.car.company}</ItemReviewInfoTextLeft>
                                            <ItemReviewInfoTextLeft $text >Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</ItemReviewInfoTextLeft>
                                        </div>
                                    </ItemReviewLeft>

                                    <ItemReviewRight>
                                        <ItemReviewRightTexts>
                                            <div>ID:</div>
                                            <ItemReviewRightNumbers>{value.id}</ItemReviewRightNumbers>
                                        </ItemReviewRightTexts>
                                        <ItemReviewRightTexts>
                                            <div>Date:</div>
                                            <ItemReviewRightNumbers>{value.car.date}</ItemReviewRightNumbers>
                                        </ItemReviewRightTexts>
                                        <ItemReviewRightTexts>
                                            <div>Viewed:</div>
                                            <ItemReviewRightNumbers>135</ItemReviewRightNumbers>
                                        </ItemReviewRightTexts>
                                    </ItemReviewRight>
                                </ItemReviewItems>
                            </ItemReviewBoxContainer>
                        );
                    })}
                </diw>
            </CarinfoTabsContainer>
        </div>
    );
};

export default ItemReview;
