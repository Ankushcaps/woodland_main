import React from "react";
import { Container, Grid } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { ExploreCard } from "../ExploreCard";
function ExploreCategory() {
  const exploreData = [
    {
      img: "/images/home/T-Shirts.png",
      title: "T-Shirt",
      linkone: "/product-list/MEN_POLO",
      linktwo: "/product-list/WOMEN_POLO",
    },
    {
      img: "/images/home/Shirts.png",
      title: "Shirts",
      linkone: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
      linktwo: "/product-list/WOMEN_SHIRTS_FULL_SLEEVE",
    },
    {
      img: "/images/home/Shorts.png",
      title: "Shorts",
      linkone: "/product-list/MEN_SHORTS",
      linktwo: "/product-list/WOMEN_SHORTS",
    },
    {
      img: "/images/home/Jeans.png",
      title: "Jeans",
      linkone: "/product-list/BOTTOMS_MEN",
      linktwo: "/product-list/BOTTOMS_WOMEN",
    },
  ];
  return (
    <section>
      <Container
        sx={{
          py: 4,
        }}
      >
        <Grid container spacing={2}>
          {exploreData?.map((data, id) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={id}
              className={styles.customCol}
            >
              <ExploreCard data={data} aspectRatio={400 / 480} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default ExploreCategory;
