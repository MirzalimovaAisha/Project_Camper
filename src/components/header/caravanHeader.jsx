import React from "react";
import {
    HeaderContainer,
    HeaderImg,
    HeaderText,
    HeaderTextContainer,
    HeaderTitle,
} from "../../style/headerStyle";

// import headerImg from "../../assets/caravan-26.jpg"
import headerImg from "../../assets/caravan-header-4.jpg";
// import headerImg from "../../assets/header-img32.jpg";

const CaravanHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderImg
                    $bottom
                    style={{
                        backgroundImage: `url(${headerImg})`,
                    }}
                >
                    <HeaderTextContainer>
                        <HeaderText  $text1>Home / Caravan</HeaderText>
                        <HeaderText>Our ranges</HeaderText>
                        <HeaderTitle>Caravan</HeaderTitle>
                    </HeaderTextContainer>
                </HeaderImg>
            </HeaderContainer>
        </div>
    );
};

export default CaravanHeader;
