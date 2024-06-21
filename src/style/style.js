import styled from "styled-components";

export const MotorsContainer = styled.div`
    margin-top: ${(props)=> props.$campingPlace ? "" : "57px"};
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
    gap: ${(props)=> props.$campingPlace ? "20px" : "10px"};
    flex-direction: ${(props)=> props.$campingPlace ? "" : "column"};
    align-items: ${(props)=> props.$campingPlace ? "center" : ""};
`;
export const MotorsCheckBoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #373737;
    font-size: 14px;
    font-weight: ${(props)=> props.$campingPlace ? "400" : "500"};

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
        width: 674px;
    }
`;

export const MotorRightBox = styled.div`
    display: ${(props)=> props.$campingPlaceSmall ? "flex" : "grid"};
    grid-template-columns: ${(props) => props.$campingPlace ? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
    gap: ${(props)=> props.$campingPlaceSmall ? "10px" : "20px"};
    row-gap: ${(props) => (props.$campingPlace ? "40px" : "")};
    justify-content: center;
    @media only screen and (max-width: 1245px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }
    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const MotorImgs = styled.img`
    width: 200px;
    height: 121px;
    @media only screen and (max-width: 1245px) {
        width: 271px;
        height: 177px;
    }
`;
export const MotorItemImg = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;
export const MotorItemTexts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (max-width: 1245px) {
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
    margin-top: 10px;
    margin-bottom: 5px;
    @media only screen and (max-width: 1245px) {
        margin-top: ${(props) => (props.$campingPlace ? "" : "30px")};
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
    @media only screen and (max-width: 700px){
        font-size: ${(props)=> props.$carinfoCost ? "22px" : ""};
    }
`;
export const MotorsButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const BlueButton = styled.button`
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    font-family: Montserrat;
    cursor: pointer;

    background: ${(props) => (props.$sendButton ? "#006DAB" : "#fff")};
    color: ${(props) => (props.$sendButton ? "#fff" : "#006dab")};
    width: ${(props) => (props.$sendButton ? "100%" : "94px")};
    font-size: ${(props) => (props.$sendButton ? "16px" : "14px")};
    height: ${(props) => (props.$sendButton ? "50px" : "35px")};
    font-weight: ${(props) => (props.$sendButton ? "400" : "700")};

    &:hover {
        background: #006dab;
        color: #fff;
        transition: all 0.2s;
    }

    @media only screen and (max-width: 1245px) {
        height: 45px;
        font-size: 16px;
        font-family: "Open Sans";
        background: ${(props) => (props.$blue ? "#006DAB" : "")};
        color: ${(props) => (props.$blue ? "#fff" : "")};
        width: ${(props) => (props.$sendButton ? "100%" : "144.036px")};
    }
`;
export const MotorsRightContainerTop = styled.div`
    border-bottom: 1px solid rgba(55, 55, 55, 0.5);
    padding: 0px 0px 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 700px) {
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
    @media only screen and (max-width: 700px) {
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
    width: 40px;
    height: 30px;
    border-radius: ${(props) =>
        props.$right ? "0px 5px 5px 0px" : "5px 0px 0px 5px"};
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MotorLeftInputImgs = styled.div`
    display: flex;
    @media only screen and (max-width: 700px) {
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
    @media only screen and (max-width: 700px){
        justify-content: ${(props)=> props.$title2 ? "flex-end" : ""};
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
    display: flex;
    justify-content: center;
    background: ${(props) => (props.$tabItem ? "#006DAB33" : "")};
    @media only screen and (max-width: 1339px) {
        padding-left: ${(props) => (props.$tabItem ? "10%" : "")};
    }
    @media only screen and (max-width: 700px) {
        padding-left: ${(props) => (props.$tabItem ? "10%" : "")};
    }
`;

export const ItemReviewTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${(props) => (props.$map ? "" : "1250px")};
    @media only screen and (max-width: 1339px) {
        width: ${(props) => (props.$map ? "" : "700px")};
    }
    @media only screen and (max-width: 700px) {
        width: ${(props) => (props.$map ? "" : "400px")};
        flex-direction: ${(props) => (props.$map ? "column" : "")};
        align-items: ${(props) => (props.$map ? "center" : "")};
    }
`;
export const ItemReviewBoxContainer = styled.div`
    margin-top: 30px;
    display: ${(props) => (props.$itemReview ? "" : "flex")};
    width: ${(props) => (props.$itemReview ? "" : "1226px")};
    justify-content: space-between;
    @media only screen and (max-width: 1339px) {
        width: ${(props) => (props.$itemReview ? "" : "674px")};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 63px;
    }
    @media only screen and (max-width: 700px) {
        width: 354px;
    }
`;
export const ItemReviewItems = styled.div`
    border-bottom: 1px solid #37373726;
    padding-bottom: ${(props)=> props.$campingPlace ? "10px" : "20px"};
    width: ${(props) => (props.$qaTab ? "707px" : "")};
    display: ${(props) => (props.$qaTab ? "" : "flex")};
    justify-content: ${(props) => (props.$qaTab ? "" : "space-between")};
    padding: ${(props) => (props.$qaTab ? "0px 0px 10px 20px" : "")};
    margin-bottom: ${(props) => (props.$qaTab ? "25px" : "")};
    flex-direction: ${(props)=> props.$campingPlace ? "column" : ""};
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: ${(props)=> props.$campingPlace ? "" : "center"};
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
    @media only screen and (max-width: 1339px) {
        width: ${(props) => (props.$text ? "342px" : "")};
    }
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
export const CarinfoContactMap = styled.img`
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
    width: ${(props)=> props.$small ? "195px" : "395px"};
    height: ${(props)=> props.$small ? "147px" : "300px"};
    object-fit: cover;
    border-radius: 10px;
`;
export const CampingFont = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props)=> props.$mainHeader ? "#00000066" : "#0000007a"};
    border-radius: ${(props)=> props.$mainHeader ? "" : "10px"};
    transition: all 0.4s;
    &:hover{
        background: ${(props)=> props.$mainHeader ? "" : "none"};
    }
`;
export const CampingPlaceItem = styled.div`
    width: min-content;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
        transform: ${(props)=> props.$small ? "" : "scale(1.07)"};
        transition: all 0.4s;
    }
`;


export const CampingPlaceCarinfoContainer = styled.div`
    margin-top: ${(props)=> props.$campingPlace ? "" : "40px"};
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1226px;
    font-size: 14px;
    color: #373737;
    
    @media only screen and (max-width: 1245px) {
        padding: ${(props)=> props.$campingPlace ? "" : "0px 70px"};
        width: 100%;
    }
    @media only screen and (max-width: 700px) {
        padding: ${(props)=> props.$campingPlace ? "" : "0px 30px"};
    }

`

export const BlueText = styled.div`
    color: #006DAB;
    font-weight: ${(props)=> props.$bigText ? "500" : "400"};
    font-size: ${(props)=> props.$bigText ? "16px" : "14px"};
    margin-bottom: ${(props)=> props.$description ? "10px" : ""};
`

export const OrangeButton = styled.button`
    background: none;
    border-radius: 5px;
    border: 1px solid #FF7A00;
    padding: 3px 18px;
    font-size: 16px;
    font-weight: 500;
    color: #FF7A00;
    cursor: pointer;
`

export const CampingInformationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    width: 600px;
    @media only screen and (max-width: 1245px) {
        width:auto;
    }
`
export const CampinInformation = styled.div`
    display: flex;
    gap: 11px;
    align-items: center;
`
export const CampingPlaceMap = styled.img`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
`

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
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props)=> props.$videos ? "80px" : "50px"};
`
export const SectionTitle = styled.div`
    color: #373737;
    font-weight: 700;
    font-size: 28px;
    font-family: Gilroy;
    border-bottom: 2px solid #FF7A00;
    padding-bottom: 4px;
    margin-bottom: 40px;
`
export const MainCarousel = styled.div`
    width: 1500px;
    /* padding: 0px 10%; */
`
export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: fit-content;

`
export const RecommendText = styled.div`
    display: flex;
    gap: 20px;
    color: #373737;
    font-size: ${(props)=> props.$model ? "16px" : "18px"};
    font-weight: ${(props)=> props.$model ? "500" : "600"};

`
export const MainVideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    :hover{
        cursor: pointer;
    }
`














