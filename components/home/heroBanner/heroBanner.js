import Link from "next/link";
import React from "react";
import Image from "next/image";
import style from "./herobanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/swiper.min.css";

const HomeBanner = [
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/hero_banner_4.png",
    link: "/sale-page",
  },

  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/hero_banner_2.png",
    link: "/product-list/MEN_POLO",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/hero_banner_3.png",
    link: "/brands/WOODSPORTS",
  },
  {
    img: "https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/hero_banner_1.png",
    link: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
  },
];

function HeroBanner() {
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
    <section>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {HomeBanner.map((val, idx) => (
          <SwiperSlide key={idx}>
            <Link href={val.link}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: 1911 / 812,
                }}
              >
                <Image
                  src={val.img}
                  alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </div>
            </Link>
            <div className="custom-prev-button">
              <CustomPrevButton />
            </div>
            <div className="custom-next-button">
              <CustomNextButton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroBanner;
