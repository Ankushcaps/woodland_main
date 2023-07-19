import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categoryBanner.module.css";
import { Button } from "@/components/UI";
function CategoryBanner({ link, img }) {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.Image}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: 1901 / 605,
          }}
        >
          <Image
            src={img}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            alt="Woodland Shoes for Men, Woodland shoes for women, Woodland apparel"
            quality={100}
          />
        </div>
      </div>
      <div className={styles.bannerContent}>
        <Link href={link}>
          <Button>Shop Now</Button>
        </Link>
      </div>
    </section>
  );
}

export default CategoryBanner;
