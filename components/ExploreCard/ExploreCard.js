import { Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./explorecard.module.css";

export const ExploreCard = ({ data, aspectRatio }) => {
  return (
    <Card elevation={0} className={styles.tShirtSection}>
      <Link href={data.linkone}>
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
        </div>
      </Link>
      <div className={styles.Content}>
        <Typography variant="h3">{data?.title}</Typography>
        <Typography variant="h4">
          <Link href={data.linkone}>Shop Men</Link> |{" "}
          <Link href={data.linktwo}> Shop Women</Link>
        </Typography>
      </div>
    </Card>
  );
};
