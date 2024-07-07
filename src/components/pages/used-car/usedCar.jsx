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
    const [search, setSearch] = useState(data);
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedLicenses, setSelectedLicenses] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]); // 새로운 상태 변수 추가

    const handleGridMenu = () => {
        setActive(true);
    };

    const handleVMenu = () => {
        setActive(false);
    };

    const handleChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearch(
            data.filter(
                (item) =>
                    item.used &&
                    item.used.name &&
                    item.used.name.toLowerCase().includes(searchQuery)
            )
        );
    };

    const handleNameChange = (name) => {
        setSelectedNames((prevSelectedNames) => {
            const isSelected = prevSelectedNames.includes(name);
            if (isSelected) {
                return prevSelectedNames.filter((item) => item !== name);
            } else {
                return [...prevSelectedNames, name];
            }
        });
    };

    const handleCompanyChange = (companyName) => {
        setSelectedCompanies((prevSelectedCompanies) => {
            const isSelected = prevSelectedCompanies.includes(companyName);
            if (isSelected) {
                return prevSelectedCompanies.filter(
                    (item) => item !== companyName
                );
            } else {
                return [...prevSelectedCompanies, companyName];
            }
        });
    };

    const handleLicenseChange = (licenseType) => {
        setSelectedLicenses((prevSelectedLicenses) => {
            const isSelected = prevSelectedLicenses.includes(licenseType);
            if (isSelected) {
                return prevSelectedLicenses.filter(
                    (item) => item !== licenseType
                );
            } else {
                return [...prevSelectedLicenses, licenseType];
            }
        });
    };

    const handlePeopleChange = (peopleCount) => {
        setSelectedPeople((prevSelectedPeople) => {
            const isSelected = prevSelectedPeople.includes(peopleCount);
            if (isSelected) {
                return prevSelectedPeople.filter(
                    (item) => item !== peopleCount
                );
            } else {
                return [...prevSelectedPeople, peopleCount];
            }
        });
    };

    const handleLocationChange = (location) => {
        setSelectedLocations((prevSelectedLocations) => {
            const isSelected = prevSelectedLocations.includes(location);
            if (isSelected) {
                return prevSelectedLocations.filter(
                    (item) => item !== location
                );
            } else {
                return [...prevSelectedLocations, location];
            }
        });
    };

    const filteredData = search.filter(
        (item) =>
            (selectedNames.length === 0 ||
                selectedNames.includes(item.used.name)) &&
            (selectedCompanies.length === 0 ||
                selectedCompanies.includes(item.used.company)) &&
            (selectedLicenses.length === 0 ||
                selectedLicenses.includes(item.used.license)) &&
            (selectedPeople.length === 0 ||
                selectedPeople.includes(item.used.people)) &&
            (selectedLocations.length === 0 ||
                selectedLocations.includes(item.used.location)) // 새로운 필터 추가
    );

    const uniqueCarNames = Array.from(
        new Set(data.map((item) => item.used.name.trim().toLowerCase()))
    ).map((name) => {
        return data.find(
            (item) => item.used.name.trim().toLowerCase() === name
        ).used.name;
    });

    const uniqueCompanies = Array.from(
        new Set(data.map((item) => item.used.company.trim().toLowerCase()))
    ).map((company) => {
        return data.find(
            (item) => item.used.company.trim().toLowerCase() === company
        ).used.company;
    });

    const uniqueLicenses = Array.from(
        new Set(data.map((item) => item.used.license.trim().toLowerCase()))
    ).map((license) => {
        return data.find(
            (item) => item.used.license.trim().toLowerCase() === license
        ).used.license;
    });

    const uniquePeople = Array.from(
        new Set(data.map((item) => item.used.people.trim().toLowerCase()))
    ).map((people) => {
        return data.find(
            (item) => item.used.people.trim().toLowerCase() === people
        ).used.people;
    });

    const uniqueLocation = Array.from(
        new Set(data.map((item) => item.used.location.trim().toLowerCase()))
    ).map((location) => {
        return data.find(
            (item) => item.used.location.trim().toLowerCase() === location
        ).used.location;
    });

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
                                    {uniqueCarNames.map((name, index) => (
                                        <MotorsCheckBoxInput key={index}>
                                            <input
                                                id={`car-${index}`}
                                                type="checkbox"
                                                onChange={() =>
                                                    handleNameChange(name)
                                                }
                                            />
                                            <label htmlFor={`car-${index}`}>
                                                {name}
                                            </label>
                                        </MotorsCheckBoxInput>
                                    ))}
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
                                    {uniqueCompanies.map((value, index) => (
                                        <MotorsCheckBoxInput key={index}>
                                            <input
                                                id={`company-${index}`}
                                                type="checkbox"
                                                onChange={() =>
                                                    handleCompanyChange(value)
                                                }
                                            />
                                            <label htmlFor={`company-${index}`}>
                                                {value}
                                            </label>
                                        </MotorsCheckBoxInput>
                                    ))}
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
                                    {uniqueLicenses.map((value, index) => (
                                        <MotorsCheckBoxInput key={index}>
                                            <input
                                                id={`license-${index}`}
                                                type="checkbox"
                                                onChange={() =>
                                                    handleLicenseChange(value)
                                                }
                                            />
                                            <label htmlFor={`license-${index}`}>
                                                {value}
                                            </label>
                                        </MotorsCheckBoxInput>
                                    ))}
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
                                    {uniquePeople.map((value, index) => (
                                        <MotorsCheckBoxInput key={index}>
                                            <input
                                                id={`people-${index}`}
                                                type="checkbox"
                                                onChange={() =>
                                                    handlePeopleChange(value)
                                                }
                                            />
                                            <label htmlFor={`people-${index}`}>
                                                {value}
                                            </label>
                                        </MotorsCheckBoxInput>
                                    ))}
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
                                    {uniqueLocation.map((value, index) => (
                                        <MotorsCheckBoxInput key={index}>
                                            <input
                                                id={`location-${index}`}
                                                type="checkbox"
                                                onChange={() =>
                                                    handleLocationChange(value)
                                                }
                                            />
                                            <label
                                                htmlFor={`location-${index}`}
                                            >
                                                {value}
                                            </label>
                                        </MotorsCheckBoxInput>
                                    ))}
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
                                    {filteredData.length}
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
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={handleChange}
                                />
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

                    {active ? (
                        <GridMenu search={filteredData} />
                    ) : (
                        <VMenu search={filteredData} />
                    )}
                </MotorsRightContainer>
            </MotorsContainer>
        </div>
    );
};

export default UsedCarComponent;
