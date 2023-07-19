import { Box, Button, Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import Cartlist from "../../components/Cartlist";
// import { AppLayout } from "../../components";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import { toast } from "react-toastify";
// import { addToCart } from "../../features/CartSlice";
import ProductCard from "../../components/productcardnew/productcard";
import Image from "next/image";
import AWS from "aws-sdk";
import cursor from "../../styles/Home.module.css";
// import StickyCart from "../../components/StickyCart/StickyCart";
import LoadingSpinner from "../../components/Loading/Loading";
import ProductPrice from "@/components/productprice/productprice";
import ColorPicker from "@/components/colorpicker/colorpicker";
import SizePicker from "@/components/sizepicker/sizepicker";
import ShippingAva from "@/components/shippingava/shippingava";
import ProductSelectBox from "@/components/quantityselector/quantityselector";
import ManufactueDetails from "@/components/ManufactueDetails/ManufactueDetails";
import ProductAccordion from "@/components/productAccordion/productAccordion";
import Recommened from "@/components/recommened/recommened";
import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer";

const ProductInformation = () => {
  // const [currentproduct, setCurrentProduct] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [currentStock, setCurrentStock] = useState(1);

  const [skuid, setSkuid] = useState();
  const [data, setData] = useState();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [selectedsize, setSelectedsize] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);
  // const [stickyCart, setStickyCart] = useState(false);
  const [desktopActiveImage, setActiveDesktopImage] = useState(0);
  const [manufactureDrawer, setManufactureDrawer] = useState(false);
  const [modal, setModal] = useState(false);
  const [addbtn, setAddbtn] = useState(false);
  // const [productSku, setProductSku] = useState();
  const [recentSku, setRecentSku] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { cart } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = router;
  const { slug } = query;

  const isBrowser = () => typeof window !== "undefined";

  const handleaddbtn = () => {
    setAddbtn(true);
  };
  const handleModelOpen = () => {
    setModal(true);
  };
  const handleModelClose = () => {
    setModal(false);
  };
  const changeSkus = (value, sizeid) => {
    // setCurrentProduct(value);
    // setProductSku();
    setRecentSku(sizeid);
  };
  const productStock = (value) => {
    setCurrentStock(value);
  };
  const currentSize = (value, sizeid) => {
    setSelectedsize(value);
    setSkuid(sizeid);
  };
  const currentQty = (value) => {
    setSelectedQty(value);
  };

  const fetchData = (id) => {
    setLoading(true);
    fetch(
      `https://verwgrfk5k.execute-api.ap-south-1.amazonaws.com/prod/product/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        // pushProductViewEvents(data);
        setLoading(false);
      });
  };

  // const productdata = !loading && data?.skus[currentproduct];

  useEffect(() => {
    if (slug && !initialLoadComplete) {
      const parts = slug.split("-");
      const productID = parts[0]; // FGC015050091A
      setRecentSku(slug);
      fetchData(productID);
      setInitialLoadComplete(true);
    }
  }, [slug, initialLoadComplete]);

  useEffect(() => {
    if (slug) {
      router.replace(`/productinfo/${recentSku}`, undefined, { shallow: true });
    }
  }, [recentSku]);

  const handleAddToCart = () => {
    if (selectedsize != undefined) {
      setButtonLoading(true);
      setTimeout(() => {
        dispatch(
          addToCart({
            id: `${dynamic[0].articleCode}${dynamic[0].color}${selectedsize}`,
            name: dynamic[0]?.name,
            articalid: dynamic[0].articleCode,
            color: dynamic[0].color,
            price: parseInt(data?.offerPrice),
            maxprice: parseInt(data?.price),
            imageurl: fisrtskuimg,
            size: selectedsize,
            quantity: parseInt(selectedQty),
            skuid: dynamic[0]?.skuId || "",
            subOrderSizeId: skuid,
            productid: data.productID || "",
            category: data.category || "",
            division: data.division || "",
            brand: data.brand || "",
          })
        );
        setCartDrawer(true);
        setButtonLoading(false);
      }, 1500);

      // dataLayer.push({
      //   event: "add_to_cart",
      //   ecommerce: {
      //     items: [
      //       {
      //         item_id: data.productID || "",
      //         item_name: dynamic[0]?.name || "",
      //         price: parseInt(data?.offerPrice) || 0,
      //         item_brand: data.brand || "",
      //         item_category: data.division || "",
      //         item_category2: data.category || "",
      //         item_quantity: parseInt(selectedQty) || "",
      //         item_variant: dynamic[0]?.color || "",
      //         item_list_name: dynamic[0]?.name || "",
      //         item_list_id: dynamic[0]?.skuId || "",
      //       },
      //     ],
      //   },
      // });

      // pushViewCartEvents();
    } else {
      toast.error("Please Select The Size");
    }
  };
  // function pushViewCartEvents() {
  //   dataLayer.push({
  //     event: "view_cart",
  //     ecommerce: {
  //       items: cart?.map((val, index) => {
  //         // const skus = product.skus || [];
  //         // const currentsku = skus[0] || {};
  //         return {
  //           item_id: val.productid || "",
  //           item_name: val.name || "",
  //           price: val.price || 0,
  //           item_brand: val.brand || "",
  //           item_category: val.division || "",
  //           item_category2: val.category || "",
  //           item_variant: val.color || "",
  //           position: index + 1,
  //           item_list_name: val.name || "",
  //           item_brand: val.brand || "",
  //           item_var_id: val.skuid || "",
  //           // item_list_id: product.skuId || "",
  //           skuId: val.subOrderSizeId || "",
  //         };
  //       }),
  //     },
  //   });
  // }

  // function pushProductViewEvents(data) {
  //   dataLayer.push({
  //     event: "view_item",
  //     ecommerce: {
  //       items: [
  //         {
  //           item_id: data.productID || "",
  //           item_name: data?.skus?.[0]?.name || "",
  //           price: data.offerPrice || 0,
  //           item_brand: data.brand || "",
  //           item_category: data.division || "",
  //           item_category2: data.category || "",
  //           item_variant: data?.skus?.[0]?.color || "",
  //           item_list_name: data?.skus?.[0]?.name || "",
  //           item_list_id: data?.skus?.[0]?.skuId || "",
  //         },
  //       ],
  //     },
  //   });
  // }

  const folderName = `ppublic/${!loading && data.productID}/${
    !loading && recentSku.split("-")[1]
  }/`;
  const bucketName = `varunwoodland`;
  const getImage = async (folderName, bucketName) => {
    try {
      if (!folderName || !bucketName) {
        throw new Error("Invalid input");
      }

      AWS.config.update({
        accessKeyId: "AKIATYR2XB22GEMOOBWF",
        secretAccessKey: "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",
      });

      const s3 = new AWS.S3();

      const objects = await s3
        .listObjects({ Bucket: bucketName, Prefix: folderName })
        .promise();

      const files = objects.Contents.filter(
        (object) => !object.Key.endsWith("/")
      ).map((object) => object.Key);
      setFiles(files);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!loading && folderName && bucketName) {
      getImage(folderName, bucketName);
    }
  }, [folderName, bucketName]);

  // const handel = () => {
  //   if (window.scrollY > 750) {
  //     setStickyCart(true);
  //   }
  //   if (window.scrollY < 750) {
  //     setStickyCart(false);
  //   }
  // };

  // if (isBrowser()) {
  //   window.addEventListener("scroll", handel);
  // }

  const dynamic = data?.skus.filter((obj) => obj.skuId === recentSku);
  const fisrtskuimg = !loading && dynamic[0].skuimg[0].img;

  return (
    <Box>
      <Header />
      {/* <Head>
        <title>
          {
            "Capcons | A Social Network to Engage, Connect And Retain Your Customers"
          }
        </title>
        <meta
          name="description"
          content={
            "Capcons is where entrepreneurs, brands and large corporates build their own digital communities, courses, and memberships for their exclusive and valued customers"
          }
        />
        <meta
          name="keywords"
          content={
            "capcons, capcons social network, capcons community app, community platform, social network platform, free online communities, smart social network, social community platform"
          }
        />
        <meta
          property="og:title"
          content="Capcons | A Social Network to Engage, Connect And Retain Your Customers"
        />
        <meta
          property="og:description"
          content="Capcons is where entrepreneurs, brands and large corporates build their own digital communities, courses, and memberships for their exclusive and valued customers"
        />
        <meta property="og:url" content="https://www.capcons.com/brands" />
        <meta
          property="og:image"
          content="https://assets.capcons.com/web/og/og-whitebg.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@capcons" />
        <meta
          name="twitter:title"
          content="Capcons - Share Your Moments fearlessly | Join Now"
        />
        <meta
          name="twitter:description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta
          name="twitter:image"
          content="https://assets.capcons.com/web/og/og-whitebg.jpeg"
        />
      </Head> */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Box
          sx={{
            paddingX: {
              md: 6,
              sm: 4,
              xs: 2,
            },
            marginTop: {
              md: 6,
              sm: 4,
              xs: 2,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
              <Grid
                spacing={1}
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
                container
              >
                {files.map((val, idx) => {
                  return (
                    <Grid
                      onClick={handleModelOpen}
                      className={cursor.customCursorIn}
                      key={idx}
                      item
                      sm={6}
                      xs={12}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: 481 / 481,
                        }}
                      >
                        <img
                          src={`https://varunwoodland.s3.ap-south-1.amazonaws.com/${val}`}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          // layout="fill"
                          // objectFit="contain"
                          // priority={true}
                        />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
              <Box
                sx={{
                  display: {
                    sm: "none",
                    xs: "block",
                  },
                }}
              >
                <Swiper
                  loop="true"
                  // navigation={{
                  //   prevEl: ".custom-prev-button",
                  //   nextEl: ".custom-next-button",
                  // }}
                  spaceBetween={5}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                >
                  {files.map((val, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <div>
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              aspectRatio: 481 / 481,
                            }}
                          >
                            <Image
                              src={`https://varunwoodland.s3.ap-south-1.amazonaws.com/${val}`}
                              style={{ objectFit: "contain" }}
                              alt="products-images"
                              fill
                              priority
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </Grid>
            <Grid item md={5} xs={12}>
              <ProductPrice priceinfo={data} recentsku={dynamic} />
              <Box>
                <ColorPicker
                  colorname={dynamic[0].color}
                  colorimage={data?.image}
                  changeSkus={changeSkus}
                  plpindex={recentSku}
                />
              </Box>
              <Box mt={"1rem"}>
                <SizePicker
                  sizeguid={data.division}
                  currentproduct={dynamic[0]}
                  sizedata={dynamic[0]}
                  currentSize={currentSize}
                  productStock={productStock}
                />
              </Box>
              <Box mt={"1rem"}>
                <ShippingAva />
              </Box>

              <Box mt={"1rem"}>
                <Grid container spacing={1}>
                  <Grid item sm={3} xs={3}>
                    <ProductSelectBox
                      stock={currentStock}
                      currentQty={currentQty}
                    />
                  </Grid>
                  <Grid item sm={7} xs={7}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      <Button
                        onClick={() => {
                          handleAddToCart();
                        }}
                        sx={{
                          width: "100%",
                          height: "100%",
                          color: "#FFFFFF",
                          position: "relative",
                          backgroundColor: "#3B6F44",
                          borderRadius: "0",
                          fontFamily: "Raleway",
                          ":hover": {
                            color: "#FFFFFF",
                            backgroundColor: "#3B6F44",
                          },
                        }}
                      >
                        <div>
                          <img
                            style={{
                              marginRight: ".5rem",
                            }}
                            width="20px"
                            height="20px"
                            src="/images/cart-button.png"
                          />
                          ADD TO CART
                        </div>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={2} xs={2}>
                    <Button
                      sx={{
                        width: "100%",
                        height: "100%",
                        color: "#000000",
                        backgroundColor: "#edededd9",
                        borderRadius: "0",
                        fontFamily: "Raleway",
                        ":hover": {
                          color: "#000000",
                          backgroundColor: "#edededd9",
                        },
                      }}
                    >
                      &#9825;
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={"1rem"}>
                <ProductAccordion description={dynamic[0]} />
              </Box>
              <Box
                my={"1rem"}
                onClick={() => {
                  setManufactureDrawer(true);
                }}
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "13px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  textTransform: "uppercase",
                  color: "rgba(175, 175, 175, 1)",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Import, Manufacturing & Packaging Info
              </Box>
            </Grid>
          </Grid>
          <Container
            sx={{
              my: 3,
            }}
          >
            <Recommened />
          </Container>
          {/* <button
            style={{
              position: "relative",
              width: "170px",
              height: "45px",
              // backgroundColor: buttonLoading ? "green" : "",
              border: "none",
              // overflow: "hidden",
            }}
            onClick={handleAddToCart}
          >
            <div
              className={`${cursor.addbtn} ${
                buttonLoading ? cursor.btnbeforeanimation : cursor.btnanimation
              }`}
            ></div>
            {!buttonLoading && (
              <div style={{ color: "black" }}>add to cart</div>
            )}
            {buttonLoading && <div>Adding...</div>}
          </button> */}

          <Box>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 10000,
                backgroundColor: "white",
                transition: "all 1s ease",
                height: modal ? "100vh" : "0px",
                width: modal ? "100vw" : "0px",
                overflow: "auto",
                transformOrigin: "100px 100px",
              }}
              className={`swiper-modal`}
            >
              <div>
                <div>
                  <Grid container>
                    <Grid item sm={2}>
                      <div
                        style={{
                          position: "sticky",
                          // width: "200px",
                          top: 0,
                          height: "100vh",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          overflow: "auto",
                          background: "white",
                        }}
                      >
                        {files?.map((i, index) => (
                          <img
                            key={index}
                            style={{
                              border:
                                desktopActiveImage === index
                                  ? "1px solid black"
                                  : null,

                              height: 160,
                              width: 120,
                              margin: "auto",
                            }}
                            src={`https://varunwoodland.s3.ap-south-1.amazonaws.com/${i}`}
                            alt="..."
                            className="img-fluid"
                            onClick={() => {
                              setActiveDesktopImage(index);
                              const link = document.createElement("a");
                              link.href = "#" + index;
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }}
                          />
                        ))}
                      </div>
                    </Grid>
                    <Grid item sm={10}>
                      <div style={{ padding: "20px", marginLeft: 20 }}>
                        {files.map((i, index) => (
                          <div
                            key={index}
                            id={index}
                            className={cursor.customCursorOut}
                            onClick={handleModelClose}
                          >
                            <img
                              src={`https://varunwoodland.s3.ap-south-1.amazonaws.com/${i}`}
                              width={"100%"}
                              alt="..."
                              className="img-fluid"
                            />
                          </div>
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Box>
          {/* <Box
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            {stickyCart && (
              <StickyCart
                data={data}
                currentproduct={dynamic[0]}
                skuimg={fisrtskuimg}
                skusize={selectedsize}
                validcart={handleCart}
              />
            )}
          </Box> */}
          {/* <Cartlist cartDrawer={cartDrawer} setCartDrawer={setCartDrawer} /> */}
          <ManufactueDetails
            manufactureDrawer={manufactureDrawer}
            setManufactureDrawer={setManufactureDrawer}
            data={dynamic[0]}
            productlevel={data}
          />
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default ProductInformation;
