import React from "react";
import { Button } from "../UI";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Grid, Typography } from "@mui/material";

const env = [
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/pro_planet_banner.png",
    target: "/env",
    title: "Pro Planet",
    description:
      "Proplanet is a community that is committed to make our plane a better place to live in. Our ultimate goal is to inspire the next generation and increase their participation in the conservation of nature.",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/r_lab_banner.png",
    target: "/labs",
    title: "Woodland Research Lab",
    description:
      "Woodlands expertise combines activity focused designs and technologically advanced materials available, created in the most innovative and effective manner possible.",
  },
];
function EnvSection() {
  return (
    <section
      className={` ${styles.lastSection}`}
      style={{ paddingBottom: "2rem" }}
    >
      <Container>
        <Grid container>
          {env.map((val, id) => {
            return (
              <Grid key={id} item xs={12} md={6}>
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay img-overlay-2`}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: 880 / 552,
                    }}
                  >
                    <Image
                      src={val.img}
                      alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={`${styles.Content} `}>
                    <Typography variant="h3" className={styles.whiteTitle}>
                      {val.title}
                    </Typography>
                    <Typography>{val.description}</Typography>
                    <Link href={val.target}>
                      <Button>Read More</Button>
                    </Link>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

export default EnvSection;
