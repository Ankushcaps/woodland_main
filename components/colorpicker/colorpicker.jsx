import { Divider, Stack } from "@mui/material";
import style from "./colorpicker.module.css";
import { useState } from "react";
const ColorPicker = ({ colorimage, colorname, changeSkus,plpindex }) => {
  const [active, setActive] = useState(plpindex);
  const oncolor = (id,skuid) => {
    setActive(skuid);
    changeSkus(id,skuid);
  };

  return (
    <div>
      <div>
        <h3 className={style.title}>Color</h3>
        <h5 className={style.colorname}>{colorname}</h5>
      </div>
      <Stack elevation={0} direction="row" flexWrap="wrap" gap={1}>
        {colorimage.map((color, id) => {
          return (
            <div
              onClick={() => {
                oncolor(id,color.skuID);
              }}
              key={id}
              className={`${style.option} ${active === color.skuID ? style.active : ""}`}
            >
              <img src={color.img} />
            </div>
          );
        })}
      </Stack>
      <Divider />
    </div>
  );
};
export default ColorPicker;
