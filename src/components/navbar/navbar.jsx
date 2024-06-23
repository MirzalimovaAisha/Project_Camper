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
import { Link, useNavigate } from "react-router-dom";
import downArrow from "../../assets/down-arrow.svg";
import cart from "../../assets/cart.png";
import user from "../../assets/user.svg";
import MobileMenu from "../navbar/mobileMenu";
import TabletMenu from "../navbar/tabletMenu";
import socialImgs from "../../assets/login-social.png";
import {
    CreateAccountButton,
    LoginInput,
    LoginLines,
    LoginText,
    SignInButton,
    SpaceBetweenWrapper,
} from "../../style/style";

// joy
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleCreateAccountClick = () => {
        setOpen(false);
        navigate("/registrate");
    };
    return (
        <div>
            <NavbarContainer>
                <NavbarSmallContainer>
                    <NavbarLogo>
                        <HamburgerMenu1>
                            <TabletMenu />
                        </HamburgerMenu1>
                        <Link to={"/"}>
                            <NavbarLogo>
                                <div>Camper</div>
                            </NavbarLogo>
                        </Link>
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
                        <NavbarImg
                            $user
                            src={user}
                            variant="outlined"
                            color="neutral"
                            onClick={() => setOpen(true)}
                        />
                        <React.Fragment>
                            <Modal
                                aria-labelledby="modal-title"
                                aria-describedby="modal-desc"
                                open={open}
                                onClose={() => setOpen(false)}
                                disableAutoFocus
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: "9999999999",
                                }}
                            >
                                <Sheet
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "md",
                                        p: 3,
                                        // boxShadow: "lg",
                                        padding: "33px",
                                        border: "none",
                                        width: "500px",
                                        boxShadow:"0px 0px 5px 0px rgba(0, 0, 0, 0.10)"
                                    }}
                                >
                                    <h2
                                        style={{
                                            marginBottom: "25px",
                                            fontFamily: "Open Sans",
                                        }}
                                    >
                                        Sign in
                                    </h2>
                                    <LoginText $title>Email</LoginText>
                                    <LoginInput
                                        type="email"
                                        id="email"
                                        placeholder="Your email"
                                    />

                                    <LoginText $title>Password</LoginText>
                                    <LoginInput $last
                                        type="password"
                                        id="pwd"
                                        placeholder="Your password"
                                    />

                                    <SpaceBetweenWrapper>
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="keep-me"
                                            />
                                            <LoginText htmlFor="keep-me">
                                                Keep me logged in
                                            </LoginText>
                                        </div>
                                        <div>
                                            <LoginText>
                                                Forget your password ?
                                            </LoginText>
                                        </div>
                                    </SpaceBetweenWrapper>

                                    <SignInButton>sign in</SignInButton>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: "10px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <LoginLines />
                                        <p
                                            style={{
                                                color: "#6D6D6D",
                                                fontWeight: "600",
                                                fontFamily: "Open Sans",
                                                fontSize: "14px",
                                            }}
                                        >
                                            OR
                                        </p>
                                        <LoginLines />
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            margin: "20px",
                                        }}
                                    >
                                        <img src={socialImgs} alt="" />
                                    </div>

                                    <Link to={"/registrate"}>
                                        <CreateAccountButton
                                            onClick={handleCreateAccountClick}
                                        >
                                            create account
                                        </CreateAccountButton>
                                    </Link>
                                </Sheet>
                            </Modal>
                        </React.Fragment>
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
