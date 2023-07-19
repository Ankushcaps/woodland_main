import React from "react";
import styles from "../../styles/Home.module.css";
import style from "./heroBanner/herobanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Grid, Box, Typography, Card, Container } from "@mui/material";
import Image from "next/image";

const instaCard = [
  {
    img: "/images/home/insta-1.jpg",
  },
  {
    img: "/images/home/insta-2.jpg",
  },
  {
    img: "/images/home/insta-3.jpg",
  },
  {
    img: "/images/home/insta-4.jpg",
  },
  {
    img: "/images/home/insta-5.jpg",
  },
];
function Instcards() {
  const CustomPrevButton = ({ onClick }) => (
    <div className={style.customPrevButton} onClick={onClick}>
      <img src="/images/home/prev-arrow.png" alt="Previous" />
    </div>
  );

  const CustomNextButton = ({ onClick }) => (
    <div className={style.customNextButton} onClick={onClick}>
      <img src="/images/home/next-arrow.png" alt="Next" />
    </div>
  );
  return (
    <section className={styles.instagramSection}>
      <Container
        sx={{
          py: 4,
        }}
      >
        <Box>
          <Box>
            <Typography variant="h3">AS WORN BY WOODLAND FAM</Typography>
            <Typography>
              Click to shop & mention us on instagram @woodlandworldwide to be
              featured
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          columns={20}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          {instaCard?.map((data, id) => (
            <Grid item xs={4} key={id}>
              <Card elevation={0} className={styles.instaCard}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: 330 / 330,
                  }}
                >
                  <Image
                    src={data?.img}
                    alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={4.5}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2.5,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4.5,
              },
            }}
          >
            {instaCard?.map((data, id) => (
              <SwiperSlide key={id}>
                <Card className={styles.instaCard} key={id}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: 330 / 330,
                    }}
                  >
                    <Image
                      src={data?.img}
                      alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="custom-prev-button">
              <CustomPrevButton />
            </div>
            <div className="custom-next-button">
              <CustomNextButton />
            </div>
          </Swiper>
        </Box>
      </Container>
    </section>
  );
}

export default Instcards;
