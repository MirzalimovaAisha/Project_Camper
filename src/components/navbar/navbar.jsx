import React from "react";
import {
    HamburgerMenu1,
    HamburgerMenuPhone,
    Imgwrapper,
    NavbarContainer,
    NavbarImg,
    NavbarLogo,
    NavbarMenu,
    NavbarRight,
    NavbarSmallContainer,
    NavbarText,
} from "../../style/navbarStyle";
import { Link } from "react-router-dom";
import downArrow from "../../assets/down-arrow.svg";
import cart from "../../assets/cart.png";
import user from "../../assets/user.svg";
import MobileMenu from "../navbar/mobileMenu";
import TabletMenu from "../navbar/tabletMenu";

const Navbar = () => {
    return (
        <div>
            <NavbarContainer>
                <NavbarSmallContainer>
                    <NavbarLogo>
                        <HamburgerMenu1>
                            <TabletMenu />
                        </HamburgerMenu1>
                        <div>Camper</div>
                    </NavbarLogo>
                    <NavbarMenu>
                        <Link to={"/motor"}>
                            <NavbarText>
                                <div>Motor</div>
                                <Imgwrapper src={downArrow} />
                            </NavbarText>
                        </Link>
                        <Link to={"/caravan"}>
                            <NavbarText>
                                <div>Caravan</div>
                                <Imgwrapper src={downArrow} />
                            </NavbarText>
                        </Link>
                        <Link to={"/tuning"}>
                            <NavbarText>
                                <div>Tuning</div>
                                <Imgwrapper src={downArrow} />
                            </NavbarText>
                        </Link>
                        <Link to={"/used-car"}>
                            <NavbarText>
                                <div>Used Car</div>
                                <Imgwrapper src={downArrow} />
                            </NavbarText>
                        </Link>
                        <Link to={"/camping-place"}>
                            <NavbarText>
                                <div>Camping Place</div>
                            </NavbarText>
                        </Link>
                    </NavbarMenu>

                    <NavbarRight>
                        <NavbarImg src={cart} />
                        <NavbarImg $user src={user} />
                        <HamburgerMenuPhone>
                            <MobileMenu />
                        </HamburgerMenuPhone>
                        <NavbarText $en>
                            <div>En</div>
                            <Imgwrapper src={downArrow} />
                        </NavbarText>
                    </NavbarRight>
                </NavbarSmallContainer>
            </NavbarContainer>
        </div>
    );
};

export default Navbar;
