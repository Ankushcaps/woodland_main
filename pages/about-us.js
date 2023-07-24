import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Container, Grid, Typography, Box } from "@mui/material";
import AboutUsCard from "@/components/AboutUsCard/AboutUsCard";
import Head from "next/head";

function AboutUS() {
  const homeCardData = [
    {
      img: "/images/about/aboutcard-store.png",
      title: "Store Locator",
      link: "/store-locator",
      goto: "Find Store",
    },
    {
      img: "/images/about/about-manu.png",
      title: "Manufacturing Facilities",
      link: "/labs",
      goto: "Read More",
    },
    {
      img: "/images/about/aboutcard-env.png",
      title: "Environment & Responsibilities",
      link: "/env",
      goto: "Read More",
    },
  ];
  const Aboutus = [
    {
      img: "/images/about/about-slider-1.png",
      head: "OUR PRODUCTS",
      des: " Woodland's parent company, Aero Group, has been a well known name in the outdoor shoe industry since the early 50s. Founded in Quebec, Canada, it entered the Indian market in 1992. Before that, Aero Group was majorly exporting its leather shoes to Russia. After the division of Russia into various states known as the USSR, the group decided to launch some of its products in India. Hence, the first hand-stitched leather shoe was launched, which took the entire shoe market by storm. That shoe made the brand 'Woodland'.",
    },
    {
      img: "/images/about/about-slider-2.png",
      head: "ADVENTURE",
      des: " Over the years, the appetite for adventure sports has been on the rise. It is the spirit of adventure that defines Woodland. A spirit that is willing to stretch the levels of human endurance; a spirit that desires to reach the furthest frontiers; a spirit that craves to venture into the unknown.",
    },
    {
      img: "/images/about/about-slider-3.png",
      head: "OUR PRODUCTS",
      des: "Woodland offers an extensive line of footwear, performance apparel and outdoor gear. Whether it's a lightweight jacket for active pursuits or a summit tested parka for the coldest places on earth, the focus is on creating truly functional solutions for outdoor and adventure enthusiasts.",
    },
  ];
  return (
    <>
      <Head>
        <title>Find Latest in Performance Wear in Apparel and Footwear.</title>
        <meta
          name="description"
          content="Woodland offers an extensive line of footwear, performance apparel and outdoor gear. Explore More with Woodland. "
        />
        <meta
          name="keywords"
          content="Adventure Wear, Outdoor gear, Sports wear, Fashion, Casual Wear, Footwear"
        />
      </Head>

      <AppLayout>
        <Box>
          <section>
            <Swiper
              slidesPerView={1}
              loop="true"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {Aboutus.map((val, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Box
                      sx={{
                        height: {
                          md: "580px",
                          sm: "400px",
                          xs: "300px",
                        },
                        backgroundImage: `url(${val.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        verticalAlign: "bottom",
                        objectFit: "cover",
                      }}
                    >
                      <Container
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Raleway",
                                fontWeight: "600",
                                fontSize: "30px",
                                color: "#FFFFFF",
                                mb: 3,
                              }}
                            >
                              {val.head}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Raleway",
                                fontWeight: "400",
                                fontSize: "14px",
                                color: "#FFFFFF",
                                width: "350px",
                                mb: 1,
                                lineHeight: "-2%",
                              }}
                            >
                              {val.des}
                            </Typography>
                          </Box>
                        </Box>
                      </Container>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <Box
            sx={{
              height: {
                md: "580px",
                sm: "400px",
                xs: "300px",
              },
              backgroundImage: `url(/images/about/aboutus-2.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              verticalAlign: "bottom",
              objectFit: "cover",
            }}
          >
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      fontSize: "30px",
                      color: "#FFFFFF",
                      mb: 3,
                    }}
                  >
                    Technology & Innovation
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      width: "350px",
                      mb: 1,
                      lineHeight: "-2%",
                    }}
                  >
                    The increasing diversity of outdoor activity requires
                    creative solutions that meet the quest for adventure.
                    That&#39;s where Woodland&#39;s expertise comes into
                    picture. It combines activity focused designs and
                    technologically advanced materials available, created in the
                    most innovative and effective manner possible.
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box my={2}>
            <Container>
              <Grid container spacing={2}>
                {homeCardData?.map((data, id) => (
                  <Grid item xs={12} sm={4} key={id}>
                    <AboutUsCard data={data} aspectRatio={500 / 500} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </AppLayout>
    </>
  );
}

export default AboutUS;
