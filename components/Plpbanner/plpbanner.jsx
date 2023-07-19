import { Box } from "@mui/material";
import Image from "next/image";
const PlpBanner = ({ bannerimg }) => {
  return (
    <Box>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: 1685 / 399,
        }}
      >
        <Image objectFit="cover" layout="fill" src={bannerimg} alt="category-banner"/>
      </div>
    </Box>
  );
};
export default PlpBanner;
