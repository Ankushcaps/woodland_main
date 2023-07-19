import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import style from "./MobileNavbar.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function MobileNavbar({ navbar, setNavbar }) {
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(false);
  const [thirdDrawerOpen, setThirdDrawerOpen] = useState(false);
  const [fourDrawerOpen, setFourDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const drawerWidth = "100%";
  const router = useRouter();

  const navBar = [
    {
      name: "sale",
      child: false,
      target: "/sale-page",
      category: [],
    },
    {
      name: "men",
      child: true,
      category: [
        {
          name: "Footwear",
          child: true,
          subCategory: [
            {
              name: "Boots",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
            {
              name: "Sneaker/Sports",
              child: false,
              target: "/product-list/MEN_SNEAKERS",
              subsubCategory: [],
            },
            {
              name: "Casuals",
              child: true,
              target: "/",
              subsubCategory: [
                {
                  name: "Lace up",
                  child: false,
                  target: "/product-list/MEN_CASUALS_LACE_UP",
                },
                {
                  name: "Slip on",
                  child: false,
                  target: "/product-list/MEN_CASUALS_SLIP_ON",
                },
                {
                  name: "Canvas",
                  child: false,
                  target: "/product-list/MEN_CANVAS",
                },
              ],
            },
            {
              name: "Formal",
              child: true,
              subsubCategory: [
                {
                  name: "Lace up",
                  child: false,
                  target: "/product-list/MEN_FORMAL_LACE_UP",
                },
                {
                  name: "Slip on",
                  child: false,
                  target: "/product-list/MEN_FORMAL_SLIP_ON",
                },
              ],
            },
            {
              name: "Slippers/Flip-Flops",
              child: false,
              target: "/product-list/MEN_SLIPPERS",
              subsubCategory: [],
            },
            {
              name: "Sandals",
              child: false,
              target: "/product-list/MEN_SANDALS",
              subsubCategory: [],
            },
            {
              name: "Safety Shoes",
              child: false,
              target: "/product-list/MEN_SAFETY_SHOES",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Clothing Tops",
          child: true,
          subCategory: [
            {
              name: "Jackets",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/MEN_JACKETS_FULL_SLEEVE",
                },
                {
                  name: "Sleeve Less",
                  child: false,
                  target: "/product-list/MEN_JACKETS_SLEEVE_LESS",
                },
                {
                  name: "Leather",
                  child: false,
                  target: "/product-list/MEN_LEATHER",
                },
                {
                  name: "Windcheater",
                  child: false,
                  target: "/product-list/MEN_WINDCHEATER",
                },
              ],
            },
            {
              name: "T-shirts",
              child: true,
              subsubCategory: [
                {
                  name: "Polo",
                  child: false,
                  target: "/product-list/MEN_POLO",
                },
                {
                  name: "Round Tees",
                  child: false,
                  target: "/product-list/MEN_ROUND_TEES",
                },
                {
                  name: "V-Neck",
                  child: false,
                  target: "/product-list/MEN_V_NECK",
                },
              ],
            },
            {
              name: "Shirts",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/MEN_SHIRTS_FULL_SLEEVE",
                },
                {
                  name: "Half Sleeve",
                  child: false,
                  target: "/product-list/MEN_SHIRTS_HALF_SLEEVE",
                },
              ],
            },
            {
              name: "Sweaters",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/MEN_SWEATERS_FULL_SLEEVE",
                },
                {
                  name: "Sleeve Less",
                  child: false,
                  target: "/product-list/MEN_SWEATERS_SLEEVE_LESS",
                },
              ],
            },
            {
              name: "Sweatshirts & Hoodies",
              child: true,
              subsubCategory: [
                {
                  name: "Sweatshirts",
                  child: false,
                  target: "/product-list/MEN_SWEATSHIRTS",
                },
                {
                  name: "Hoodies",
                  child: false,
                  target: "/product-list/MEN_HOODIES",
                },
              ],
            },
            {
              name: "Innerwear Tops",
              child: true,
              subsubCategory: [
                {
                  name: "T-Shirts",
                  child: false,
                  target: "/product-list/MEN_TSHIRTS",
                },
                {
                  name: "Athleisures",
                  child: false,
                  target: "/product-list/MEN_ATHLEISURE",
                },
                {
                  name: "Vests",
                  child: false,
                  target: "/product-list/MEN_VESTS",
                },
              ],
            },
          ],
        },
        {
          name: "Clothing Bottoms",
          child: true,
          subCategory: [
            {
              name: "Bottoms",
              child: true,
              subsubCategory: [
                {
                  name: "Chinos",
                  child: false,
                  target: "/product-list/MEN_CHINOS",
                },
                {
                  name: "Shorts",
                  child: false,
                  target: "/product-list/MEN_SHORTS",
                },
                {
                  name: "Denims",
                  child: false,
                  target: "/product-list/MEN_DENIMS",
                },
                {
                  name: "Corduroys",
                  child: false,
                  target: "/product-list/MEN_CORDUROYS",
                },
                {
                  name: "Track Pants",
                  child: false,
                  target: "/product-list/MEN_TRACKPANTS",
                },
                {
                  name: "Cargos",
                  child: false,
                  target: "/product-list/MEN_CARGO",
                },
              ],
            },
            {
              name: "Innerwear Bottoms",
              child: true,
              subsubCategory: [
                {
                  name: "Shorts & Boxers",
                  child: false,
                  target: "/product-list/MEN_SHORTS_&_BOXERS",
                },
                {
                  name: "Briefs & Trunks",
                  child: false,
                  target: "/product-list/MEN_BRIEF_&_TRUNKS",
                },
                {
                  name: "Athleisures",
                  child: false,
                  target: "/product-list/MEN_ATHLEISURES",
                },
              ],
            },
          ],
        },
        {
          name: "Accessories",
          child: true,
          subCategory: [
            {
              name: "Belts",
              child: false,
              target: "/product-list/MEN_BELTS",
              subsubCategory: [],
            },
            {
              name: "Socks",
              child: false,
              target: "/product-list/MEN_SOCKS",
              subsubCategory: [],
            },
            {
              name: "Wallets/Card holders",
              child: false,
              target: "/product-list/MEN_WALLETS_CARD_HOLDERS",
              subsubCategory: [],
            },
            {
              name: "Lace",
              child: false,
              target: "/product-list/MEN_LACE",
              subsubCategory: [],
            },
            {
              name: "Key Rings",
              child: false,
              target: "/product-list/MEN_KEY_RINGS",
              subsubCategory: [],
            },
            {
              name: "Travel Kit",
              child: false,
              target: "/product-list/MEN_TRAVEL_KIT",
              subsubCategory: [],
            },
            {
              name: "Flasks & Bottles",
              child: false,
              target: "/product-list/MEN_FLASK_&_BOTTLES",
              subsubCategory: [],
            },
            {
              name: "Mask",
              child: false,
              target: "/product-list/MEN_MASK",
              subsubCategory: [],
            },
            {
              name: "Shoe Care",
              child: false,
              target: "/product-list/MEN_SHOECARE",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Wearables",
          child: true,
          subCategory: [
            {
              name: "Summer Caps",
              child: false,
              target: "/product-list/MEN_SUMMER_CAPS",
              subsubCategory: [],
            },
            {
              name: "Woollen Caps",
              child: false,
              target: "/product-list/MEN_WOOLLEN_CAPS",
              subsubCategory: [],
            },
            {
              name: "Head Bands",
              child: false,
              target: "/product-list/MEN_HEAD_BANDS",
              subsubCategory: [],
            },
            {
              name: "Gloves",
              child: false,
              target: "/product-list/MEN_GLOVES",
              subsubCategory: [],
            },
            {
              name: "Eyewear",
              child: false,
              target: "/product-list/MEN_EYEWEAR",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Bags",
          child: true,
          subCategory: [
            {
              name: "Cross Body Bags",
              child: false,
              target: "/product-list/MEN_CROSS_BODY_BAG",
              subsubCategory: [],
            },
            {
              name: "Hiking Backpacks",
              child: false,
              target: "/product-list/MEN_HIKING_BACKPACKS",
              subsubCategory: [],
            },
            {
              name: "Canvas Bags",
              child: false,
              target: "/product-list/MEN_CANVAS_BAGS",
              subsubCategory: [],
            },
            {
              name: "Backpacks",
              child: false,
              target: "/product-list/MEN_BACKPACKS",
              subsubCategory: [],
            },
            {
              name: "Trolley Bags",
              child: false,
              target: "/product-list/MEN_TROLLEY_BAGS",
              subsubCategory: [],
            },
            {
              name: "Waterproof Bags",
              child: false,
              target: "/product-list/MEN_WATERPROOF_BAGS",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "New Arrivals",
          child: false,
          target: "/new-arrivals/new",
          subCategory: [],
        },
        {
          name: "Woodsports",
          child: false,
          target: "/brands/WOODSPORTS",
          subCategory: [],
        },
        {
          name: "Woods",
          child: false,
          target: "/brands/WOODS",
          subCategory: [],
        },
        {
          name: "StreetWear",
          child: false,
          target: "/brands/ASKATINGMONK",
          subCategory: [],
        },
      ],
    },
    {
      name: "women",
      child: true,
      target: "/",
      category: [
        {
          name: "Footwear",
          child: true,
          subCategory: [
            {
              name: "Boots",
              target: "/product-list/WOMEN_BOOTS",
              child: false,
              subsubCategory: [],
            },
            {
              name: "Sneaker/Sports",
              child: false,
              target: "/product-list/WOMEN_SNEAKERS",
              subsubCategory: [],
            },
            {
              name: "Formal",
              child: true,
              subsubCategory: [
                {
                  name: "Heels",
                  child: false,
                  target: "/product-list/WOMEN_HEELS",
                },
                {
                  name: "Ballerinas",
                  child: false,
                  target: "/product-list/WOMEN_BALLERINAS",
                },
                {
                  name: "Loafers",
                  child: false,
                  target: "/product-list/WOMEN_LOAFERS",
                },
              ],
            },
            {
              name: "Slippers/Flip-Flops",
              child: false,
              target: "/product-list/WOMEN_SLIPPERS",
              subsubCategory: [],
            },
            {
              name: "Sandals",
              child: false,
              target: "/product-list/WOMEN_SANDALS",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Clothing Tops",
          child: true,
          subCategory: [
            {
              name: "Jackets",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/WOMEN_JACKETS_FULL_SLEEVE",
                },
                {
                  name: "Sleeve Less",
                  child: false,
                  target: "/product-list/WOMEN_JACKETS_SLEEVE_LESS",
                },
                {
                  name: "Leather",
                  child: false,
                  target: "/product-list/WOMEN_LEATHER",
                },
                {
                  name: "Windcheater",
                  child: false,
                  target: "/product-list/WOMEN_WINDCHEATER",
                },
              ],
            },
            {
              name: "T-shirts",
              child: true,
              subsubCategory: [
                {
                  name: "Polo",
                  child: false,
                  target: "/product-list/WOMEN_POLO",
                },
                {
                  name: "Round Tees",
                  child: false,
                  target: "/product-list/WOMEN_ROUND_TEES",
                },
                {
                  name: "V-Neck",
                  child: false,
                  target: "/product-list/WOMEN_V_NECK",
                },
              ],
            },
            {
              name: "Shirts",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/WOMEN_SHIRTS_FULL_SLEEVE",
                },
                {
                  name: "Half Sleeve",
                  child: false,
                  target: "/product-list/WOMEN_SHIRTS_HALF_SLEEVE",
                },
              ],
            },
            {
              name: "Sweaters",
              child: true,
              subsubCategory: [
                {
                  name: "Full Sleeve",
                  child: false,
                  target: "/product-list/WOMEN_SWEATERS_FULL_SLEEVE",
                },
                {
                  name: "Sleeve Less",
                  child: false,
                  target: "/product-list/WOMEN_SWEATERS_SLEEVE_LESS",
                },
              ],
            },
            {
              name: "Sweatshirts & Hoodies",
              child: true,
              subsubCategory: [
                {
                  name: "Sweatshirts",
                  child: false,
                  target: "/product-list/WOMEN_SWEATSHIRTS",
                },
                {
                  name: "Hoodies",
                  child: false,
                  target: "/product-list/WOMEN_HOODIES",
                },
              ],
            },
            {
              name: "Dresses",
              child: false,
              target: "/product-list/WOMEN_DRESSES",
              subsubCategory: [],
            },
            {
              name: "Tracksuits",
              child: false,
              target: "/product-list/WOMEN_TRACKSUITS",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Clothing Bottoms",
          child: true,
          subCategory: [
            {
              name: "Bottoms",
              child: true,
              subsubCategory: [
                {
                  name: "Chinos",
                  child: false,
                  target: "/product-list/WOMEN_CHINOS",
                },
                {
                  name: "Shorts",
                  child: false,
                  target: "/product-list/WOMEN_SHORTS",
                },
                {
                  name: "Denims",
                  child: false,
                  target: "/product-list/WOMEN_DENIMS",
                },
                {
                  name: "Corduroys",
                  child: false,
                  target: "/product-list/WOMEN_CORDUROYS",
                },
                {
                  name: "Track Pants",
                  child: false,
                  target: "/product-list/WOMEN_TRACKPANTS",
                },
                {
                  name: "Cargos",
                  child: false,
                  target: "/product-list/WOMEN_CARGO",
                },
              ],
            },
          ],
        },
        {
          name: "Accessories",
          child: true,
          subCategory: [
            {
              name: "Belts",
              child: false,
              target: "/product-list/WOMEN_BELTS",
              subsubCategory: [],
            },
            {
              name: "Socks",
              child: false,
              target: "/product-list/WOMEN_SOCKS",
              subsubCategory: [],
            },
            {
              name: "Wallets/Card holders",
              child: false,
              target: "/product-list/WOMEN_WALLETS_CARD_HOLDERS",
              subsubCategory: [],
            },
            {
              name: "Lace",
              child: false,
              target: "/product-list/WOMEN_LACE",
              subsubCategory: [],
            },
            {
              name: "Key Rings",
              child: false,
              target: "/product-list/WOMEN_KEY_RINGS",
              subsubCategory: [],
            },
            {
              name: "Travel Kit",
              child: false,
              target: "/product-list/WOMEN_TRAVEL_KIT",
              subsubCategory: [],
            },
            {
              name: "Flasks",
              child: false,
              target: "/product-list/WOMEN_FLASKS",
              subsubCategory: [],
            },
            {
              name: "Mask",
              child: false,
              target: "/product-list/WOMEN_MASK",
              subsubCategory: [],
            },
            {
              name: "Shoe Care",
              child: false,
              target: "/product-list/WOMEN_SHOE_CARE",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Wearables",
          child: true,
          subCategory: [
            {
              name: "Summer Caps",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
            {
              name: "Woollen Caps",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
            {
              name: "Head Bands",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
            {
              name: "Gloves",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
            {
              name: "Eyewear",
              child: false,
              target: "/product-list/MEN_BOOTS",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "Bags",
          child: true,
          subCategory: [
            {
              name: "Hand Bags/Slings",
              child: false,
              target: "/product-list/WOMEN_HAND_BAGS",
              subsubCategory: [],
            },
            {
              name: "Hiking Backpacks",
              child: false,
              target: "/product-list/WOMEN_HIKING_BACKPACKS",
              subsubCategory: [],
            },
            {
              name: "Canvas Bags",
              child: false,
              target: "/product-list/WOMEN_CANVAS_BAGS",
              subsubCategory: [],
            },
            {
              name: "Backpacks",
              child: false,
              target: "/product-list/WOMEN_BACKPACKS",
              subsubCategory: [],
            },
            {
              name: "Trolley Bags",
              child: false,
              target: "/product-list/WOMEN_TROLLEY_BAGS",
              subsubCategory: [],
            },
            {
              name: "Waterproof Bags",
              child: false,
              target: "/product-list/WOMEN_WATERPROOF_BAGS",
              subsubCategory: [],
            },
          ],
        },
        {
          name: "New Arrivals",
          child: false,
          target: "/new-arrivals/new",
          subCategory: [],
        },
        {
          name: "Woodsports",
          child: false,
          target: "/brands/WOODSPORTS",
          subCategory: [],
        },
        {
          name: "Woods",
          child: false,
          target: "/brands/WOODS",
          subCategory: [],
        },
        {
          name: "StreetWear",
          child: false,
          target: "/brands/ASKATINGMONK",
          subCategory: [],
        },
      ],
    },
    {
      name: "Bags & Gear",
      target: "/bags-gear",
      child: false,
      category: [],
    },
    {
      name: "About Us",
      target: "/about-us",
      child: false,
      category: [],
    },
    {
      name: "labs",
      child: false,
      target: "/labs",
      category: [],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.category);
    setSelectedSubCategory(null);

    if (category.child) {
      setSecondDrawerOpen(true);
    } else {
      handleBackClick();
      router.push(`${category.target}`);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory.subCategory);
    if (subCategory.child) {
      setThirdDrawerOpen(true);
    } else {
      handleBackClick();
      router.push(`${subCategory.target}`);
    }
  };
  const handleSubSubCategoryClick = (subCategory) => {
    setSelectedSubSubCategory(subCategory.subsubCategory);

    if (subCategory.child) {
      setFourDrawerOpen(true);
    } else {
      handleBackClick();
      router.push(`${subCategory.target}`);
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSecondDrawerOpen(false);
    setThirdDrawerOpen(false);
    setFourDrawerOpen(false);
    setNavbar(false);
  };

  return (
    <Box>
      <Drawer
        transitionDuration={{ enter: 800, exit: 800 }}
        open={navbar}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "relative",
          },
        }}
      >
        <div className={style.maindrawerhead}>
          <div
            style={{
              width: "70px",
            }}
          >
            <Link href="/">
              <img
                src="/images/h-logo.png"
                alt="logo"
                className={style.imglogo}
              />
            </Link>
          </div>
          <div onClick={handleBackClick}>&times;</div>
        </div>
        <div>
          {navBar.map((category, idx) => (
            <div
              className={style.navitem}
              key={idx}
              onClick={() => {
                handleCategoryClick(category);
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div style={{ position: "relative" }}>
          <Drawer
            transitionDuration={{ enter: 800, exit: 800 }}
            open={secondDrawerOpen}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                position: "absolute",
              },
            }}
          >
            <div className={style.maindrawerhead}>
              <div
                style={{
                  width: "70px",
                }}
              >
                <Link href="/">
                  <img
                    src="/images/h-logo.png"
                    alt="logo"
                    className={style.imglogo}
                  />
                </Link>
              </div>
              <div onClick={handleBackClick}>&times;</div>
            </div>
            <div
              className={style.backbtn}
              onClick={() => {
                setSecondDrawerOpen(false);
              }}
            >
              Back
            </div>
            {selectedCategory &&
              selectedCategory.map((subCategory, idx) => (
                <div
                  className={style.navitem}
                  key={idx}
                  onClick={() => {
                    handleSubCategoryClick(subCategory);
                  }}
                >
                  {subCategory.name}
                </div>
              ))}
          </Drawer>
        </div>
        <div style={{ position: "relative" }}>
          <Drawer
            transitionDuration={{ enter: 800, exit: 800 }}
            open={thirdDrawerOpen}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                position: "absolute",
              },
            }}
          >
            <div className={style.maindrawerhead}>
              <div
                style={{
                  width: "70px",
                }}
              >
                <Link href="/">
                  <img
                    src="/images/h-logo.png"
                    alt="logo"
                    className={style.imglogo}
                  />
                </Link>
              </div>
              <div onClick={handleBackClick}>&times;</div>
            </div>
            <div
              className={style.backbtn}
              onClick={() => {
                setThirdDrawerOpen(false);
              }}
            >
              Back
            </div>
            {selectedSubCategory &&
              selectedSubCategory.map((subCategory, idx) => (
                <div
                  key={idx}
                  className={style.navitem}
                  onClick={() => {
                    handleSubSubCategoryClick(subCategory);
                  }}
                >
                  {subCategory.name}
                </div>
              ))}
          </Drawer>
        </div>
        <div style={{ position: "relative" }}>
          <Drawer
            transitionDuration={{ enter: 800, exit: 800 }}
            open={fourDrawerOpen}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                position: "absolute",
              },
            }}
          >
            <div className={style.maindrawerhead}>
              <div
                style={{
                  width: "70px",
                }}
              >
                <Link href="/">
                  <img
                    src="/images/h-logo.png"
                    alt="logo"
                    className={style.imglogo}
                  />
                </Link>
              </div>
              <div onClick={handleBackClick}>&times;</div>
            </div>
            <div
              className={style.backbtn}
              onClick={() => {
                setFourDrawerOpen(false);
              }}
            >
              Back
            </div>
            {selectedSubSubCategory &&
              selectedSubSubCategory.map((subCategory, idx) => (
                <div
                  className={style.navitem}
                  key={idx}
                  onClick={() => {
                    handleSubCategoryClick(subCategory);
                  }}
                >
                  {subCategory.name}
                </div>
              ))}
          </Drawer>
        </div>
      </Drawer>
    </Box>
  );
}

export default MobileNavbar;
