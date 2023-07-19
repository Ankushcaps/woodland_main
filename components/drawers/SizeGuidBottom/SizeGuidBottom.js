import { Container, Box, Typography } from "@mui/material";
import styles from "./sizeguid.module.css";
import React from "react";

function SizeGuidBottom({ close }) {
  const womenfootwearsize = [
    {
      head: "UK SIZE",
      size: [2, 3, 4, 5, 6, 7, 8],
    },
    {
      head: "EURO SIZE",
      size: [35, 36, 37, 38, 39, 40, 41],
    },
    {
      head: "SIZE IN CM",
      size: [22.8, 23.5, 24.1, 24.8, 25.5, 26.0, 26.7],
    },
  ];
  const menfootwearsize = [
    {
      head: "UK SIZE",
      size: [5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      head: "EURO SIZE",
      size: [39, 40, 41, 42, 43, 44, 45, 46],
    },
    {
      head: "SIZE IN CM",
      size: [24, 25, 26, 27, 28, 29, 30, 31],
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
          WOMEN’S FOOTWEAR SIZE
        </Typography>
        {womenfootwearsize.map((val, idx) => {
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
                      width: "30%",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {val.head}
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
      <Box mt={4}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "14px",
            color: "#01652F",
            mb: 1,
          }}
        >
          MEN’S FOOTWEAR SIZE
        </Typography>
        {menfootwearsize.map((val, idx) => {
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

export default SizeGuidBottom;
