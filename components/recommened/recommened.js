import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel } from "swiper";
import { Box } from "@mui/material";
import style from "../home/heroBanner/herobanner.module.css";
import axios from "axios";
import ProductCard from "../productcardnew/productcard";

function Recommened() {
  const [recommened, setRecommened] = useState();
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

  async function bestSeller() {
    try {
      const response = await axios.get(
        `https://verwgrfk5k.execute-api.ap-south-1.amazonaws.com/prod/best`
      );
      const res = response.data.products;
      setRecommened(res || []);
      // pushViewItemsListPdp(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  // function pushViewItemsListPdp(val) {
  //   dataLayer.push({
  //     event: "view_item_list",
  //     ecommerce: {
  //       items: [
  //         val.map((product, index) => {
  //           const skus = product.skus || [];
  //           const currentsku = skus[0] || {};
  //           return {
  //             item_id: product.productID || "",
  //             item_name: currentsku.name || "",
  //             price: product.offerPrice || 0,
  //             item_brand: product.brand || "",
  //             item_category: product.division || "",
  //             item_category2: product.category || "",
  //             item_variant: currentsku.color || "",
  //             position: index + 1,
  //             item_list_name: currentsku.name || "",
  //             item_var_id: currentsku.skuId || "",
  //           };
  //         }),
  //       ],
  //     },
  //   });
  // }
  useEffect(() => {
    bestSeller();
  }, []);
  return (
    <section>
      <Box
        sx={{
          fontFamily: "Raleway",
          fontWeight: "700",
          fontSize: {
            sm: "26px",
            xs: "20px",
          },
          color: "#3B6F44",
          lineHeight: "35px",
          mb: 3,
        }}
      >
        Top Sellers recommened for you
      </Box>
      <Box>
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          mousewheel={true}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          modules={[Autoplay, Navigation, Mousewheel]}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {recommened?.map((val, id) => (
            <SwiperSlide key={id}>
              <ProductCard data={val} aspectRatio={290 / 290} />
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
    </section>
  );
}

export default Recommened;
