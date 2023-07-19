import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Link } from "@mui/material";

function ProductAccordion({ description }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const htmlCode = `${description.description}`;
  return (
    <>
      <div>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
          disableGutters
          square
          elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{
              padding: "0",
              borderBottom: "1px solid #DADADA",
            }}
            expandIcon={
              expanded === "panel1" ? (
                <RemoveIcon sx={{ color: "#000000" }} />
              ) : (
                <AddIcon sx={{ color: "#000000" }} />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "23px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              More About the Product
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                fontFamily: "Inter",
                fontSize: "13px",
                fontWeight: "300",
                lineHeight: "23px",
                letterSpacing: "2%",
                color: "rgba(34, 34, 34, 1)",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            </Box>
            <Box
              mt={2}
              sx={{
                width: "fit-content",
                backgroundColor: "rgba(247, 247, 247, 1)",
                padding: "15px 20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "12px",
                  letterSpacing: "0.8999999761581421px",
                }}
              >
                FABRIC
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "rgba(34, 34, 34, 1)",
                }}
              >
                {description.fabric}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            boxShadow: "none",
          }}
          disableGutters
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{
              padding: "0",
              borderBottom: "1px solid #DADADA",
            }}
            expandIcon={
              expanded === "panel2" ? (
                <RemoveIcon sx={{ color: "#000000" }} />
              ) : (
                <AddIcon sx={{ color: "#000000" }} />
              )
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "23px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Shipping & Returns
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box mb={1}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "23px",
                    letterSpacing: "2%",
                    color: "rgba(48, 48, 48, 1)",
                  }}
                >
                  Shipping Days
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "300",
                    lineHeight: "23px",
                    letterSpacing: "2%",
                    color: "rgba(48, 48, 48, 1)",
                  }}
                >
                  Your product will be delivered between 3-7 working days
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "23px",
                    letterSpacing: "2%",
                    color: "rgba(48, 48, 48, 1)",
                  }}
                >
                  Return and Exchange
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "300",
                    lineHeight: "23px",
                    letterSpacing: "2%",
                    color: "rgba(48, 48, 48, 1)",
                  }}
                >
                  Woodland may accept returns on apparel and footwear for
                  account credit only
                </Typography>
                <ul
                  style={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "300",
                    lineHeight: "23px",
                    letterSpacing: "2%",
                    color: "rgba(48, 48, 48, 1)",
                  }}
                >
                  <li>
                    For this purpose woodland must receive the merchandise
                    within 15 days from the date it was shipped to you.
                  </li>
                  <li>
                    Items must be unused, unworn, unwashed and undamaged by you.
                  </li>
                  <li>
                    Goods will be returned only if they are returned in their
                    original packaging.
                  </li>
                  <li>
                    Goods once sold can only be exchanged for replacement or a
                    store credit if they meet our terms and conditions.
                  </li>
                  <li>
                    Since we keep limited inventory and do not always have all
                    sizes available and under such circumstances the amount paid
                    by you can be used by you whenever you shop with us next
                    time.
                  </li>
                  <li>
                    To return an item, the customer must write to us at
                    care@woodlandworldwide.com, a prompt response is assured to
                    such mails, for more details please read the{" "}
                    <Link
                      href="/refund-policy"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        textDecoration: "underline",
                        color: "#303030",
                      }}
                    >
                      FAQ’s
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default ProductAccordion;
