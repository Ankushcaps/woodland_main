import React, { useState } from "react";
import styles from "./footer.module.css";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Link,
  Box,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { toast } from "react-toastify";

export const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const shopFootwear = [
    {
      name: "Boots",
      link: "/product-list/MEN_BOOTS",
    },
    {
      name: "Sneakers/Sports",
      link: "/product-list/MEN_SNEAKERS",
    },
    {
      name: "Casuals",
      link: "/product-list/MEN_CASUALS_LACE_UP",
    },
    {
      name: "Formals",
      link: "/product-list/MEN_FORMAL_SLIP_ON",
    },
    {
      name: "Slippers/Flip-Flops",
      link: "/product-list/MEN_SLIPPERS",
    },
    {
      name: "Sandals",
      link: "/product-list/MEN_SANDALS",
    },
    {
      name: "Safety Shoes",
      link: "/product-list/MEN_SAFETY_SHOES",
    },
  ];

  const shopClothing = [
    {
      name: "Jackets",
      link: "/product-list/MEN_JACKETS_FULL_SLEEVE",
    },
    {
      name: "T-shirts",
      link: "/product-list/MEN_POLO",
    },
    {
      name: "Shirts",
      link: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
    },
    {
      name: "Sweaters",
      link: "/product-list/MEN_SWEATERS_FULL_SLEEVE",
    },
    {
      name: "Sweatshirts & Hoodies",
      link: "/product-list/MEN_SWEATSHIRTS",
    },
    {
      name: "Innerwear Tops",
      link: "/product-list/MEN_TSHIRTS",
    },
  ];
  const shopAccessories = [
    {
      name: "Hiking Backpacks",
      link: "/product-list/MEN_HIKING_BACKPACKS",
    },
    {
      name: "Cross Body Bags",
      link: "/product-list/MEN_CROSS_BODY_BAG",
    },
    {
      name: "Belts",
      link: "/product-list/MEN_BELTS",
    },
    {
      name: "Socks",
      link: "/product-list/MEN_SOCKS",
    },
    {
      name: "Wallets/Cardholders",
      link: "/product-list/MEN_WALLETS_CARDS_HOLDERS",
    },
    {
      name: "Shoe Care",
      link: "/product-list/MEN_SHOECARE",
    },
    {
      name: "Trolley Bags",
      link: "/product-list/MEN_TROLLEY_BAGS",
    },
  ];
  const data = (e) => {
    let { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

//   const SubscribersMail = `mutation MyMutation {
//     createSubscribersMail(input: {id: "${email.email}"}) {
//   id
//   }
//   }
//  `;

  // const postComment = async () => {
  //   try {
  //     await API.graphql(graphqlOperation(SubscribersMail));
  //     toast.success("Thank you for subscribing");
  //   } catch (error) {
  //     toast.error(error);
  //     console.error(error);
  //   }
  // };
  // const handelsubmit = (e) => {
  //   e.preventDefault();
  //   postComment();
  //   setEmail({
  //     email: "",
  //   });
  // };
  return (
    <>
      <footer className={styles.footer_container}>
        <div>
          <div className={styles.textcenter}>
            <img src="/images/woodland-footer.png" alt="logo" />
          </div>
          <Grid
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
            container
            paddingTop={3}
          >
            <Grid item xs={12} md py={2}>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  md={4}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Shop Footwear
                  </Typography>
                  {shopFootwear.map((val, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={val.link}
                        sx={{
                          color: "rgba(255, 255, 255, 0.92)",
                          fontSize: "14px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          padding: "10px 0",
                          textDecoration: "none",
                        }}
                      >
                        {val.name}
                      </Link>
                    );
                  })}
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Shop Clothing Tops
                  </Typography>
                  {shopClothing.map((v, i) => {
                    return (
                      <Link
                        key={i}
                        href={v.link}
                        sx={{
                          color: "rgba(255, 255, 255, 0.92)",
                          fontSize: "14px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          padding: "10px 0",
                          textDecoration: "none",
                        }}
                      >
                        {v.name}
                      </Link>
                    );
                  })}
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Shop Accessories & Bags
                  </Typography>
                  {shopAccessories.map((value, index) => {
                    return (
                      <Link
                        key={index}
                        href={value.link}
                        sx={{
                          color: "rgba(255, 255, 255, 0.92)",
                          fontSize: "14px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          padding: "10px 0",
                          textDecoration: "none",
                        }}
                      >
                        {value.name}
                      </Link>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Divider
              sx={{
                marginX: "1rem",
              }}
              orientation="vertical"
              flexItem
            ></Divider>
            <Grid item md py={2}>
              <Grid container>
                <Grid item md={6}>
                  <Box width={"80%"}>
                    <Typography
                      sx={{
                        fontFamily: "Raleway",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "24px",
                        letterSpacing: "-0.10000000149011612px",
                        color: "#FFFFFFEB",
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "13px",
                        fontWeight: "300",
                        lineHeight: "20px",
                        color: "#FFFFFFEB",
                      }}
                    >
                      Need help? Get in touch with us and we’ll be more than
                      happy to guide you through!
                    </Typography>
                    <Typography
                      mt={2}
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "13px",
                        fontWeight: "300",
                        lineHeight: "20px",
                        letterSpacing: "0.1px",
                        textDecoration: "underline",
                        color: "#FFFFFFEB",
                      }}
                    >
                      care@woodlandworldwide.com
                    </Typography>
                    <Typography
                      mb={2}
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "13px",
                        fontWeight: "300",
                        lineHeight: "20px",
                        letterSpacing: "0.1px",
                        textDecoration: "underline",
                        color: "#FFFFFFEB",
                      }}
                    >
                      1800 103 3445
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "10px",
                        fontWeight: "300",
                        lineHeight: "20px",
                        color: "#FFFFFFEB",
                      }}
                    >
                      Woodland Customer Service Reps are available for inquiries
                      Monday to Friday from 10AM to 6PM.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      letterSpacing: "-0.10000000149011612px",
                      color: "#FFFFFFEB",
                    }}
                  >
                    Always keep exploring more!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "20px",
                      color: "#FFFFFFB8",
                    }}
                  >
                    Get alerts for new arrivals, offers, and more!
                  </Typography>
                  <Box my={1}>
                    <form
                      className={styles.footer_input_div}
                      // onSubmit={handelsubmit}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email.email}
                        onChange={data}
                        className={styles.footer_input}
                      />
                      <button type="submit" className={styles.footer_btn}>
                        Submit
                      </button>
                    </form>
                  </Box>
                  <Typography
                    width={"90%"}
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: "300",
                      lineHeight: "20px",
                      color: "#FFFFFFB8",
                    }}
                  >
                    By entering your email, you agree to our{" "}
                    <Link
                      href="#"
                      sx={{
                        fontWeight: "300",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        lineHeight: "20px",
                        textDecoration: "none",
                        color: "#FFFFFF",
                      }}
                    >
                      Terms of Service & Privacy Policy,
                    </Link>{" "}
                    including receipt of emails and promotions. You can
                    unsubscribe at any time.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} md={3}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Link
                    href="https://www.instagram.com/woodlandexploremore/"
                    target="_blank"
                  >
                    <InstagramIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/woodlandadventure"
                    target="_blank"
                  >
                    <FacebookRoundedIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </Link>
                  <Link href="https://twitter.com/Woodland" target="_blank">
                    <TwitterIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@woodland"
                    target="_blank"
                  >
                    <YouTubeIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/woodland/"
                    target="_blank"
                  >
                    <LinkedInIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={9}
                my={1}
                display={"flex"}
                alignItems={"center"}
              >
                <Typography
                  flexGrow={1}
                  className={styles.footer_divider}
                ></Typography>
              </Grid>
            </Grid>
            <Grid container mt={3}>
              <Grid
                item
                md={6}
                sm={12}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/about-us"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/term-of-service"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Terms of Service
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/privacy-policy"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/blog-page"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Blogs
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/refund-policy"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Refund policy
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/store-locator"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Store Locator
                  </Link>
                </Typography>
              </Grid>
              <Grid color={"#FFFFFF"} item md={6} sm={12} textAlign={"end"}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  Copyright 2022, Woodland Worldwide
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* ***************************Phone-View******************************** */}
          <Box
            sx={{
              display: {
                sm: "none",
              },
            }}
          >
            <Divider />
            <Box py={2}>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "28px",
                  letterSpacing: "-0.10000000149011612px",
                  color: "#FFFFFFEB",
                }}
              // className={styles.footer_details}
              >
                Always keep exploring more!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: "300",
                  lineHeight: "20px",
                  color: "#FFFFFFB8",
                }}
              >
                Get alerts for new arrivals, offers, and more!
              </Typography>
              <form >
                <Typography my={1} className={styles.footer_input_div}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email.email}
                    onChange={data}
                    className={styles.footer_input}
                  />
                  <button type="submit" className={styles.footer_btn}>
                    Submit
                  </button>
                </Typography>
              </form>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "300",
                  lineHeight: "20px",
                  color: "#FFFFFFB8",
                }}
              >
                By entering your email, you agree to our Terms of Service +
                Privacy Policy, including receipt of emails and promotions. You
                can unsubscribe at any time.
              </Typography>
            </Box>
            <Divider />
            <Grid container py={2}>
              <Grid item xs={6} display={"flex"} flexDirection={"column"}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/about-us"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/term-of-service"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Terms & Conditions
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/privacy-policy"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} flexDirection={"column"}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/blog-page"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Blog
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    FAQs
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    py: 1,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 0.92)",
                  }}
                >
                  <Link
                    href="/store-locator"
                    sx={{
                      color: "rgba(255, 255, 255, 0.92)",
                      textDecoration: "none",
                    }}
                  >
                    Find Store
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Box py={2}>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "28px",
                  letterSpacing: "-0.10000000149011612px",
                  color: "#FFFFFFEB",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "300",
                  lineHeight: "20px",
                  color: "#FFFFFFB8",
                }}
              >
                Need help? Get in touch with us and we’ll be more than happy to
                guide you through!
              </Typography>

              <Typography
                py={1}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "300",
                  lineHeight: "20px",
                  color: "#FFFFFFB8",
                }}
              >
                care@woodlandworldwide.com
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "300",
                  lineHeight: "20px",
                  color: "#FFFFFFB8",
                  textDecoration: "underline",
                }}
              >
                1800 103 3445
              </Typography>
            </Box>
            <Divider />
            <Box display={"flex"} pt={2} justifyContent={"space-between"}>
              <Link
                href="https://www.instagram.com/woodlandexploremore/"
                target="_blank"
              >
                <InstagramIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Link>
              <Link
                href="https://www.facebook.com/woodlandadventure"
                target="_blank"
              >
                <FacebookRoundedIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Link>
              <Link href="https://twitter.com/Woodland" target="_blank">
                <TwitterIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Link>
              <Link href="https://www.youtube.com/@woodland" target="_blank">
                <YouTubeIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/woodland/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </div>
      </footer>
    </>
  );
};
