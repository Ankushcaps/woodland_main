import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Button } from "../UI";
import styles from "./homeProductCard.module.css";
import Link from "next/link";

export const HomeProductCard = ({ data, customClass, aspectRatio }) => {
  return (
    <>
      <Paper
        elevation={0}
        className={`${styles.productWrapper} ${customClass}`}
      >
        <div className={`${styles.image} img-overlay`}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: aspectRatio,
            }}
          >
            <Image
              src={data?.img}
              alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 640px) 100vw, 50vw" // Replace with appropriate sizes
            />
          </div>
        </div>
        <div className={styles.content}>
          <Typography variant="h3">{data?.title}</Typography>
          <Link href={`${data.link}`}>
            <Button variant="outline">Shop Now</Button>
          </Link>
        </div>
      </Paper>
    </>
  );
};
