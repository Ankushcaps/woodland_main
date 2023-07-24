import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "../UI";
import styles from "./aboutProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
function AboutUsCard({ data, customClass, aspectRatio }) {
  return (
    <Paper elevation={0} className={`${styles.productWrapper} ${customClass}`}>
      <div className={`${styles.image} ${styles.imgoverlay} `}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: aspectRatio,
          }}
        >
          <Image
            src={data?.img}
            alt="Woodland, Outdoor gear, Trekking shoes for Men, Shoes for women, Jackets for men"
            style={{ objectFit: "cover" }}
            fill
            sizes="(max-width: 640px) 100vw, 50vw" // Replace with appropriate sizes
          />
        </div>
      </div>

      <div className={styles.content}>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: "28px",
            fontWeight: "500",
            mb: 4,
          }}
        >
          {data?.title}
        </Typography>
        <Link href={`${data.link}`}>
          <Button className={styles.btnlink} variant="outline">
            {data?.goto}
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default AboutUsCard;
