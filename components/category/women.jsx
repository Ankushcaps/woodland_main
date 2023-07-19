import style from "./category.module.css";
import { Box, Grid } from "@mui/material";
const WomenCategory = () => {
  const navbar = [
    {
      category: "Footwear",
      subcategory: [
        {
          name: "Sneaker/Sports",
          target: "/",
        },
        {
          name: "Formal",
          tagert: "/",
          subsubcategory: [
            {
              name: "Heels",
              target: "/",
            },
            {
              name: "Ballerinas",
              target: "/",
            },
            {
              name: "Loafers",
              target: "/",
            },
          ],
        },
        {
          name: "Boots",
          target: "/",
        },
        {
          name: "Slippers / Flip - Flops",
          target: "/",
        },
        {
          name: "Sandals",
          target: "/",
        },
      ],
    },
    {
      category: "Clothing Tops",
      subcategory: [
        {
          name: "Jacket",
          tagert: "/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/",
            },
            {
              name: "Sleeve Less",
              target: "/",
            },
            {
              name: "Leather",
              target: "/",
            },
            {
              name: "Windcheater",
              target: "/",
            },
          ],
        },
        {
          name: "T-shirts",
          tagert: "/",
          subsubcategory: [
            {
              name: "Polo",
              target: "/",
            },
            {
              name: "Round Tees",
              target: "/",
            },
            {
              name: "V-Neck",
              target: "/",
            },
          ],
        },
        {
          name: "Top & Shirts",
          tagert: "/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/",
            },
            {
              name: "Half Sleeve",
              target: "/",
            },
          ],
        },
        {
          name: "Sweaters",
          tagert: "/",
          subsubcategory: [
            {
              name: "Full Sleeve",
              target: "/",
            },
            {
              name: "Sleeve Less",
              target: "/",
            },
          ],
        },
        {
          name: "Sweatshirts & Hoodies",
          tagert: "/",
          subsubcategory: [
            {
              name: "Sweatshirts",
              target: "/",
            },
            {
              name: "Hoodies",
              target: "/",
            },
          ],
        },
        {
          name: "Dresses",
          tagert: "/",
        },
        {
          name: "Track Suits",
          tagert: "/",
        },
      ],
    },
    {
      category: "Clothing Bottoms",
      subcategory: [
        {
          name: "Bottoms",
          tagert: "/",
          subsubcategory: [
            {
              name: "Chinos",
              target: "/",
            },
            {
              name: "Shorts",
              target: "/",
            },
            {
              name: "Denims",
              target: "/",
            },
            {
              name: "Corduroys",
              target: "/",
            },
            {
              name: "Track Pants",
              target: "/",
            },
            {
              name: "Cargos",
              target: "/",
            },
          ],
        },
      ],
      headtwo: true,
      categorytwo: "Bags",
      subcategorytwo: [
        {
          name: "Hand Bags/Slings",
          target: "/",
        },
        {
          name: "Canvas Bags",
          target: "/",
        },
        {
          name: "Backpacks",
          tagert: "/",
        },
        {
          name: "Hiking Backpacks",
          target: "/",
        },
        {
          name: "Trolley Bags",
          target: "/",
        },
        {
          name: "Waterproof Bags",
          target: "/",
        },
      ],
    },
    {
      category: "Accessories",
      subcategory: [
        {
          name: "Belts",
          target: "/",
        },
        {
          name: "Socks",
          target: "/",
        },
        {
          name: "Wallets/Card holders",
          tagert: "/",
        },
        {
          name: "Lace",
          target: "/",
        },
        {
          name: "Key Rings",
          target: "/",
        },
        {
          name: "Travel Kit",
          target: "/",
        },
        {
          name: "Face Mask",
          target: "/",
        },
        {
          name: "Shoe Care",
          target: "/",
        },
      ],
      headtwo: true,
      categorytwo: "Wearables",
      subcategorytwo: [
        {
          name: "Summer Caps",
          target: "/",
        },
        {
          name: "Woolen Caps",
          target: "/",
        },
        {
          name: "Head Bands",
          tagert: "/",
        },
        {
          name: "Gloves",
          target: "/",
        },
        {
          name: "Eyewear",
          target: "/",
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
                <div className={style.subcategoryitem} key={idx}>
                  {val.brand}
                </div>
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
                          <div className={style.subcategoryitem}>
                            {item.name}
                          </div>
                          {item.subsubcategory?.map((v, i) => {
                            return (
                              <div className={style.subsubcategoryitem} key={i}>
                                {v.name}
                              </div>
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
                            <div className={style.subcategoryitem} key={id}>
                              {subitem.name}
                            </div>
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

export default WomenCategory;
