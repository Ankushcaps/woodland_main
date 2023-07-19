import { Container, Box, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./mencategory.module.css";
import React from "react";

function MenCategory({ close }) {
  return (
    <Container>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ paddingTop: "30px", paddingBottom: "20px" }}
      >
        <Grid container>
          <Grid item md={2}>
            <div className={styles.categoryevent}>
              <Link href="/sale-page">
              <h5 className={styles.category}>Sale</h5>
              </Link>
              <Link href="/new-arrivals/new">
                <h5 className={styles.category}> New Arrivals</h5>
              </Link>
              <Link href="/brands/WOODSPORTS">
                <h5 className={styles.category}> Woodsports</h5>
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
              <Link href="/product-list/MEN_BOOTS">
                <h5 className={styles.category} onClick={close}>
                  Boots
                </h5>
              </Link>
              <Link href="/product-list/MEN_SNEAKERS">
                <h5 className={styles.category} onClick={close}>
                  Sneaker/Sports
                </h5>
              </Link>

              {/* <Link href="/product-list/MEN_CASUALS"> */}
              <h5 className={styles.category} onClick={close}>
                Casuals
              </h5>
              {/* </Link> */}

              <div>
                <Link href="/product-list/MEN_CASUALS_LACE_UP">
                  <h5 className={styles.subcategory} onClick={close}>
                    Lace up
                  </h5>
                </Link>
                <Link href="/product-list/MEN_CASUALS_SLIP_ON">
                  <h5 className={styles.subcategory} onClick={close}>
                    Slip on
                  </h5>
                </Link>
                <Link href="/product-list/MEN_CANVAS">
                  <h5 className={styles.subcategory} onClick={close}>
                    Canvas
                  </h5>
                </Link>
              </div>
              {/* <Link href="/product-list/MEN_FORMAL"> */}
              <h5 className={styles.category}>Formal</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_FORMAL_SLIP_ON">
                  <h5 className={styles.subcategory} onClick={close}>
                    Slip on
                  </h5>
                </Link>
                <Link href="/product-list/MEN_FORMAL_LACE_UP">
                  <h5 className={styles.subcategory} onClick={close}>
                    Lace up
                  </h5>
                </Link>
              </div>
              <Link href="/product-list/MEN_SLIPPERS">
                <h5 className={styles.category} onClick={close}>
                  Slippers/Flip-Flops
                </h5>
              </Link>
              <Link href="/product-list/MEN_SANDALS">
                <h5 className={styles.category} onClick={close}>
                  Sandals
                </h5>
              </Link>
              <Link href="/product-list/MEN_SAFETY_SHOES">
                <h5 className={styles.category} onClick={close}>
                  Safety Shoes
                </h5>
              </Link>
            </Grid>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Clothing Tops</h4>

              {/* <Link href="/product-list/MEN_JACKETS"> */}
              <h5 className={styles.category}>Jackets</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_JACKETS_FULL_SLEEVE">
                  <h5 className={styles.subcategory} onClick={close}>
                    Full Sleeve
                  </h5>
                </Link>
                <Link href="/product-list/MEN_JACKETS_SLEEVE_LESS">
                  <h5 className={styles.subcategory} onClick={close}>
                    Sleeve Less
                  </h5>
                </Link>
                <Link href="/product-list/MEN_LEATHER">
                  <h5 className={styles.subcategory} onClick={close}>
                    Leather
                  </h5>
                </Link>
                <Link href="/product-list/MEN_WINDCHEATER">
                  <h5 className={styles.subcategory} onClick={close}>
                    Windcheater
                  </h5>
                </Link>
              </div>

              {/* <Link href="/product-list/MEN_T-SHIRTS"> */}
              <h5 className={styles.category}>T-shirts</h5>
              {/* </Link> */}

              <div>
                <Link href="/product-list/MEN_POLO">
                  <h5 className={styles.subcategory} onClick={close}>
                    Polo
                  </h5>
                </Link>
                <Link href="/product-list/MEN_ROUND_TEES">
                  <h5 className={styles.subcategory} onClick={close}>
                    Round Tees
                  </h5>
                </Link>
                <Link href="/product-list/MEN_V_NECK">
                  <h5 className={styles.subcategory} onClick={close}>
                    V-Neck
                  </h5>
                </Link>
              </div>

              {/* <Link href="/product-list/MEN_SHIRTS"> */}
              <h5 className={styles.category}>Shirts</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_SHIRTS_FULL_SLEEVE">
                  <h5 className={styles.subcategory} onClick={close}>
                    Full Sleeve
                  </h5>
                </Link>
                <Link href="/product-list/MEN_SHIRTS_HALF_SLEEVE">
                  <h5 className={styles.subcategory} onClick={close}>
                    Half Sleeve
                  </h5>
                </Link>
              </div>

              {/* <Link href="/product-list/MEN_SWEATERS"> */}
              <h5 className={styles.category}>Sweaters</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_SWEATERS_FULL_SLEEVE">
                  <h5 className={styles.subcategory} onClick={close}>
                    Full Sleeve
                  </h5>
                </Link>
                <Link href="/product-list/MEN_SWEATERS_SLEEVE_LESS">
                  <h5 className={styles.subcategory} onClick={close}>
                    Sleeve Less
                  </h5>
                </Link>
              </div>

              {/* <Link href="/product-list/MEN_SWEATSHIRTS_&_HOODIES"> */}
              <h5 className={styles.category}>Sweatshirts & Hoodies</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_SWEATSHIRTS">
                  <h5 className={styles.subcategory} onClick={close}>
                    Sweatshirts
                  </h5>
                </Link>
                <Link href="/product-list/MEN_HOODIES">
                  <h5 className={styles.subcategory} onClick={close}>
                    Hoodies
                  </h5>
                </Link>
              </div>
              {/* <Link href="/product-list/MEN_INNWEAR_TOPS"> */}
              <h5 className={styles.category}>Innerwear Tops</h5>
              {/* </Link> */}
              <div>
                <Link href="/product-list/MEN_TSHIRTS">
                  <h5 className={styles.subcategory} onClick={close}>
                    T-Shirts
                  </h5>
                </Link>
                <Link href="/product-list/MEN_ATHLEISURE">
                  <h5 className={styles.subcategory} onClick={close}>
                    Athleisures
                  </h5>
                </Link>
                <Link href="/product-list/MEN_VESTS">
                  <h5 className={styles.subcategory} onClick={close}>
                    Vests
                  </h5>
                </Link>
              </div>
            </Grid>
            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Clothing Bottoms</h4>
              {/* <Link href="/product-list/MEN_BOTTOMS"> */}
              <h5 className={styles.category}>Bottoms</h5>
              {/* </Link> */}
              <Link href="/product-list/MEN_CHINOS">
                <h5 className={styles.subcategory} onClick={close}>
                  Chinos
                </h5>
              </Link>
              <Link href="/product-list/MEN_SHORTS">
                <h5 className={styles.subcategory} onClick={close}>
                  Shorts
                </h5>
              </Link>
              <Link href="/product-list/MEN_DENIMS">
                <h5 className={styles.subcategory} onClick={close}>
                  Denims
                </h5>
              </Link>
              <Link href="/product-list/MEN_CORDUROYS">
                <h5 className={styles.subcategory} onClick={close}>
                  Corduroys
                </h5>
              </Link>
              <Link href="/product-list/MEN_TRACK_PANTS">
                <h5 className={styles.subcategory} onClick={close}>
                  Track Pants
                </h5>
              </Link>
              <Link href="/product-list/MEN_CARGO">
                <h5 className={styles.subcategory} onClick={close}>
                  Cargos
                </h5>
              </Link>
              {/* <Link href="/product-list/MEN_INNWEAR_BOTTOMS"> */}
              <h5 className={styles.category}>Innerwear Bottoms</h5>
              {/* </Link> */}
              <Link href="/product-list/MEN_SHORTS_&_BOXERS">
                <h5 className={styles.subcategory} onClick={close}>
                  Shorts & Boxers
                </h5>
              </Link>
              <Link href="/product-list/MEN_BRIEF_&_TRUNKS">
                <h5 className={styles.subcategory} onClick={close}>
                  Briefs & Trunks
                </h5>
              </Link>
              <Link href="/product-list/MEN_ATHLEISURES">
                <h5 className={styles.subcategory} onClick={close}>
                  Athleisures
                </h5>
              </Link>
              <h4 className={styles.greenCategory}>Bags</h4>
              <Link href="/product-list/MEN_CROSS_BODY_BAG">
                <h5 className={styles.category} onClick={close}>
                  Cross Body Bags
                </h5>
              </Link>
              <Link href="/product-list/MEN_HIKING_BACKPACKS">
                <h5 className={styles.category} onClick={close}>
                  Hiking Backpacks
                </h5>
              </Link>
              <Link href="/product-list/MEN_CANVAS_BAGS">
                <h5 className={styles.category} onClick={close}>
                  Canvas Bags
                </h5>
              </Link>
              <Link href="/product-list/MEN_BACKPACKS">
                <h5 className={styles.category} onClick={close}>
                  Backpacks
                </h5>
              </Link>
              <Link href="/product-list/MEN_TROLLEY_BAGS">
                <h5 className={styles.category} onClick={close}>
                  Trolley Bags
                </h5>
              </Link>
              <Link href="/product-list/MEN_WATERPROOF_BAGS">
                <h5 className={styles.category} onClick={close}>
                  Waterproof Bags
                </h5>
              </Link>
            </Grid>

            <Grid item xs={2} md={3}>
              <h4 className={styles.greenCategory}>Accessories</h4>
              <Link href="/product-list/MEN_BELTS">
                <h5 className={styles.category} onClick={close}>
                  Belts
                </h5>
              </Link>
              <Link href="/product-list/MEN_SOCKS">
                <h5 className={styles.category} onClick={close}>
                  Socks
                </h5>
              </Link>
              <Link href="/product-list/MEN_WALLETS_CARDS_HOLDERS">
                <h5 className={styles.category} onClick={close}>
                  Wallets/Card holders
                </h5>
              </Link>
              <Link href="/product-list/MEN_LACE">
                <h5 className={styles.category} onClick={close}>
                  Lace
                </h5>
              </Link>
              <Link href="/product-list/MEN_KEY_RINGS">
                <h5 className={styles.category} onClick={close}>
                  Key Rings
                </h5>
              </Link>
              <Link href="/product-list/MEN_TRAVEL_KIT">
                <h5 className={styles.category} onClick={close}>
                  Travel Kit
                </h5>
              </Link>
              <Link href="/product-list/MEN_FLASK_&_BOTTLES">
                <h5 className={styles.category} onClick={close}>
                  Flasks & Bottles
                </h5>
              </Link>
              <Link href="/product-list/MEN_MASK">
                <h5 className={styles.category} onClick={close}>
                  Mask
                </h5>
              </Link>
              <Link href="/product-list/MEN_SHOECARE">
                <h5 className={styles.category} onClick={close}>
                  Shoe Care
                </h5>
              </Link>
              <Grid item xs={12} md={12}>
                <h4
                  style={{ marginTop: "5px" }}
                  className={styles.greenCategory}
                >
                  Wearables
                </h4>
                <Link href="/product-list/MEN_SUMMER_CAPS">
                  <h5 className={styles.category} onClick={close}>
                    Summer Caps
                  </h5>
                </Link>
                <Link href="/product-list/MEN_WOOLLEN_CAPS">
                  <h5 className={styles.category} onClick={close}>
                    Woollen Caps
                  </h5>
                </Link>
                <Link href="/product-list/MEN_HEAD_BANDS">
                  <h5 className={styles.category} onClick={close}>
                    Head Bands
                  </h5>
                </Link>
                <Link href="/product-list/MEN_GLOVES">
                  <h5 className={styles.category} onClick={close}>
                    Gloves
                  </h5>
                </Link>
                <Link href="/product-list/MEN_EYEWEAR">
                  <h5 className={styles.category} onClick={close}>
                    Eyewear
                  </h5>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MenCategory;
