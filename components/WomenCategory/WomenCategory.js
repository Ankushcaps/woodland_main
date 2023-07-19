import { Container, Box, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./womencategory.module.css";
import React from "react";

function WomenCat() {
  return (
    <Container>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <Grid container>
          <Grid item md={2}>
            <div className={styles.categoryevent}>
              <Link href="/sale-page">
                <h5 className={styles.category}>Sale</h5>
              </Link>
              <Link href="/new-arrivals/new">
                <h5 className={styles.category}>New Arrivals</h5>
              </Link>
              <Link href="/brands/WOODSPORTS">
                <h5 className={styles.category}>Woodsports</h5>
              </Link>
              <Link href="/brands/WOODS ">
                <h5 className={styles.category}>Woods</h5>
              </Link>
              <Link href="/brands/ASKATINGMONK">
                <h5 className={styles.category}>StreetWear</h5>
              </Link>
            </div>
          </Grid>
          <Grid container item xs={2} md={10} spacing={4}>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Footwear</h4>
              <Link href="/product-list/WOMEN_BOOTS">
                <h5 className={styles.category}>Boots</h5>
              </Link>
              <Link href="/product-list/WOMEN_SNEAKERS">
                <h5 className={styles.category}>Sneaker/Sports</h5>
              </Link>
              {/* <Link href="/product-list/WOMEN_FORMAL"> */}
              <h5 className={styles.category}>Formal</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_HEELS">
                  <h5 className={styles.subcategory}>Heels</h5>
                </Link>
                <Link href="/product-list/WOMEN_BALLERINAS">
                  <h5 className={styles.subcategory}>Ballerinas</h5>
                </Link>
                <Link href="/product-list/WOMEN_LOAFERS">
                  <h5 className={styles.subcategory}>Loafers</h5>
                </Link>
              </div>
              <Link href="/product-list/WOMEN_SLIPPERS">
                <h5 className={styles.category}>Slippers/Flip-Flops</h5>
              </Link>
              <Link href="/product-list/WOMEN_SANDALS">
                <h5 className={styles.category}>Sandals</h5>
              </Link>
            </Grid>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Clothing Tops</h4>
              {/* <Link href="/product-list/WOMEN_JACKETS"> */}
              <h5 className={styles.category}>Jackets</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_JACKETS_FULL_SLEEVE">
                  <h5 className={styles.subcategory}>Full Sleeve</h5>
                </Link>
                <Link href="/product-list/WOMEN_JACKETS_SLEEVE_LESS">
                  <h5 className={styles.subcategory}>Sleeve Less</h5>
                </Link>
                <Link href="/product-list/WOMEN_LEATHER">
                  <h5 className={styles.subcategory}>Leather</h5>
                </Link>
                <Link href="/product-list/WOMEN_WINDCHEATER">
                  <h5 className={styles.subcategory}>Windcheater</h5>
                </Link>
              </div>
              {/* <Link href="/product-list/WOMEN_T-SHIRTS"> */}
              <h5 className={styles.category}>T-shirts</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_POLO">
                  <h5 className={styles.subcategory}>Polo</h5>
                </Link>
                <Link href="/product-list/WOMEN_ROUND_TEES">
                  <h5 className={styles.subcategory}>Round Tees</h5>
                </Link>
                <Link href="/product-list/WOMEN_V_NECK">
                  <h5 className={styles.subcategory}>V-Neck</h5>
                </Link>
              </div>
              {/* <Link href="/product-list/WOMEN_SHIRTS"> */}
              <h5 className={styles.category}>Shirts</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_SHIRTS_FULL_SLEEVE">
                  <h5 className={styles.subcategory}>Full Sleeve</h5>
                </Link>
                <Link href="/product-list/WOMEN_SHIRTS_HALF_SLEEVE">
                  <h5 className={styles.subcategory}>Half Sleeve</h5>
                </Link>
              </div>
              {/* <Link href="/product-list/WOMEN_SWEATERS"> */}
              <h5 className={styles.category}>Sweaters</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_SWEATERS_FULL_SLEEVE">
                  <h5 className={styles.subcategory}>Full Sleeve</h5>
                </Link>
                <Link href="/product-list/WOMEN_SWEATERS_SLEEVE_LESS">
                  <h5 className={styles.subcategory}>Sleeve Less</h5>
                </Link>
              </div>
              {/* <Link href="/product-list/WOMEN_SWEATSHIRTS_&_HOODIES"> */}
              <h5 className={styles.category}>Sweatshirts & Hoodies</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/WOMEN_SWEATSHIRTS">
                  <h5 className={styles.subcategory}>Sweatshirts</h5>
                </Link>
                <Link href="/product-list/WOMEN_HOODIES">
                  <h5 className={styles.subcategory}>Hoodies</h5>
                </Link>
              </div>
              <Link href="/product-list/WOMEN_DRESSES">
                <h5 className={styles.category}>Dresses</h5>
              </Link>
              <Link href="/product-list/WOMEN_TRACKSUITS">
                <h5 className={styles.category}>Tracksuits</h5>
              </Link>
            </Grid>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Clothing Bottoms</h4>
              {/* <Link href="/product-list/WOMEN_BOTTOMS"> */}
              <h5 className={styles.category}>Bottoms</h5>
              {/* </Link> */}
              <Link href="/product-list/WOMEN_CHINOS">
                <h5 className={styles.subcategory}>Chinos</h5>
              </Link>
              <Link href="/product-list/WOMEN_SHORTS">
                <h5 className={styles.subcategory}>Shorts</h5>
              </Link>
              <Link href="/product-list/WOMEN_DENIMS">
                <h5 className={styles.subcategory}>Denims</h5>
              </Link>
              <Link href="/product-list/WOMEN_CORDUROYS">
                <h5 className={styles.subcategory}>Corduroys</h5>
              </Link>
              <Link href="/product-list/WOMEN_TRACKPANTS">
                <h5 className={styles.subcategory}>Track Pants</h5>
              </Link>
              <Link href="/product-list/WOMEN_CARGO">
                <h5 className={styles.subcategory}>Cargos</h5>
              </Link>
              <h4 className={styles.greenCategory}>Bags</h4>
              <Link href="/product-list/WOMEN_HAND_BAGS">
                <h5 className={styles.category}> Hand Bags/Slings</h5>
              </Link>
              <Link href="/product-list/WOMEN_HIKING_BACKPACKS">
                <h5 className={styles.category}>Hiking Backpacks</h5>
              </Link>
              <Link href="/product-list/WOMEN_CANVAS_BAGS">
                <h5 className={styles.category}>Canvas Bags</h5>
              </Link>
              <Link href="/product-list/WOMEN_BACKPACKS">
                <h5 className={styles.category}>Backpacks</h5>
              </Link>
              <Link href="/product-list/WOMEN_TROLLEY_BAGS">
                <h5 className={styles.category}>Trolley Bags</h5>
              </Link>
              <Link href="/product-list/WOMEN_WATERPROOF_BAGS">
                <h5 className={styles.category}>Waterproof Bags</h5>
              </Link>
            </Grid>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Accessories</h4>
              <Link href="/product-list/WOMEN_BELTS">
                <h5 className={styles.category}>Belts</h5>
              </Link>
              <Link href="/product-list/WOMEN_SOCKS">
                <h5 className={styles.category}>Socks</h5>
              </Link>
              <Link href="/product-list/WOMEN_WALLETS_CARDHOLDERS">
                <h5 className={styles.category}>Wallets/Card holders</h5>
              </Link>
              <Link href="/product-list/WOMEN_LACE">
                <h5 className={styles.category}>Lace</h5>
              </Link>
              <Link href="/product-list/WOMEN_KEY_RINGS">
                <h5 className={styles.category}>Key Rings</h5>
              </Link>
              <Link href="/product-list/WOMEN_TRAVEL_KIT">
                <h5 className={styles.category}>Travel Kit</h5>
              </Link>
              <Link href="/product-list/WOMEN_FLASKS">
                <h5 className={styles.category}>Flasks</h5>
              </Link>
              <Link href="/product-list/WOMEN_MASK">
                <h5 className={styles.category}>Mask</h5>
              </Link>
              <Link href="/product-list/WOMEN_SHOE_CARE">
                <h5 className={styles.category}>Shoe Care</h5>
              </Link>
              <Grid item xs={12} md={12}>
                <h4
                  style={{ marginTop: "5px" }}
                  className={styles.greenCategory}
                >
                  Wearables
                </h4>
                <Link href="/product-list/WOMEN_SUMMER_CAPS">
                  <h5 className={styles.category}>Summer Caps</h5>
                </Link>
                <Link href="/product-list/WOMEN_WOLLEN_CAPS">
                  <h5 className={styles.category}>Woollen Caps</h5>
                </Link>
                <Link href="/product-list/WOMEN_HEAD_BANDS">
                  <h5 className={styles.category}>Head Bands</h5>
                </Link>
                <Link href="/product-list/WOMEN_GLOVES">
                  <h5 className={styles.category}>Gloves</h5>
                </Link>
                <Link href="/product-list/WOMEN_EYEWEAR">
                  <h5 className={styles.category}>Eyewear</h5>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default WomenCat;
