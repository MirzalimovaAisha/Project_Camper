import React from "react";
import {
  FooterContactIcons,
  FooterContainer,
  FooterItemTexts,
  FooterItemTitle,
  FooterItems,
  FooterLogo,
  FooterText,
} from "../../style/footerStyle";
import { Imgwrapper } from "../../style/navbarStyle";
import youtube from "../../assets/footer-img-1.png";
import instagram from "../../assets/footer-img-2.png";
import naver from "../../assets/footer-img-3.png";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLogo>Camper</FooterLogo>

        <FooterItems>
          <FooterItemTitle>Services</FooterItemTitle>
          <FooterItemTexts>
            <div>Camping</div>
            <div>Lodging</div>
            <div>Harbor</div>
            <div>Day Use</div>
          </FooterItemTexts>
        </FooterItems>

        <FooterItems>
          <FooterItemTitle>Menu</FooterItemTitle>
          <FooterItemTexts>
            <div>About</div>
            <div>Services</div>
            <div>Booking</div>
            <div>Blog</div>
          </FooterItemTexts>
        </FooterItems>

        <FooterItems $social>
          <FooterItemTitle>Contact</FooterItemTitle>
          <FooterItemTexts>
            <FooterContactIcons>
              <Imgwrapper src={youtube} />
              <Imgwrapper src={instagram} />
              <Imgwrapper src={naver} />
            </FooterContactIcons>
            <FooterText>021 Korea Seul, LA</FooterText>
            <FooterText>camper@example.com</FooterText>
            <FooterText>(021) 345-6789-99</FooterText>
          </FooterItemTexts>
        </FooterItems>
      </FooterContainer>
    </div>
  );
};

export default Footer;
