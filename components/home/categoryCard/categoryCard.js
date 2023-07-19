import React from "react";
import { Grid } from "@mui/material";
import { HomeProductCard } from "@/components/HomeProductCard";
const homeCardData = [
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_1.png",
    title: "Bestsellers",
    link: "/product/bestseller",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_2.png",
    title: "Sneakers",
    link: "/product-list/MEN_SNEAKERS",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_3.png",
    title: "Boots",
    link: "/product-list/MEN_BOOTS",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_4.png",
    title: "Casuals & Canvas",
    link: "/product-list/MEN_CASUALS_LACE_UP",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_5.png",
    title: "Men’s Apparel",
    link: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/h_cat_6.png",
    title: "Women’s Apparel",
    link: "/product-list/WOMEN_POLO",
  },
];

function CategoryCard() {
  return (
    <section>
      <Grid container columnSpacing={2}>
        {homeCardData?.map((data, id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <HomeProductCard data={data} aspectRatio={500 / 600} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default CategoryCard;
