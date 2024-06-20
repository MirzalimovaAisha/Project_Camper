import React from "react";
import {
  AccordionContainer,
  BlueButton,
  CarinfoInput,
  CarinfoInputs,
  CarinfoTabSend,
  CarinfoTabsContainer,
  ItemReviewBoxContainer,
} from "../style/style";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CarinfoFaqTab = () => {
  return (
    <div>
      <div>
        <CarinfoTabsContainer>
          <ItemReviewBoxContainer>
            <AccordionContainer>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
                  fontSize: "17px",
                  color: "#373737",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "17px",
                      fontWeight: "600",
                      margin: "5px 0",
                    }}
                  >
                    Frequently asked questions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionContainer>

            <CarinfoTabSend>
              <div>Have you got a question</div>
              <CarinfoInputs>
                <CarinfoInput placeholder="Your name" />
                <CarinfoInput placeholder="Your email" />
                <CarinfoInput $big placeholder="Your question" />
              </CarinfoInputs>
              <BlueButton $sendButton>Send question</BlueButton>
            </CarinfoTabSend>
          </ItemReviewBoxContainer>
        </CarinfoTabsContainer>
      </div>
    </div>
  );
};

export default CarinfoFaqTab;
