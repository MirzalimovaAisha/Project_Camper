import styled from "styled-components";
// import carinfoImg from "../assets/carInfoHeader.png"
// import carinfoImg from "../assets/header-img16.webp"
// import carinfoImg from "../assets/header-img18.jpg"
import carinfoImg from "../assets/header-img19.jpg"

export const HeaderContainer = styled.div`
    width: 100%;
    height: ${(props)=> props.$main ? "525px" : "450px"};
`;

export const HeaderImg = styled.div`
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props)=> props.$bottom ? "center bottom" : "center center"};
`
export const HeaderTextContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #00000069;
`
export const HeaderText = styled.div`
    font-weight: ${(props)=> props.$text1 ? "500" : "700"};
    font-size: ${(props)=> props.$text1 ? "16px" : "27px"};
    margin-top: ${(props)=> props.$text1 ? "" : "13px"};
    margin-bottom: ${(props)=> props.$campingPlace ? "40px" : ""};
`
export const HeaderTitle = styled.div`
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    

`
export const CarinfoHeaderContainer = styled.div`
    background-image: url(${carinfoImg});
    background-repeat: no-repeat;
    width: 100%;
    height: 704px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center bottom;
    @media only screen and (max-width:700px){
        height: 350px;
    }
`
export const CarinfoTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00000099;
    width: 100%;
    height: 100%;

`
export const CarinfoName = styled.div`
    color: #FFF;
    font-size: 60px;
    font-weight: 700;
    @media only screen and (max-width:700px){
        font-size: 40px;
    }
`
export const CarinfoButtons = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 31px;
`
export const CarinfoButton = styled.button`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    width: 181.5px;
    height: 50.014px;
    color: ${(props)=> props.$carinfoItem ? "#006DAB" : "#fff"};
    background: ${(props)=> props.$blue ? "#006DAB" : "none"};
    border: ${(props)=> props.$white ?  "2px solid #fff" :"2px solid #006DAB"};
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background: #005586;
        transition: all 0.2s;
        color: #fff;
        border: none;
    }
`