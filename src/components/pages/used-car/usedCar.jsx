import React, { useState } from "react";
import {
    CarMenuContainer,
    MotorLeftLine,
    MotorLeftTopLeftRight,
    MotorLeftTopLeftText,
    MotorsContainer,
    MotorsLeftContainer,
    MotorsRightContainer,
    MotorsRightContainerTop,
} from "../../../style/style";
import { Imgwrapper } from "../../../style/navbarStyle";
import { MotorsLeftTextInput } from "../../../style/style";
import { MotorsLeftTextInputContainer } from "../../../style/style";
import { MotorsLeftCheckInputContainer } from "../../../style/style";
import { MotorsCheckBoxInput } from "../../../style/style";
import { MotorsLeftButtons } from "../../../style/style";
import { MotorLeftButton } from "../../../style/style";
import { MotorsCompare } from "../../../style/style";
import { MotorCompareContainer } from "../../../style/style";
import compareImg1 from "../../../assets/Compare_img1.png";
import compareImg2 from "../../../assets/Compare_img2.png";
import compareImg3 from "../../../assets/Compare_img3.png";
import { MotorCompareImg } from "../../../style/style";
import { MotorLeftTopLeft } from "../../../style/style";
import { MotorLeftTopRight } from "../../../style/style";
import { MotorLeftInput } from "../../../style/style";
import { MotorLeftDownArrow } from "../../../style/style";
import downArrowInput from "../../../assets/down-arrow-input.svg";
import { MotorItemNumbers } from "../../../style/style";
import { MotorLeftImgs } from "../../../style/style";
import fourDots from "../../../assets/four-dots.svg";
import roundView from "../../../assets/round-view.svg";
import { MotorLeftInputImgs } from "../../../style/style";
import CarMenu from "../../../others/carMenu";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { usedCar } from "../../data/usedCar";
import UsedCarHeader from "../../header/usedCarHeader";
import GridMenu from "./gridMenu";
import VMenu from "./vMenu";

const UsedCarComponent = () => {
    const data = usedCar.maindata;

    const [active, setActive] = useState(true);
    function handleGridMenu() {
        setActive(true);
    }
    function handleVMenu() {
        setActive(false);
    }

    const [search, setSearch] = useState(data);
    const handleCange = (e) => {
        const searchQueary = e.target.value.toLowerCase();
        setSearch(
            data.filter((a) => a.used.name.toLowerCase().includes(searchQueary))
        );
    };

    return (
        <div>
            <UsedCarHeader />

            <MotorsContainer>
                <MotorsLeftContainer>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                Cost of car
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftTextInputContainer>
                                    <MotorsLeftTextInput>
                                        <div>from</div>
                                        <input type="text" />
                                    </MotorsLeftTextInput>
                                    <MotorsLeftTextInput>
                                        <div>to</div>
                                        <input type="text" />
                                    </MotorsLeftTextInput>
                                </MotorsLeftTextInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                Brand
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftCheckInputContainer>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Aidal</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Knal</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>escape</div>
                                    </MotorsCheckBoxInput>
                                </MotorsLeftCheckInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                Company
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftCheckInputContainer>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>escape</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Aidal</div>
                                    </MotorsCheckBoxInput>
                                </MotorsLeftCheckInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                License type
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftCheckInputContainer>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>1 year</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>2 year</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>1.5year</div>
                                    </MotorsCheckBoxInput>
                                </MotorsLeftCheckInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                Number of travelers
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftCheckInputContainer>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>2</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>3-4</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>5+</div>
                                    </MotorsCheckBoxInput>
                                </MotorsLeftCheckInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <AccordionGroup
                        sx={{ padding: "0", margin: "0px", flexGrow: "0" }}
                    >
                        <Accordion
                            sx={{ padding: "0", margin: "0px" }}
                            defaultExpanded
                        >
                            <AccordionSummary
                                sx={{
                                    padding: "0px",
                                    fontSize: "18px",
                                    margin: "0px",
                                    fontWeight: "600",
                                }}
                            >
                                Location
                            </AccordionSummary>
                            <MotorLeftLine></MotorLeftLine>
                            <AccordionDetails
                                sx={{ padding: "0", paddingInlineStart: "0" }}
                            >
                                <MotorsLeftCheckInputContainer>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Seoul</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Korea</div>
                                    </MotorsCheckBoxInput>
                                    <MotorsCheckBoxInput>
                                        <input type="checkbox" />
                                        <div>Busan</div>
                                    </MotorsCheckBoxInput>
                                </MotorsLeftCheckInputContainer>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                    <MotorsLeftButtons>
                        <MotorLeftButton $orange>Cancel</MotorLeftButton>
                        <MotorLeftButton>Search</MotorLeftButton>
                    </MotorsLeftButtons>

                    <MotorsCompare>
                        <div>Compare</div>
                        <MotorCompareContainer>
                            <MotorCompareImg src={compareImg1} />
                            <MotorCompareImg src={compareImg2} />
                            <MotorCompareImg src={compareImg3} />
                        </MotorCompareContainer>
                    </MotorsCompare>
                </MotorsLeftContainer>

                <MotorsRightContainer>
                    <MotorsRightContainerTop>
                        <MotorLeftTopLeft>
                            <MotorLeftTopLeftText>
                                <MotorItemNumbers>Item</MotorItemNumbers>
                                <MotorItemNumbers $number>
                                    {data.length}
                                </MotorItemNumbers>
                                <CarMenuContainer>
                                    <CarMenu />
                                </CarMenuContainer>
                            </MotorLeftTopLeftText>

                            <MotorLeftTopLeftRight>
                                <MotorLeftInputImgs>
                                    <MotorLeftImgs onClick={handleGridMenu}>
                                        <img
                                            src={fourDots}
                                            alt="img"
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </MotorLeftImgs>
                                    <MotorLeftImgs $right onClick={handleVMenu}>
                                        <img
                                            src={roundView}
                                            alt="img"
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </MotorLeftImgs>
                                </MotorLeftInputImgs>
                            </MotorLeftTopLeftRight>
                        </MotorLeftTopLeft>

                        <MotorLeftTopRight>

                            <MotorLeftInput>
                                <input type="text" placeholder="Search" onChange={handleCange}/>
                            </MotorLeftInput>

                            <MotorLeftInput $small>
                                <input type="text" placeholder="60" />
                                <MotorLeftDownArrow>
                                    <Imgwrapper src={downArrowInput} />
                                </MotorLeftDownArrow>
                            </MotorLeftInput>

                            <MotorLeftInputImgs $desktop>
                                <MotorLeftImgs onClick={handleGridMenu}>
                                    <img
                                        src={fourDots}
                                        alt="img"
                                        style={{ pointerEvents: "none" }}
                                    />
                                </MotorLeftImgs>
                                <MotorLeftImgs $right onClick={handleVMenu}>
                                    <img
                                        src={roundView}
                                        alt="img"
                                        style={{ pointerEvents: "none" }}
                                    />
                                </MotorLeftImgs>
                            </MotorLeftInputImgs>
                        </MotorLeftTopRight>
                    </MotorsRightContainerTop>

                    {active ? <GridMenu search={search}/> : <VMenu search={search}/>}
                </MotorsRightContainer>
            </MotorsContainer>
        </div>
    );
};

export default UsedCarComponent;
