import React from "react";
import {
  HeaderContainer,
  HeaderImg,
  HeaderText,
  HeaderTextContainer,
  HeaderTitle,
} from "../../style/headerStyle";

// import headerImg from "../../assets/header-img2.jpg"
// import headerImg from "../../assets/header-img24.jpg"
// import headerImg from "../../assets/header-img26.jpg"
// import headerImg from "../../assets/header-img27.jpg"
// import headerImg from "../../assets/header-img29.jpg"
import headerImg from "../../assets/header-img31.jpg"

const UsedCarHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderImg 
          style={{
            backgroundImage: `url(${headerImg})`,
          }}
        >
          <HeaderTextContainer>
            <HeaderText  $text1>Home / Used Car</HeaderText>
            <HeaderText>Our ranges</HeaderText>
            <HeaderTitle>Used Car</HeaderTitle>
          </HeaderTextContainer>
        </HeaderImg>
      </HeaderContainer>
    </div>
  );
};

export default UsedCarHeader;
