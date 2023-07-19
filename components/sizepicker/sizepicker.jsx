import { Divider, Stack, Box, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./sizepicker.module.css";
import SizeGuidBottom from "../drawers/SizeGuidBottom/SizeGuidBottom";
import SizeGuidTop from "../drawers/SizeGuidTop/SizeGuidTop";

const SizePicker = ({
  currentproduct,
  sizedata,
  productStock,
  currentSize,
  sizeguid,
}) => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  function convertSizeToNumber(size) {
    if (size === "XS") {
      return 1;
    } else if (size === "S") {
      return 2;
    } else if (size === "M") {
      return 3;
    } else if (size === "L") {
      return 4;
    } else if (size === "XL") {
      return 5;
    } else if (size === "2X") {
      return 6;
    } else if (size === "XXL") {
      return 7;
    } else {
      return parseInt(size, 10);
    }
  }

  const sortedSizes = sizedata.sizes.sort((a, b) => {
    const sizeA = convertSizeToNumber(a.size);
    const sizeB = convertSizeToNumber(b.size);

    if (sizeA < sizeB) {
      return -1;
    } else if (sizeA > sizeB) {
      return 1;
    } else {
      return 0;
    }
  });

  const onSize = (id, stock, size, skuid) => {
    setActive(id);
    productStock(stock);
    currentSize(size, skuid);
  };
  useEffect(() => {
    setActive(null);
    currentSize();
  }, [currentproduct]);

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={"0.5rem"}
      >
        <h3 className={style.title}>Size</h3>
        {sizeguid === "ACCESSORY" ? (
          ""
        ) : (
          <h5
            onClick={() => {
              setOpen(true);
            }}
            className={style.sizeguid}
          >
            SIZE GUIDE{" "}
          </h5>
        )}
      </Box>
      <Box mb={"1rem"}>
        <Stack elevation={0} direction="row" flexWrap="wrap" gap={1}>
          {sortedSizes.map((size, id) => {
            return (
              <div key={id} className={style.sizecontainer}>
                <button
                  onClick={() => {
                    onSize(id, size.quantity, size.size, size.id);
                  }}
                  className={`${style.option} ${
                    active === id ? style.active : ""
                  }`}
                  disabled={size.quantity === 0}
                >
                  <div>{size.size}</div>
                  {size.quantity === 0 && (
                    <div className={style.disabledline}></div>
                  )}
                </button>
                <div className={style.sizebox}>
                  {size.quantity > 0 && size.quantity < 5 ? (
                    <div className={style.stockleft}>{size.quantity} Left</div>
                  ) : size.quantity >= 5 ? (
                    <div className={style.stockleft}></div>
                  ) : (
                    <div className={style.sizesoldout}>Sold out</div>
                  )}
                </div>
              </div>
            );
          })}
        </Stack>
      </Box>
      <Divider />
      <Box>
        <Drawer
          open={open}
          anchor="right"
          onClose={() => {
            setOpen(false);
          }}
          PaperProps={{
            sx: {
              width: {
                xs: "100%",
                sm: "550px",
              },

              backgroundColor: "#ffffff",
            },
          }}
        >
          {sizeguid === "GARMENT" && (
            <SizeGuidTop
              close={() => {
                setOpen(false);
              }}
            />
          )}
          {sizeguid === "FOOTWEAR" && (
            <SizeGuidBottom
              close={() => {
                setOpen(false);
              }}
            />
          )}
        </Drawer>
      </Box>
    </div>
  );
};
export default SizePicker;
