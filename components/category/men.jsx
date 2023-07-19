import style from "./category.module.css";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
const MenCategory = () => {
  const router = useRouter();
  const navbar = [
    {
      category: "Footwear",
      subcategory: [
        {
          name: "Boots",
          target: "/product-list/MEN_BOOTS",
        },
        {
          name: "Sneaker/Sports",
          target: "/product-list/MEN_SNEAKERS",
        },
        {
          name: "Casuals",
          target: "/product-list/",
          subsubcategory: [
            {
              name: "Lace up",
              target: "/product-list/MEN_CASUALS_LACE_UP",
            },
            {
              name: "Slip on",
              target: "/product-list/MEN_CASUALS_SLIP_ON",
            },
            {
              name: "Canvas",
              target: "/product-list/MEN_CANVAS",
            },
          ],
        },
        {
          name: "Formal",
          target: "/product-list/",
          subsubcategory: [
            {
              name: "Slip on",
              target: "/product-list/MEN_FORMAL_SLIP_ON",
            },
            {
              name: "Lace up",
              target: "/product-list/MEN_FORMAL_LACE_UP",
            },
          ],
        },

        {
          name: "Slippers / Flip - Flops",
          target: "/product-list/MEN_SLIPPERS",
        },
        {
          name: "Sandals",
          target: "/product-list/MEN_SANDALS",
        },
        {
          name: "Safety Shoes",
          target: "/product-list/MEN_SAFETY_SHOES",
        },
      ],
    },
    {
      category: "Clothing Tops",
      subcategory: [
        {
          name: "Jacket",
          target: "/product-list/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/product-list/MEN_JACKETS_FULL_SLEEVE",
            },
            {
              name: "Sleeve Less",
              target: "/product-list/MEN_JACKETS_SLEEVE_LESS",
            },
            {
              name: "Leather",
              target: "/product-list/MEN_LEATHER",
            },
            {
              name: "Windcheater",
              target: "/product-list/MEN_WINDCHEATER",
            },
          ],
        },
        {
          name: "T-shirts",
          target: "/",
          subsubcategory: [
            {
              name: "Polo",
              target: "/product-list/MEN_POLO",
            },
            {
              name: "Round Tees",
              target: "/product-list/MEN_ROUND_TEES",
            },
            {
              name: "V-Neck",
              target: "/product-list/MEN_V_NECK",
            },
          ],
        },
        {
          name: "Shirts",
          target: "/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
            },
            {
              name: "Half Sleeve",
              target: "/product-list/MEN_SHIRTS_HALF_SLEEVE",
            },
          ],
        },
        {
          name: "Sweaters",
          target: "/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/product-list/MEN_SWEATERS_FULL_SLEEVE",
            },
            {
              name: "Sleeve Less",
              target: "/product-list/MEN_SWEATERS_SLEEVE_LESS",
            },
          ],
        },
        {
          name: "Sweatshirts & Hoodies",
          target: "/",
          subsubcategory: [
            {
              name: "Sweatshirts",
              target: "/product-list/MEN_SWEATSHIRTS",
            },
            {
              name: "Hoodies",
              target: "/product-list/MEN_HOODIES",
            },
          ],
        },
        {
          name: "Innerwaer & Hoodies",
          target: "/",
          subsubcategory: [
            {
              name: "T-shirts",
              target: "/product-list/MEN_TSHIRTS",
            },
            {
              name: "Athleisures",
              target: "/product-list/MEN_ATHLEISURE",
            },
            {
              name: "Vests",
              target: "/product-list/MEN_VESTS",
            },
          ],
        },
      ],
    },
    {
      category: "Clothing Bottoms",
      subcategory: [
        {
          name: "Bottoms",
          target: "/",
          subsubcategory: [
            {
              name: "Chinos",
              target: "/product-list/MEN_CHINOS",
            },
            {
              name: "Shorts",
              target: "/product-list/MEN_SHORTS",
            },
            {
              name: "Denims",
              target: "/product-list/MEN_DENIMS",
            },
            {
              name: "Corduroys",
              target: "/product-list/MEN_CORDUROYS",
            },
            {
              name: "Track Pants",
              target: "/product-list/MEN_TRACK_PANTS",
            },
            {
              name: "Cargos",
              target: "/product-list/MEN_CARGO",
            },
          ],
        },
        {
          name: "Innerwear Bottoms",
          target: "",
          subsubcategory: [
            {
              name: "Shorts & Boxers",
              target: "/product-list/MEN_SHORTS_&_BOXERS",
            },
            {
              name: "Briefs & Trunks",
              target: "/product-list/MEN_BRIEF_&_TRUNKS",
            },
            {
              name: "Athleisures",
              target: "/product-list/MEN_ATHLEISURES",
            },
          ],
        },
      ],
      headtwo: true,
      categorytwo: "Bags",
      subcategorytwo: [
        {
          name: "Cross Body Bags",
          target: "/product-list/",
        },
        {
          name: "Hiking Backpacks",
          target: "/product-list/",
        },
        {
          name: "Canvas Bags",
          target: "/product-list/",
        },
        {
          name: "Backpacks",
          target: "/product-list/",
        },
        {
          name: "Trolley Bags",
          target: "/product-list/",
        },
        {
          name: "Waterproof Bags",
          target: "/product-list/",
        },
      ],
    },
    {
      category: "Accessories",
      subcategory: [
        {
          name: "Belts",
          target: "/product-list/",
        },
        {
          name: "Socks",
          target: "/product-list/",
        },
        {
          name: "Wallets/Card holders",
          target: "/product-list/",
        },
        {
          name: "Lace",
          target: "/product-list/",
        },
        {
          name: "Key Rings",
          target: "/product-list/",
        },
        {
          name: "Travel Kit",
          target: "/product-list/",
        },
        {
          name: "Flasks & Bottles",
          target: "/product-list/",
        },
        {
          name: "Mask",
          target: "/product-list/",
        },
        {
          name: "Shoe Care",
          target: "/product-list/",
        },
      ],
      headtwo: true,
      categorytwo: "Wearables",
      subcategorytwo: [
        {
          name: "Summer Caps",
          target: "/product-list/",
        },
        {
          name: "Woolen Caps",
          target: "/product-list/",
        },
        {
          name: "Head Bands",
          target: "/product-list/",
        },
        {
          name: "Gloves",
          target: "/product-list/",
        },
        {
          name: "Eyewear",
          target: "/product-list/",
        },
      ],
    },
  ];
  const brand = [
    {
      brand: "New Arrivals",
      target: "/",
    },
    {
      brand: "Woodsports",
      target: "/",
    },
    {
      brand: "StreetWear",
      target: "/",
    },
  ];

  const pageNav = (pagename) => {
    router.push(pagename);
  };
  return (
    <div className={style.categorywapper}>
      <Box
        sx={{
          paddingX: {
            md: 6,
            sm: 4,
            xs: 2,
          },
        }}
      >
        <Grid container py={3}>
          <Grid item xs={1.7}>
            {brand.map((val, idx) => {
              return (
                <Link
                  href={val.target}
                  className={style.subcategoryitem}
                  key={idx}
                >
                  {val.brand}
                </Link>
              );
            })}
          </Grid>
          <Grid item xs={10.3}>
            <Grid container spacing={2}>
              {navbar.map((val, idx) => {
                return (
                  <Grid key={idx} item xs={3}>
                    <div className={style.categoryitem}>{val.category}</div>
                    {val.subcategory.map((item, id) => {
                      return (
                        <div key={id}>
                          <Link
                            href={item.target}
                            className={style.subcategoryitem}
                          >
                            {item.name}
                          </Link>
                          {item.subsubcategory?.map((v, i) => {
                            return (
                              <Link
                                href={v.target}
                                className={style.subsubcategoryitem}
                                key={i}
                              >
                                {v.name}
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                    {val.headtwo && (
                      <div>
                        <div className={style.categoryitem}>
                          {val.categorytwo}
                        </div>
                        {val.subcategorytwo.map((subitem, id) => {
                          return (
                            <Link
                              href={subitem.target}
                              className={style.subcategoryitem}
                              key={id}
                            >
                              {subitem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MenCategory;
