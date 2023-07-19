import { Container, Box, Typography } from "@mui/material";
import styles from "../SizeGuidBottom/sizeguid.module.css";
import React from "react";

function SizeGuidTop({ close }) {
  const womentop = [
    {
      head: "SIZE",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      head: "CHEST",
      measure: "(IN INCHES)",
      size: ["34-35", "36-37", "38-39", "40-41", "42-44"],
    },
    {
      head: "CHEST",
      measure: "(IN CM)",
      size: ["86-89", "91-94", "96-99", "101-104", "106-111"],
    },
  ];
  const womenbottom = [
    {
      head: "SIZE",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      head: "WAIST",
      measure: "(IN INCHES)",
      size: ["26-27", "28-29", "30-31", "33-35", "36-38"],
    },
    {
      head: "WAIST",
      measure: "(IN CM)",
      size: ["66-68", "71-73", "76-79", "83-88", "91-96"],
    },
  ];
  const mentop = [
    {
      head: "SIZE",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      head: "CHEST",
      measure: "(IN INCHES)",
      size: ["36-38", "38-40", "40-42", "42-44", "44-46"],
    },
    {
      head: "CHEST",
      measure: "(IN CM)",
      size: ["91-96", "97-101", "102-106", "107-111", "112-116"],
    },
  ];
  const menbottom = [
    {
      head: "SIZE",
      size: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      head: "WAIST",
      measure: "(IN INCHES)",
      size: ["28", "29-30", "31-32", "33-34", "36", "40"],
    },
    {
      head: "WAIST",
      measure: "(IN CM)",
      size: ["71", "74-76", "79-81", "84-86", "91", "96"],
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          onClick={close}
          sx={{
            fontSize: "35px",
            cursor: "pointer",
          }}
        >
          &times;
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#001325EB",
            fontFamily: "Raleway",
            fontWeight: "600",
            lineHeight: "20px",
            ml: 2,
          }}
        >
          Size Guide
          <br />
          <span
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "300",
              color: "#001325EB",
            }}
          >
            Select the size that suits you best
          </span>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "14px",
            color: "#01652F",
            mb: 1,
          }}
        >
          WOMEN’S TOP
        </Typography>
        {womentop.map((val, idx) => {
          return (
            <table
              key={idx}
              className={styles.alterdiv}
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "20%",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {val.head}
                    <br />
                    <span
                      style={{
                        color: "#00000096",
                        fontSize: "10px",
                        fontWeight: "400",
                      }}
                    >
                      {val?.measure}
                    </span>
                  </td>
                  {val.size.map((v, i) => (
                    <td
                      key={i}
                      align="center"
                      style={{
                        width: "12%",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        })}
      </Box>
      <Box mt={2}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "14px",
            color: "#01652F",
            mb: 1,
          }}
        >
          WOMEN’S BOTTOM
        </Typography>
        {womenbottom.map((val, idx) => {
          return (
            <table
              key={idx}
              className={styles.alterdiv}
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "20%",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {val.head}
                    <br />
                    <span
                      style={{
                        color: "#00000096",
                        fontSize: "10px",
                        fontWeight: "400",
                      }}
                    >
                      {val?.measure}
                    </span>
                  </td>
                  {val.size.map((v, i) => (
                    <td
                      key={i}
                      align="center"
                      style={{
                        width: "12%",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        })}
      </Box>
      <Box mt={2}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "14px",
            color: "#01652F",
            mb: 1,
          }}
        >
          MEN’S TOP
        </Typography>
        {mentop.map((val, idx) => {
          return (
            <table
              key={idx}
              className={styles.alterdiv}
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "20%",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {val.head}
                    <br />
                    <span
                      style={{
                        color: "#00000096",
                        fontSize: "10px",
                        fontWeight: "400",
                      }}
                    >
                      {val?.measure}
                    </span>
                  </td>
                  {val.size.map((v, i) => (
                    <td
                      key={i}
                      align="center"
                      style={{
                        width: "12%",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        })}
      </Box>
      <Box my={2}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "14px",
            color: "#01652F",
            mb: 1,
          }}
        >
          MEN’S BOTTOM
        </Typography>
        {menbottom.map((val, idx) => {
          return (
            <table
              key={idx}
              className={styles.alterdiv}
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "20%",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {val.head}
                    <br />
                    <span
                      style={{
                        color: "#00000096",
                        fontSize: "10px",
                        fontWeight: "400",
                      }}
                    >
                      {val?.measure}
                    </span>
                  </td>
                  {val.size.map((v, i) => (
                    <td
                      key={i}
                      align="center"
                      style={{
                        width: "10%",
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        })}
      </Box>
    </Container>
  );
}

export default SizeGuidTop;
