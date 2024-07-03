import styled from "styled-components";

export const MotorsContainer = styled.div`
    margin-top: ${(props) => (props.$campingPlace ? "" : "57px")};
    display: flex;
    gap: 28px;
    justify-content: center;
`;
export const MotorsLeftContainer = styled.div`
    width: 242px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 3px;
    @media only screen and (max-width: 1245px) {
        display: none;
    }
`;
export const MotorRightTitle = styled.div`
    color: var(--text, #373737);
    font-size: 18px;
    font-weight: 600;
    line-height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    padding-bottom: 15px;
    margin-bottom: 30px;
`;
export const MotorsLeftTextInputContainer = styled.div`
    display: flex;
    gap: 25px;
`;
export const MotorsLeftTextInput = styled.div`
    color: var(--text, #373737);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 3px;

    input {
        width: 91px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid rgba(55, 55, 55, 0.6);
        background: none;
        padding: 10px;
    }
    input:focus {
        outline: none;
    }
`;
export const MotorsLeftCheckInputContainer = styled.div`
    display: flex;
    gap: ${(props) => (props.$campingPlace ? "20px" : "10px")};
    flex-direction: ${(props) => (props.$campingPlace ? "" : "column")};
    align-items: ${(props) => (props.$campingPlace ? "center" : "")};
`;
export const MotorsCheckBoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #373737;
    font-size: 14px;
    font-weight: ${(props) => (props.$campingPlace ? "400" : "500")};

    input {
        width: 22px;
        height: 22px;
    }
`;
export const MotorsLeftButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const MotorLeftButton = styled.button`
    border-radius: 60px;
    background: ${(props) => (props.$orange ? "#FF7A00" : "#006DAB")};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 8px 31px;
    color: #fff;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`;
export const MotorsCompare = styled.div`
    color: var(--blue, #006dab);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const MotorCompareImg = styled.img`
    width: 85px;
`;
export const MotorCompareContainer = styled.div`
    display: flex;
`;
export const MotorsRightContainer = styled.div`
    width: 956px;
    display: flex;
    flex-direction: column;
    gap: 37px;
    align-items: center;
    @media only screen and (max-width: 1245px) {
        /* width: 674px; */
        width: 100%;
        padding: 50px;
    }
    @media only screen and (max-width: 700px) {
        width: 674px;
        padding: 0;
        /* padding: 50px; */
    }
`;

export const MotorRightBox = styled.div`
    display: ${(props) => (props.$campingPlaceSmall ? "flex" : "grid")};
    grid-template-columns: ${(props) =>
        props.$campingPlace ? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
    gap: ${(props) => (props.$campingPlaceSmall ? "10px" : "20px")};
    row-gap: ${(props) => (props.$campingPlace ? "40px" : "")};
    justify-content: center;
    transition: all 0.2s;
    @media only screen and (max-width: 1245px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }
    @media only screen and (max-width: 819px) {
        grid-template-columns: ${(props) =>
            props.$campingPlace ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
    }
    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const MotorImgs = styled.img`
    width: 200px;
    height: 121px;
    @media only screen and (max-width: 1245px) {
        width: ${(props) => (props.$VMenu ? "200px" : "271px")};
        height: ${(props) => (props.$VMenu ? "121px" : "177px")};
    }
    @media only screen and (max-width: 700px) {
        width: ${(props) => (props.$VMenu ? "100px" : "")};
        height: ${(props) => (props.$VMenu ? "85px" : "")};
    }
`;
export const MotorItemImg = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    align-items: center;
    padding-left: ${(props) => (props.$vMenu ? "18px" : "")};
`;
export const MotorItemTexts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: ${(props) => (props.$vMenu ? "30px 30px 30px 21px" : "")};
    @media only screen and (max-width: 700px) {
        padding: ${(props) => (props.$vMenu ? "20px" : "")};
    }
`;
export const MotorItems = styled.div`
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 23px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 223px;
    transition: all 0.4s;

    &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
    }
    @media only screen and (max-width: 1245px) {
        width: 327px;
        height: 430px;
    }
`;
export const MotorName = styled.div`
    color: var(--text, #373737);
    font-weight: 600;
    font-size: ${(props) => (props.$campingPlace ? "22px" : "16px")};
    margin-top: ${(props) => (props.$vMenu ? "" : "10px")};
    margin-bottom: ${(props) => (props.$vMenu ? "" : "5px")};
    @media only screen and (max-width: 1245px) {
        margin-top: ${(props) => (props.$gridMenu ? "30px" : "")};
        font-family: ${(props) => (props.$campingPlace ? "" : "Open Sans")};
        font-size: ${(props) => (props.$campingPlace ? "22px" : "18px")};
    }
`;
export const MotorBrand = styled.div`
    color: var(--text, #373737);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${(props) => (props.$location ? "16px" : "12px")};
    margin-bottom: ${(props) => (props.$vMenu ? "45px" : "")};
`;
export const MotorRating = styled.div`
    display: flex;
    gap: 3px;
    align-items: center;
`;
export const MotorsCost = styled.div`
    margin-top: ${(props) => (props.$carinfoCost ? "" : "18px")};
    margin-bottom: ${(props) => (props.$carinfoCost ? "" : "13px")};
    color: #006dab;
    font-size: ${(props) => (props.$carinfoCost ? "30px" : "22px")};
    font-weight: 700;
    @media only screen and (max-width: 700px) {
        font-size: ${(props) => (props.$carinfoCost ? "22px" : "")};
        font-size: ${(props) => (props.$cart ? "30px" : "")};
    }
`;
export const MotorsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
`;
export const BlueButton = styled.button`
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    font-family: Montserrat;
    cursor: pointer;
    width: 100%;
    background: ${(props) => (props.$sendButton ? "#006DAB" : "#fff")};
    color: ${(props) => (props.$sendButton ? "#fff" : "#006dab")};
    /* width: ${(props) => (props.$sendButton ? "100%" : "94px")}; */
    font-size: ${(props) => (props.$sendButton ? "16px" : "14px")};
    height: ${(props) => (props.$sendButton ? "50px" : "35px")};
    font-weight: ${(props) => (props.$sendButton ? "400" : "700")};

    &:hover {
        background: #006dab;
        color: #fff;
        transition: all 0.2s;
    }

    @media only screen and (max-width: 1245px) {
        /* height: 45px; */
        height: ${(props) => (props.$vMenu ? "35px" : "45px")};
        font-size: 16px;
        font-family: "Open Sans";
    }
`;
export const MotorsRightContainerTop = styled.div`
    border-bottom: 1px solid rgba(55, 55, 55, 0.5);
    padding: 0px 0px 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 704px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const MotorLeftTopLeft = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 205px;
`;
export const MotorLeftTopLeftText = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const MotorLeftTopLeftRight = styled.div`
    display: none;
    @media only screen and (max-width: 703px) {
        display: flex;
    }
`;
export const MotorItemNumbers = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.$number ? "#006DAB" : "#373737")};
`;
export const MotorLeftTopRight = styled.div`
    color: var(--text, #373737);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    gap: 15px;
    align-items: center;
`;
export const MotorLeftInput = styled.div`
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    width: ${(props) => (props.$small ? "80px" : "227px")};
    height: 30px;
    display: flex;
    align-items: center;
    input {
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        padding: 8px 10px;

        color: rgba(55, 55, 55, 0.6);
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
    }
`;
export const MotorLeftDownArrow = styled.div`
    border-left: 1px solid rgba(55, 55, 55, 0.3);
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30px;
    border-radius: 0px 4px 4px 0px;
    padding: 8px 7px;
`;
export const MotorLeftImgs = styled.div`
    background: #fdfdfd;
    width: 40px;
    height: 30px;
    border-radius: ${(props) =>
        props.$right ? "0px 5px 5px 0px" : "5px 0px 0px 5px"};
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        cursor: pointer;
    }
`;
export const MotorLeftInputImgs = styled.div`
    display: flex;
    @media only screen and (max-width: 703px) {
        display: ${(props) => (props.$desktop ? "none" : "flex")};
    }
`;
export const CarMenuContainer = styled.div`
    display: none;
    margin-left: 10px;
    @media only screen and (max-width: 1245px) {
        display: flex;
    }
`;

export const CarinfoContainer = styled.div`
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CarinfoInformation = styled.div`
    display: flex;
    gap: 20px;
    @media only screen and (max-width: 1245px) {
        flex-direction: column;
    }
`;
export const CarinfoImg = styled.img`
    width: 626px;
    height: 381px;
    @media only screen and (max-width: 700px) {
        width: 354px;
        height: 224px;
    }
`;
export const CarinfoInfoTexts = styled.div`
    width: 600px;
    height: 360px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 20px;
    @media only screen and (max-width: 700px) {
        width: 354px;
        height: 309px;
    }
`;
export const CarinfoInfoTextTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #3737374d;
    padding-bottom: 10px;
    margin-bottom: 5px;
    padding: 0px 5px 10px 5px;
`;
export const CarinfoInfoTopLeftTexts = styled.div`
    color: #000;
    font-size: 18px;
    font-weight: 400;
`;
export const CarinfoInfoName = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`;
export const CarinfoInfoTextBottom = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 0px 5px;
`;
export const CarinfoInfoTitle = styled.div`
    flex: 1;
    display: flex;
    color: ${(props) => (props.$title2 ? "#373737CC" : "#373737")};
    font-weight: 500;
    @media only screen and (max-width: 700px) {
        justify-content: ${(props) => (props.$title2 ? "flex-end" : "")};
    }
`;
export const CarinfoBoxContainer = styled.div`
    margin-top: 80px;
    width: 1366px;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    @media only screen and (max-width: 1362px) {
        width: auto;
    }
`;
export const CarinfoItems = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1245px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 700px) {
        width: 354px;
    }
`;
export const CarinfoItemImg = styled.img`
    display: ${(props) => (props.$mobile ? "none" : "flex")};

    @media only screen and (max-width: 1245px) {
        border-radius: 10px;
        display: ${(props) => (props.$mobile ? "flex" : "none")};
    }
`;
export const CarinfoItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 70px;
    @media only screen and (max-width: 1245px) {
        padding: 20px 0px 80px;
    }
`;
export const CarinfoItemText = styled.div`
    color: #373737;
    font-size: ${(props) => (props.$title ? "35px" : "16px")};
    font-weight: ${(props) => (props.$title ? "600" : "400")};
    line-height: ${(props) => (props.$title ? "" : "24px")};
`;
export const MotorLeftLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(55, 55, 55, 0.3);
    margin-top: 5px;
    margin-bottom: 25px;
`;
export const CarinfoTabsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${(props) => (props.$tabItem ? "#006DAB33" : "")};
    @media only screen and (max-width: 1339px) {
        padding-left: ${(props) => (props.$tabItem ? "10%" : "")};
    }
    @media only screen and (max-width: 700px) {
        padding-left: ${(props) => (props.$tabItem ? "0px" : "")};
    }
`;

export const ItemReviewTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${(props) => (props.$map ? "" : "100%")};
    @media only screen and (max-width: 1339px) {
        /* width: ${(props) => (props.$map ? "" : "700px")}; */
    }
    @media only screen and (max-width: 700px) {
        width: ${(props) => (props.$map ? "" : "100%")};
        flex-direction: ${(props) => (props.$map ? "column" : "")};
        align-items: ${(props) => (props.$map ? "center" : "")};
    }
`;
export const ItemReviewBoxContainer = styled.div`
    margin-top: 30px;
    display: ${(props) => (props.$itemReview ? "" : "flex")};
    width: ${(props) => (props.$itemReview ? "100%" : "1226px")};
    justify-content: space-between;
    @media only screen and (max-width: 1245px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 63px;
    }
    @media only screen and (max-width: 700px) {
        width: ${(props) => (props.$itemReview ? "354px" : "100%")};
    }
`;
export const ItemReviewItems = styled.div`
    border-bottom: 1px solid #37373726;
    padding-bottom: ${(props) => (props.$campingPlace ? "10px" : "20px")};
    width: ${(props) => (props.$qaTab ? "707px" : "100%")};
    display: ${(props) => (props.$qaTab ? "" : "flex")};
    justify-content: ${(props) => (props.$qaTab ? "" : "space-between")};
    padding: ${(props) => (props.$qaTab ? "0px 0px 10px 20px" : "")};
    margin-bottom: ${(props) => (props.$qaTab ? "25px" : "")};
    flex-direction: ${(props) => (props.$campingPlace ? "column" : "")};
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: ${(props) => (props.$campingPlace ? "" : "center")};
        width: ${(props) => (props.$qaTab ? "100%" : "")};
        padding: 0px 0px 10px;
    }
`;
export const ItemReviewImgs = styled.img`
    width: 150px;
    height: 100px;
    @media only screen and (max-width: 700px) {
        width: 349.683px;
        height: 157.168px;
    }
`;
export const ItemReviewLeft = styled.div`
    display: flex;
    gap: 15px;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;
export const ItemReviewInfoTextLeft = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => (props.$company ? "#373737CC" : "#373737")};
    font-size: ${(props) => (props.$company ? "16px" : "18px")};
    margin-top: ${(props) => (props.$text ? "16px" : "")};
    /* @media only screen and (max-width: 1339px) {
        width: ${(props) => (props.$text ? "342px" : "")};
    } */
`;
export const ItemReviewRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-right: 60px;
    @media only screen and (max-width: 700px) {
        padding: 0px;
        flex-direction: row;
        gap: 50px;
        margin-top: 20px;
    }
`;
export const ItemReviewRightTexts = styled.div`
    display: flex;
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
`;
export const ItemReviewRightNumbers = styled.div`
    color: #373737;
    margin-left: 10px;
    width: max-content;
`;
export const QuestionText = styled.div`
    color: ${(props) => (props.$name ? "#37373780" : "#373737")};
    font-size: ${(props) => (props.$name ? "16px" : "20px")};
    font-weight: ${(props) => (props.$name ? "500" : "600")};
`;
export const CarinfoTabSend = styled.div`
    border-radius: 10px;
    border: 1px solid rgba(0, 109, 171, 0.1);
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 30px;
    color: var(--text-color, #023047);
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    width: 450px;
    height: 432px;

    @media only screen and (max-width: 1245px) {
        width: 674px;
    }
    @media only screen and (max-width: 700px) {
        width: 390px;
    }
`;

export const CarinfoInput = styled.input`
    padding: ${(props) => (props.$big ? "18px 16px 90px" : "18px 16px")};
    border-radius: 8px;
    border: none;
    color: #373737b2;
    background: rgb(130 130 130 / 10%);
`;
export const CarinfoInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px 25px 0px;
    gap: 10px;
`;
export const AccordionContainer = styled.div`
    width: 727px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media only screen and (max-width: 1245px) {
        width: 100%;
    }
`;
export const CarinfoContactMap = styled.div`
    width: 707px;
    height: 298px;
    @media only screen and (max-width: 1245px) {
        width: 674px;
    }
    @media only screen and (max-width: 700px) {
        width: 354px;
        height: 298px;
    }
`;
export const CarinfoContactTextContainer = styled.div`
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    width: 340px;
    height: 109px;
    padding: 15px 25px;
    margin-top: 25px;
    @media only screen and (max-width: 1245px) {
        width: 323.94px;
    }
    @media only screen and (max-width: 700px) {
        width: 354px;
    }
`;
export const CarinfoContactText = styled.div`
    line-height: 130%;
    color: ${(props) => (props.$text1 ? "#666" : "#1E1C1C")};
    font-weight: ${(props) => (props.$text1 ? "400" : "500")};
    font-size: ${(props) => (props.$text1 ? "14px" : "18px")};
    margin-bottom: ${(props) => (props.$text1 ? "9px" : "")};
`;
export const CampingImgs = styled.img`
    width: ${(props) => (props.$small ? "195px" : "395px")};
    height: ${(props) => (props.$small ? "147px" : "300px")};
    object-fit: cover;
    border-radius: 10px;
`;
export const CampingFont = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => (props.$mainHeader ? "#00000066" : "#0000007a")};
    border-radius: ${(props) => (props.$mainHeader ? "" : "10px")};
    transition: all 0.4s;
    &:hover {
        background: ${(props) => (props.$mainHeader ? "" : "none")};
    }
`;
export const CampingPlaceItem = styled.div`
    width: min-content;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
        transform: ${(props) => (props.$small ? "" : "scale(1.07)")};
        transition: all 0.4s;
    }
`;

export const CampingPlaceCarinfoContainer = styled.div`
    margin-top: ${(props) => (props.$campingPlace ? "" : "40px")};
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1226px;
    font-size: 14px;
    color: #373737;

    @media only screen and (max-width: 1245px) {
        padding: ${(props) => (props.$campingPlace ? "" : "0px 70px")};
        width: 100%;
    }
    @media only screen and (max-width: 700px) {
        padding: ${(props) => (props.$campingPlace ? "" : "0px 30px")};
    }
`;

export const BlueText = styled.div`
    color: #006dab;
    font-weight: ${(props) => (props.$bigText ? "500" : "400")};
    font-size: ${(props) => (props.$bigText ? "16px" : "14px")};
    margin-bottom: ${(props) => (props.$description ? "10px" : "")};
`;

export const OrangeButton = styled.button`
    background: none;
    border-radius: 5px;
    border: 1px solid #ff7a00;
    padding: 3px 18px;
    font-size: 16px;
    font-weight: 500;
    color: #ff7a00;
    cursor: pointer;
`;

export const CampingInformationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    width: 600px;
    @media only screen and (max-width: 1245px) {
        width: auto;
    }
`;
export const CampinInformation = styled.div`
    display: flex;
    gap: 11px;
    align-items: center;
`;
export const CampingPlaceMap = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 1226px;
    height: 552px;
    @media only screen and (max-width: 1245px) {
        /* width: 674px; */
        width: 100%;
    }
`;

export const CampingPlaceImgs = styled.div`
    display: flex;
    gap: 10px;
    @media only screen and (max-width: 1245px) {
        object-fit: cover;
        overflow: scroll;
        width: 100%;
        justify-content: start;
        padding: 0px 10px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props) => (props.$videos ? "80px" : "50px")};
`;
export const SectionTitle = styled.div`
    color: #373737;
    font-weight: 700;
    font-size: 28px;
    /* font-family: Gilroy; */
    border-bottom: 3px solid #ff7a00;
    padding: 0px 10px 4px;
    margin-bottom: 40px;
`;
export const MainCarousel = styled.div`
    width: 1200px;
    @media only screen and (max-width: 1245px) {
        width: 784px;
    }
    @media only screen and (max-width: 700px) {
        width: 450px;
    }
`;
export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: fit-content;
`;
export const RecommendText = styled.div`
    display: flex;
    gap: 20px;
    color: #373737;
    font-size: ${(props) => (props.$model ? "16px" : "18px")};
    font-weight: ${(props) => (props.$model ? "500" : "600")};
`;
export const MainVideoContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.$blogs ? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
    gap: ${(props) => (props.$blogs ? "10px" : "20px")};
    :hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 1245px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const BlogsText = styled.div`
    color: ${(props) => (props.$orange ? "#FF7A00" : "$000")};
    font-weight: ${(props) => (props.$title ? "600" : "400")};
    font-size: ${(props) => (props.$title ? "28px" : "17px")};
    width: ${(props) => (props.$texts ? "380px" : "")};
    margin-bottom: ${(props) => (props.$title ? "35px" : "10px")};
    @media only screen and (max-width: 1245px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    background: #3737371a;
    margin: ${(props) =>
        props.$last ? "10px 0px 15px 0px" : "10px 0px 20px 0px"};
    font-size: 15px;
    font-family: "Open Sans";
    color: #37373799;
    &:focus {
        outline: none;
    }
`;

export const SpaceBetweenWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
        gap: 7px;
    }
    input {
        height: 20px;
        width: 20px;
        background: #37373726 !important;
        border: none !important;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Open Sans";
    }
`;

export const CheckBox2 = styled.input`
    height: 20px;
    width: 20px;
    background: #3737371a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const SignInButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: #006dab;
    border-radius: 10px;
    margin: 25px 0 0;
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    font-family: "Open Sans";
`;

export const LoginLines = styled.div`
    border: 1px solid #37373726;
    width: 100px;
`;

export const CreateAccountButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: none;
    border: 2px solid #006dab;
    border-radius: 10px;
    margin: 15px 0px 0px 0px;
    color: #006dab;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background: #006dab;
        color: white;
        transition: all 0.2s;
    }
`;

export const LoginText = styled.div`
    color: ${(props) => (props.$title ? "#373737CC" : "#373737")};
    font-weight: ${(props) => (props.$title ? "600" : "400")};
    font-size: ${(props) => (props.$title ? "16px" : "14px")};
    margin: ${(props) => (props.$title ? "0px 0px 0px 10px" : "")};
    font-family: "Open Sans";
`;
export const RegistrateContainer = styled.div`
    background: -moz-linear-gradient(
        45deg,
        #006dab 0%,
        #26c9f2 29%,
        #f211d6 66%,
        #006dab 100%
    );
    background: -webkit-linear-gradient(
        45deg,
        #006dab 0%,
        #26c9f2 29%,
        #f211d6 66%,
        #006dab 100%
    );
    background: linear-gradient(
        45deg,
        #006dab 0%,
        #26c9f2 29%,
        #f211d6 66%,
        #006dab 100%
    );
    height: 100vh;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-evenly;
    overflow: hidden;
    position: relative;
    &::before,
    &::after {
        content: "";
        width: 70vmax;
        height: 70vmax;
        position: absolute;
        background: rgba(255, 255, 255, 0.07);
        left: -20vmin;
        top: -20vmin;
        animation: morph 15s linear infinite alternate, spin 20s linear infinite;
        z-index: 1;
        will-change: border-radius, transform;
        transform-origin: 55% 55%;
        pointer-events: none;
    }
    &::after {
        width: 70vmin;
        height: 70vmin;
        left: auto;
        right: -10vmin;
        top: auto;
        bottom: 0;
        animation: morph 10s linear infinite alternate,
            spin 26s linear infinite reverse;
        transform-origin: 20% 20%;
    }
    @-webkit-keyframes Gradient {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

    @keyframes morph {
        0% {
            border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
        }
        100% {
            border-radius: 40% 60%;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
    .st0 {
        display: none;
    }
    .st1 {
        display: inline;
    }
    .st2 {
        opacity: 0.29;
    }
    .st3 {
        fill: #ffffff;
    }
    .st4 {
        clip-path: url(#SVGID_2_);
        fill: #ffffff;
    }
    .st5 {
        clip-path: url(#SVGID_4_);
    }
    .st6 {
        clip-path: url(#SVGID_6_);
    }
    .st7 {
        clip-path: url(#SVGID_8_);
    }
    .st8 {
        clip-path: url(#SVGID_10_);
    }
    .st9 {
        fill: none;
    }
    .st10 {
        clip-path: url(#SVGID_12_);
    }
    .st11 {
        opacity: 0.7;
    }
    .st12 {
        clip-path: url(#SVGID_14_);
    }
    .st13 {
        opacity: 0.2;
    }
    .st14 {
        clip-path: url(#SVGID_16_);
    }
    .st15 {
        opacity: 0.3;
        fill: #ffffff;
        enable-background: new;
    }
`;

export const RegistrateContainerItem = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Open Sans";
    z-index: 1;
    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;

        img {
            cursor: pointer;
        }
    }
`;

export const BlogContainer = styled.div`
    display: flex;
    gap: 33px;
    @media only screen and (max-width: 1245px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`;

export const VMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    @media only screen and (max-width: 700px) {
        width: max-content;
    }
`;
export const VMenuItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const VmenuCost = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: #006dab;
`;
export const ItemReviewContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1250px;
    @media only screen and (max-width: 1245px) {
        padding: 0px 40px;
    }
    @media only screen and (max-width: 700px) {
        padding: 0px 20px;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.$container ? "column" : "")};
    align-items: ${(props) => (props.$container ? "center" : "")};
    justify-content: center;
    margin-top: ${(props) => (props.$container ? "40px" : "")};
    gap: ${(props) => (props.$container ? "" : "45px")};
    /* overflow: ${(props) => (props.$container ? "hidden" : "")}; */
    position: relative;
    @media only screen and (max-width: 1245px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CartImgContainer = styled.div`
    width: 811px;
    height: 476px;
    /* position: fixed;
    left:200px; */
    /* left: 20%; */
    @media only screen and (max-width: 1245px) {
        /* position: relative !important;
        left: 0; */
    }
    @media only screen and (max-width: 817px) {
        width: 600px;
        height: 350px;
    }
    @media only screen and (max-width: 700px) {
        width: 354px;
        height: 258px;
    }
`;
export const CartPurchase = styled.div`
    height: 50px;
    width: 350px;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #373737;
    div {
        font-weight: 500;
        font-size: 16px;
    }
    p {
        font-weight: 600;
    }
`;
export const CartTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 311px;
    /* margin-left: 700px; */
    /* padding: 0px 0px 150px; */
    overflow-y: scroll;
    height: 476px;
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media only screen and (max-width: 1245px) {
        /* overflow-y: visible; */
        margin-left: 0;
        height: auto;
        width: 678px;
    }
    @media only screen and (max-width: 700px) {
        width: 100%;
        padding: 0px 30px;
    }
`;
export const CartTextItems = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CartTitleText = styled.div`
    color: ${(props) => (props.$cartName ? "#373737" : "#000")};
    font-weight: 600;
    font-size: ${(props) => (props.$cartName ? "30px" : "25px")};
    margin-bottom: ${(props) => (props.$cartName ? "12px" : "30px")};
    margin-top: ${(props) => (props.$cartName ? "" : "42px")};
    @media only screen and (max-width: 1245px) {
        margin-bottom: ${(props) => (props.$cartName ? "0" : "30px")};
    }
`;
export const CartNameText = styled.div`
    margin-top: ${(props) => (props.$firstText ? "20px" : "11px")};
    color: ${(props) => (props.$firstText ? "#373737" : "#373737B2")};
    font-size: ${(props) => (props.$firstText ? "17px" : "15px")};
    font-weight: 500;
`;

export const CartButton = styled.button`
    width: 100%;
    margin-top: ${(props) => (props.$continue ? "171px" : "40px")};
    padding: 10px;
    border-radius: 10px;
    background: #006dab;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.1s;
    &:hover {
        background: #005280;
    }
    @media only screen and (max-width: 1245px) {
        margin-top: ${(props) => (props.$continue ? "30px" : "40px")};
    }
`;

export const InputSelect = styled.select`
    width: 100%;
    padding: 15px 20px;
    margin: 10px 0px 20px;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    border: none;
    cursor: pointer;
`;

export const CartNameContainer = styled.div`
    @media only screen and (max-width: 1245px) {
        display: flex;
        justify-content: space-between;
    }
`;


