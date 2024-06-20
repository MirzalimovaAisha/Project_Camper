import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 90px;
    background: #fff;
    display: flex;
`;
export const NavbarSmallContainer = styled.div`
    z-index: 999;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    height: 90px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 1245px) {
    }
`;
export const NavbarMenu = styled.div`
    display: flex;
    gap: 68px;
    @media only screen and (max-width: 1245px) {
        display: none;
    }
`;
export const HamburgerMenu1 = styled.div`
    display: none;
    @media only screen and (max-width: 1245px) {
        display: flex;
    }
    @media only screen and (max-width: 700px) {
        display: none;
    }
`;
export const HamburgerMenuPhone = styled.div`
    display: none;
    @media only screen and (max-width: 700px) {
        display: flex;
    }
`;
export const NavbarLogo = styled.div`
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    gap: 16px;
    align-items: center;
`;
export const NavbarRight = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;
export const NavbarImg = styled.img`
    @media only screen and (max-width: 700px) {
        display: ${(props) => (props.$user ? "none" : "")};
    }
`;
export const NavbarText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media only screen and (max-width: 700px) {
        display: ${(props) => (props.$en ? "none" : "")};
    }
`;
export const Imgwrapper = styled.img``;
