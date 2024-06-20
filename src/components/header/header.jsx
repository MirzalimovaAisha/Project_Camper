import React from "react";
import { HeaderContainer, HeaderImg, HeaderText, HeaderTextContainer, HeaderTitle } from "../../style/headerStyle";
// import headerImg from "../../assets/header-img13.jpg"
// import headerImg from "../../assets/header-img14.jpg"
import headerImg from "../../assets/header-img25.jpg"
// import headerImg from "../../assets/header-img26.jpg"
// import headerImg from "../../assets/header-img32.jpg"

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderImg $bottom style={{backgroundImage:`url(${headerImg})`, backgroundPosition:" center bottom "}}>
          <HeaderTextContainer>
            <HeaderText  $text1>Home / Motors</HeaderText>
            <HeaderText>Our ranges</HeaderText>
            <HeaderTitle>Motors</HeaderTitle>
          </HeaderTextContainer>
        </HeaderImg>
      </HeaderContainer>
    </div>
  );
};

export default Header;
