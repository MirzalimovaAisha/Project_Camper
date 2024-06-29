import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { CarinfoTabsContainer } from "../style/style";
import CarinfoContactTab from "./carinfoContactTab";
import ItemReview from "./ItemReview";
import Q_ATab from "./carinfo-q&aTab";
import CarinfoFaqTab from "./carninfoFaqTab";

export default function CarinfoItemTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const CustomTab = styled(Tab)(({ theme, selected }) => ({
        "&.Mui-selected": {
            backgroundColor: "#006DAB",
            color: "#FFFFFF",
        },
        textTransform: "none",
    }));

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    };

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <CarinfoTabsContainer $tabItem>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Basic tabs"
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{
                        width: "1250px",
                    }}
                >
                    <CustomTab
                        label="Item reviews"
                        sx={{
                            padding: "15px 25px",
                            fontWeight: "500",
                            fontFamily: "Montserrat",
                            color: "#373737",
                        }}
                    />
                    <CustomTab
                        label="Q&A"
                        sx={{
                            padding: "15px 25px",
                            fontWeight: "500",
                            fontFamily: "Montserrat",
                        }}
                    />
                    <CustomTab
                        label="FAQ"
                        sx={{
                            padding: "15px 25px",
                            fontWeight: "500",
                            fontFamily: "Montserrat",
                        }}
                    />
                    <CustomTab
                        label="Contact"
                        sx={{
                            padding: "15px 25px",
                            fontWeight: "500",
                            fontFamily: "Montserrat",
                        }}
                    />
                </Tabs>
            </CarinfoTabsContainer>
            <TabPanel value={value} index={0}>
                <ItemReview />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Q_ATab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CarinfoFaqTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CarinfoContactTab />
            </TabPanel>
        </Box>
    );
}
