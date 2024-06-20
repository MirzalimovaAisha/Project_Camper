import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import carHamburger from "../assets/carMenu.png";

import { MotorLeftLine, MotorsLeftContainer } from "../style/style";
import { Imgwrapper } from "../style/navbarStyle";
import { MotorsLeftTextInput } from "../style/style";
import { MotorsLeftTextInputContainer } from "../style/style";
import { MotorsLeftCheckInputContainer } from "../style/style";
import { MotorsCheckBoxInput } from "../style/style";
import { MotorsLeftButtons } from "../style/style";
import { MotorLeftButton } from "../style/style";
import { MotorsCompare } from "../style/style";
import { MotorCompareContainer } from "../style/style";
import compareImg1 from "../assets/Compare_img1.png";
import compareImg2 from "../assets/Compare_img2.png";
import compareImg3 from "../assets/Compare_img3.png";
import { MotorCompareImg } from "../style/style";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

export default function CarMenu() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                padding: "70px 50px",
                display: "flex",
            }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)} 
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <MotorsLeftContainer style={{display:"flex", zIndex:"9999999999"}}>
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
            </List>
        </Box>
    );

    return (
        <React.Fragment key={"left"}>
            <div
                onClick={toggleDrawer("left", true)}
                style={{
                    cursor: "pointer",
                    display: "flex",
                }}
            >
                <Imgwrapper src={carHamburger} style={{ width: "18px" }} />
            </div>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </React.Fragment>
    );
}
