import axios from "axios";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import ProductCard from "../productcardnew/productcard";
import style from "./heroBanner/herobanner.module.css";
function WoodsSilder() {
  const [woods, setWoods] = useState([]);
  const [loading, setLoading] = useState(true);
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

  async function woodsApi() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://woodland.capcons.com/favwoodsports`
      );
      const res = response.data.products;
      setWoods(res || []);
      //   pushProductListingEvents(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  //   function pushProductListingEvents(products) {
  //     dataLayer.push({
  //       event: "view_item_list",
  //       ecommerce: {
  //         items: products.map((product, index) => {
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
  //       },
  //     });
  //   }

  useEffect(() => {
    woodsApi();
  }, []);
  return (
    <section>
      <Box>
        <Swiper
          spaceBetween={30}
          slidesPerView={4.5}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3.5,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 4,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4.5,
            },
          }}
        >
          {woods?.map((data, id) => (
            <SwiperSlide key={id}>
              <ProductCard data={data} aspectRatio={290 / 290} />
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

export default WoodsSilder;
