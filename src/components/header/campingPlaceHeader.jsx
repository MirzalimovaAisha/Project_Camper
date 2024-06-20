import React from "react";
import {
    HeaderContainer,
    HeaderImg,
    HeaderText,
    HeaderTextContainer,
    HeaderTitle,
} from "../../style/headerStyle";

import headerImg from "../../assets/campingPlace-header1.jpg"
// import headerImg from "../../assets/campingPlace-header2.jpg"
// import headerImg from "../../assets/campingPlace-header3.webp"

const CampingPlaceHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderImg 
                    style={{
                        backgroundImage: `url(${headerImg})`,
                    }}
                >
                    <HeaderTextContainer>
                        <HeaderText $campingPlace  $text1>Home / Camping Place</HeaderText>
                        <HeaderTitle>Camping Place</HeaderTitle>
                    </HeaderTextContainer>
                </HeaderImg>
            </HeaderContainer>
        </div>
    );
};

export default CampingPlaceHeader;
