import React from "react";
import {
    HeaderContainer,
    HeaderImg,
    HeaderText,
    HeaderTextContainer,
    HeaderTitle,
} from "../../style/headerStyle";
// import headerImg from "../../assets/tuning-header2.jpg"
import headerImg from "../../assets/tuning-header7.avif";

const TuningHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderImg 
                    style={{ backgroundImage: `url(${headerImg})` }}
                >
                    <HeaderTextContainer>
                        <HeaderText $text1>Home / Tuning</HeaderText>
                        <HeaderText>Our ranges</HeaderText>
                        <HeaderTitle>Tuning</HeaderTitle>
                    </HeaderTextContainer>
                </HeaderImg>
            </HeaderContainer>
        </div>
    );
};

export default TuningHeader;
