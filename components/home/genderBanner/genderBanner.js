import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Typography, Card } from "@mui/material";
import styles from "./genderBanner.module.css";
import { Button } from "@/components/UI";
function GenderBanner() {
  return (
    <section>
      <Grid container spacing={0.5}>
        <Grid item sm={6} xs={12}>
          <Card
            elevation={0}
            className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: 952 / 605,
              }}
            >
              <Image
                src="https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/m_apparel_banner.png"
                alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={`${styles.Content} left-content`}>
              <Typography variant="h3" className={styles.whiteTitle}>
                Shop Men’s Apparel
              </Typography>
              <Link href="/product-list/MEN_POLO">
                <Button>Shop Now</Button>
              </Link>
            </div>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card
            className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: 952 / 605,
              }}
            >
              <Image
                src="https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/f_apparel_banner.png"
                alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={`${styles.Content} right-content`}>
              <Typography variant="h3" className={styles.whiteTitle}>
                Shop Women’s Apparel
              </Typography>
              <Link href="/product-list/WOMEN_POLO">
                <Button>Shop Now</Button>
              </Link>
            </div>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}

export default GenderBanner;
