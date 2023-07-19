import React from "react";
import styles from "../../styles/Home.module.css"
import { Grid } from "@mui/material";

import { HomeProductCard } from "../HomeProductCard";
function ThreeCard() {
  const threeCards = [
    {
      img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/bag_cat_banner.png",
      title: "Bags",
      link: "/product-list/MEN_HIKING_BACKPACKS",
    },
    {
      img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/innerwear_cat_banner.png",
      title: "Innerwear",
      link: "/product-list/MEN_SHORTS_&_BOXERS",
    },
    {
      img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/beltsandmore_cat_banner.png",
      title: "Belts & More",
      link: "/product-list/MEN_BELTS",
    },
  ];
  return (
    <section>
      <Grid container>
        {threeCards?.map((data, id) => (
          <Grid item xs={12} sm={4} md={4} key={id}>
            <HomeProductCard
              aspectRatio={634 / 605}
              customClass={styles.marginBottom}
              data={data}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default ThreeCard;
