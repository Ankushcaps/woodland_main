import "swiper/css/navigation";
import { useRouter } from "next/router";
import style from "./productcardplp.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Box, Link } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ProductCardPlp = ({ data }) => {
  const [skuindex, setSkuIndex] = useState(0);
  // console.log("sildecart", data);
  const currentsku = data.skus[skuindex];

  const router = useRouter();
  // Define your custom arrow components
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
  // Define your custom arrow components
  const CustomPrevButtonSku = ({ onClick }) => (
    <div className={style.customPrevButtonSku} onClick={onClick}>
      <img src="/images/home/prev-arrow.png" alt="Previous" />
    </div>
  );

  const CustomNextButtonSku = ({ onClick }) => (
    <div className={style.customNextButtonSku} onClick={onClick}>
      <img src="/images/home/next-arrow.png" alt="Next" />
    </div>
  );
  // const productDetails = () => {
  //   console.log("select_item_gtm_trigger");
  //   dataLayer.push({
  //     event: "select_item",
  //     ecommerce: {
  //       items: [
  //         {
  //           item_id: data.productID || "",
  //           item_name: currentsku.name || "",
  //           price: data.offerPrice || 0,
  //           item_brand: data.brand || "",
  //           item_category: data.division || "",
  //           item_category2: data.category || "",
  //           item_variant: currentsku.color || "",
  //           item_list_name: currentsku.name || "",
  //           item_var_id: currentsku.skuId || "",
  //         },
  //       ],
  //     },
  //   });
  // };
  return (
    <div>
      <div className={style.productwrapper}>
        <div className={style.card}>
          <Link
            href={`/productinfo/${currentsku.skuId}`}
            // onClick={productDetails}
          >
            <Swiper
              loop="true"
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              spaceBetween={5}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {currentsku.skuimg.map((val, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className={style.productimg}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: 290 / 290,
                        }}
                      >
                        <Image
                          src={val.img}
                          alt="prouduct-image"
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                          fill
                        />
                      </div>
                      {data.discount === 0 ? (
                        " "
                      ) : (
                        <span className={style.discount}>
                          {data.discount} %
                        </span>
                      )}
                      {data.bestseller && (
                        <span className={style.bestsellertag}>
                          &#9733; Bestseller
                        </span>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="custom-prev-button">
                <CustomPrevButton />
              </div>
              <div className="custom-next-button">
                <CustomNextButton />
              </div>
            </Swiper>
          </Link>

          <Box p={1}>
            <Swiper
              style={{
                display: "flex",
                alignItems: "center",
                // flex: 1,
                justifyContent: "center",
                width: "100%",
              }}
              loop="true"
              navigation={{
                prevEl: ".custom-prev-button-sku",
                nextEl: ".custom-next-button-sku",
              }}
              slidesPerView={data.image.length < 3 ? data.image.length : 3}
              modules={[FreeMode, Navigation]}
            >
              {data.image.map((val, idx) => {
                return (
                  <SwiperSlide
                    // className="mySwiper"
                    onClick={() => {
                      setSkuIndex(idx);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      // flex: 1,
                      justifyContent: "center",
                      width: "100%",
                    }}
                    key={idx}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <img
                        style={{
                          cursor: "pointer",
                          objectFit: "contain",
                          border: skuindex === idx ? "1px solid grey" : "",
                        }}
                        width="35px"
                        height="35px"
                        src={val.img}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="custom-prev-button-sku">
                <CustomPrevButtonSku />
              </div>
              <div className="custom-next-button-sku">
                <CustomNextButtonSku />
              </div>
            </Swiper>
          </Box>

          <p className={style.productname}>{currentsku.name.toLowerCase()}</p>
          <p className={style.productprice}>
            {data.discount ? <span>₹{data.price}</span> : ""}₹{data.offerPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCardPlp;
