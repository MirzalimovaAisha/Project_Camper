import React from "react";
import {
    CarinfoContactMap,
    CarinfoContactText,
    CarinfoContactTextContainer,
    CarinfoTabsContainer,
    ItemReviewBoxContainer,
    ItemReviewTop,
} from "../style/style";
import map from "../assets/map.png";
import { ContactUs } from "./email";

const CarinfoContactTab = () => {
    return (
        <div>
            <CarinfoTabsContainer>
                <ItemReviewBoxContainer>
                    <div>
                        <CarinfoContactMap src={map} />
                        <ItemReviewTop $map>
                            <CarinfoContactTextContainer>
                                <CarinfoContactText $text1>
                                    Phone number:
                                </CarinfoContactText>
                                <CarinfoContactText>
                                    +7 237 181 181
                                </CarinfoContactText>
                                <CarinfoContactText>
                                    +7 210 181 191
                                </CarinfoContactText>
                            </CarinfoContactTextContainer>
                            <CarinfoContactTextContainer>
                                <CarinfoContactText $text1>
                                    E-mail::
                                </CarinfoContactText>
                                <CarinfoContactText>logo.uz</CarinfoContactText>
                            </CarinfoContactTextContainer>
                        </ItemReviewTop>
                    </div>

                    <ContactUs />
                </ItemReviewBoxContainer>
            </CarinfoTabsContainer>
        </div>
    );
};

export default CarinfoContactTab;
