import React, { useState } from "react";
import {
    CarMenuContainer,
    MotorLeftLine,
    MotorLeftTopLeft,
    MotorLeftTopLeftRight,
    MotorLeftTopLeftText,
    MotorLeftTopRight,
    MotorLeftInput,
    MotorLeftDownArrow,
    MotorsContainer,
    MotorsLeftContainer,
    MotorsRightContainer,
    MotorsRightContainerTop,
    MotorsLeftButtons,
    MotorLeftButton,
    MotorsCompare,
    MotorCompareContainer,
    MotorCompareImg,
    MotorsLeftTextInput,
    MotorsLeftTextInputContainer,
    MotorsLeftCheckInputContainer,
    MotorsCheckBoxInput,
    MotorItemNumbers,
    MotorLeftImgs,
    MotorLeftInputImgs,
} from "../../../style/style";
import { Imgwrapper } from "../../../style/navbarStyle";
import compareImg1 from "../../../assets/Compare_img1.png";
import compareImg2 from "../../../assets/Compare_img2.png";
import compareImg3 from "../../../assets/Compare_img3.png";
import fourDots from "../../../assets/four-dots.svg";
import roundView from "../../../assets/round-view.svg";
import downArrowInput from "../../../assets/down-arrow-input.svg";
import Header from "../../header/header";
import CarMenu from "../../../others/carMenu";
import GridMenu from "./gridMenu";
import VMenu from "./vMenu";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { campcar } from "../../data/mockdata";

const Motor = () => {
    const data = campcar.maindata;

    const [active, setActive] = useState(true);
    const [search, setSearch] = useState(data);
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedLicenses, setSelectedLicenses] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    const handleGridMenu = () => {
        setActive(true);
    };

    const handleVMenu = () => {
        setActive(false);
    };

    const handleChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearch(
            data.filter((item) =>
                item.car.name.toLowerCase().includes(searchQuery)
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
        // 새로운 핸들러 추가
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
                selectedNames.includes(item.car.name)) &&
            (selectedCompanies.length === 0 ||
                selectedCompanies.includes(item.car.company)) &&
            (selectedLicenses.length === 0 ||
                selectedLicenses.includes(item.car.license)) &&
            (selectedPeople.length === 0 ||
                selectedPeople.includes(item.car.people)) &&
            (selectedLocations.length === 0 ||
                selectedLocations.includes(item.car.location)) // 새로운 필터 추가
    );

    const uniqueCarNames = Array.from(
        new Set(data.map((item) => item.car.name.trim().toLowerCase()))
    ).map((name) => {
        return data.find((item) => item.car.name.trim().toLowerCase() === name)
            .car.name;
    });

    const uniqueCompanies = Array.from(
        new Set(data.map((item) => item.car.company.trim().toLowerCase()))
    ).map((company) => {
        return data.find(
            (item) => item.car.company.trim().toLowerCase() === company
        ).car.company;
    });

    const uniqueLicenses = Array.from(
        new Set(data.map((item) => item.car.license.trim().toLowerCase()))
    ).map((license) => {
        return data.find(
            (item) => item.car.license.trim().toLowerCase() === license
        ).car.license;
    });

    const uniquePeople = Array.from(
        new Set(data.map((item) => item.car.people.trim().toLowerCase()))
    ).map((people) => {
        return data.find(
            (item) => item.car.people.trim().toLowerCase() === people
        ).car.people;
    });

    const uniqueLocation = Array.from(
        new Set(data.map((item) => item.car.location.trim().toLowerCase()))
    ).map((location) => {
        return data.find(
            (item) => item.car.location.trim().toLowerCase() === location
        ).car.location;
    });

    return (
        <div>
            <Header />

            <MotorsContainer>
                <MotorsLeftContainer>
                    <AccordionGroup
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                        sx={{
                            padding: "0",
                            margin: "0px",
                            flexGrow: "0",
                        }}
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
                                sx={{
                                    padding: "0",
                                    paddingInlineStart: "0",
                                }}
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
                                        <img src={fourDots} alt="img" />
                                    </MotorLeftImgs>
                                    <MotorLeftImgs $right onClick={handleVMenu}>
                                        <img src={roundView} alt="img" />
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
                                    <img src={fourDots} alt="img" />
                                </MotorLeftImgs>
                                <MotorLeftImgs $right onClick={handleVMenu}>
                                    <img src={roundView} alt="img" />
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

export default Motor;
