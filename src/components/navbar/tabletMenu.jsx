import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Imgwrapper, NavbarText } from "../../style/navbarStyle"; // Updated path
import { Link } from "react-router-dom";

import arrayRight from "../../assets/arrayRight.png"; // Updated path
import downArrow from "../../assets/down-arrow.svg"; // Updated path
import hamburger from "../../assets/hamburger-menu.svg"; // Updated path

export default function TabletMenu() {
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
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                padding: "50px 37px",
                display: "flex",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                <Link
                    to={"/motor"}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Motor</div>
                    <Imgwrapper src={arrayRight} />
                </Link>
                <Link to={'/caravan'}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Caravan</div>
                    <Imgwrapper src={arrayRight} />
                </Link>
                <Link to={'/tuning'}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Tuning</div>
                    <Imgwrapper src={arrayRight} />
                </Link>
                <Link to={'/used-car'}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Used Car</div>
                    <Imgwrapper src={arrayRight} />
                </Link>
                <Link to={'/camping-place'}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Camping Place</div>
                </Link>
                <Link 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Sign in</div>
                </Link>
                <Link
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>My orders</div>
                </Link>
                <Link
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Log out</div>
                </Link>
                <Link
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <div>Settings</div>
                </Link>
                <Link
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#373737",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                    }}
                >
                    <NavbarText $en>
                        <div>En</div>
                        <Imgwrapper src={downArrow} />
                    </NavbarText>
                </Link>
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
                <Imgwrapper src={hamburger} />
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
