import axios from "axios";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import PlpBanner from "@/components/Plpbanner/plpbanner";
import ProductCardPlp from "@/components/productcardplp/productcardplp";
import LoadingSpinner from "@/components/Loading/Loading";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/header";

const BestSellerList = () => {
  const [plpdetails, setPlpdetails] = useState();
  const [productCount, setProductCount] = useState(12);
  const [productlisting, setProductlisting] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router;
  const { slug } = query;

  useEffect(() => {
    if (productCount >= productlisting.length) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [productCount]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 350
    ) {
      setIsLoading(true);
      setProductCount((prevCount) => prevCount + 12);
      setIsLoading(false);
      // setTimeout(() => {
      // }, 500); // simulate loading delay of 1 second
    }
  };

  async function fetchProductDetails() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://verwgrfk5k.execute-api.ap-south-1.amazonaws.com/prod/best`
      );
      setProductlisting(response.data.products || []);
      //   pushProductListingEvents(response.data.products);
      setPlpdetails(response.data.category);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const productsToDisplay = productlisting?.slice(0, productCount);

  //   useEffect(() => {
  //     setProductCount(12);
  //   }, [slug]);

  useEffect(() => {
    setProductCount(12);
    fetchProductDetails();
  }, []);

  //   function pushProductListingEvents(products) {
  //     dataLayer.push({
  //       event: "view_item_list",
  //       ecommerce: {
  //         items: [
  //           products.map((product, index) => {
  //             const skus = product.skus || [];
  //             const currentsku = skus[0] || {};
  //             return {
  //               item_id: product.productID || "",
  //               item_name: currentsku.name || "",
  //               price: product.offerPrice || 0,
  //               item_brand: product.brand || "",
  //               item_category: product.division || "",
  //               item_category2: product.category || "",
  //               item_variant: currentsku.color || "",
  //               position: index + 1,
  //               item_list_name: currentsku.name || "",
  //               item_var_id: currentsku.skuId || "",
  //             };
  //           }),
  //         ],
  //       },
  //     });
  //   }

  return (
    <Box>
      <Header />
      <Head>
        <title>{plpdetails?.seo_title}</title>
        <meta name="description" content={plpdetails?.seo_description} />
      </Head>
      {loading ? (
        <Box>
          <LoadingSpinner />
        </Box>
      ) : (
        <Box
          sx={{
            paddingX: {
              md: 12,
              sm: 4,
              xs: 2,
            },
          }}
        >
          <PlpBanner bannerimg={"/images/catbanner/BEST_SELLER.png"} />
          <p>HOME / SHOP / BESTSELLERS</p>
          <Box
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
              justifyContent: "space-between",
              py: 2,
              alignItems: "center",
            }}
          >
            <Box>BESTSELLERS</Box>
            <Box sx={{ flex: 1 }}>
              <div style={{ width: "80%" }}>
                Now discover our most popular products based on sales
              </div>
            </Box>
          </Box>

          <Box>
            <Grid container pb={5} spacing={2}>
              {productsToDisplay.map((val, idx) => {
                return (
                  <Grid key={idx} item md={3} sm={6} xs={6}>
                    <ProductCardPlp data={val} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      )}

      {productsToDisplay.length === productlisting?.length && <Footer />}
    </Box>
  );
};
export default BestSellerList;
