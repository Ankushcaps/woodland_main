import React from "react";
import { Box, Typography, Container, Drawer } from "@mui/material";

function ManufactureDetails({
  manufactureDrawer,
  setManufactureDrawer,
  data,
  productlevel,
}) {
  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(number).replace(",", " ");
  }

  const tableDataModal = [
    {
      label: "Product code",
      value: `${productlevel.productID} (Art No: ${data.articleCode})`,
    },
    { label: "Product Description", value: productlevel.division },
    { label: "Color", value: data.color },
    { label: "Size", value: data.sizes[0].size },
    { label: "Size in cm", value: data.dimension },
    {
      label: "MRP",
      value: `₹${formatNumber(parseInt(productlevel.price))} (Maximum retail price inclusive of all taxes)`,
    },
    { label: "Material Used", value: data.fabric },
    { label: "Designed For", value: productlevel?.gender[0] },
    { label: "Packaging Quantity", value: data.qtval },
    {
      label: "Origin Country",
      value: data.originCountry === null ? "INDIA" : data.originCountry,
    },
    {
      label: "Marketed By",
      value: productlevel.marketedBy,
    },
    { label: "Care Email", value: "care@woodlandworldwide.com" },
  ];

  const handleCloseDrawer = () => {
    setManufactureDrawer(false);
  };

  return (
    <Drawer
      open={manufactureDrawer}
      onClose={handleCloseDrawer}
      anchor="right"
      PaperProps={{
        sx: {
          width: {
            md: "600px",
            xs: "100%",
          },
        },
      }}
    >
      <Container>
        <Box
          py={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "26px",
              letterSpacing: "0em",
              color: "#000000",
              textTransform: "uppercase",
            }}
          >
            Import, manufacturing & Packaging Info
          </Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={handleCloseDrawer}>
            &#9587;
          </Typography>
        </Box>

        <Box sx={{ border: "1px solid #DADADA" }}>
          {tableDataModal.map(({ label, value }, id) => (
            <Box
              key={id}
              p={1}
              sx={{
                display: {
                  sm: "flex",
                  xs: "block",
                },
                alignItems: "center",
                borderBottom: "1px solid #DADADA",
                ":last-child": {
                  borderBottom: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  color: "#000000",
                  width: {
                    sm: "30%",
                    xs: "100%",
                  },
                }}
              >
                {label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  color: "#000000",
                  width: {
                    sm: "70%",
                    xs: "100%",
                  },
                }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Drawer>
  );
}

export default ManufactureDetails;
