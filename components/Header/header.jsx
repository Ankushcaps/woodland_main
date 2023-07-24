import { useRouter } from "next/router";
import style from "./header.module.css";
import Link from "next/link";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MenCategory from "../category/men";
import WomenCategory from "../category/women";
import AuthLogin from "../drawers/Login/login";
const Header = () => {
  const [hoverMenu, setHoverMenu] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();
  const navList = [
    {
      name: "Men",
      hassub: true,
      target: "",
    },
    {
      name: "Women",
      hassub: true,
      target: "",
    },
    {
      name: "Bags & Gear",
      hassub: false,
      target: "/bags-gear",
    },
    {
      name: "About Us",
      hassub: false,
      target: "/about-us",
    },
    {
      name: "Labs",
      hassub: false,
      target: "/invoice",
    },
  ];
  const handlepage = (item) => {
    if (!item.hassub) {
      router.push(item.target);
    }
  };

  const openLoginDrawer = () => {
    setLogin(true);
  };

  return (
    <header className={style.headerwapper}>
      <Box
        sx={{
          paddingX: {
            md: 6,
            sm: 4,
            xs: 2,
          },
          backgroundColor: "#3b6f44",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "5px 0",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            <span className={style.firstnavlist}>Cart</span>
            <span
              className={style.firstnavlist}
              onClick={() => {
                router.push("/order-status");
              }}
            >
              Order Status
            </span>
            <span
              className={style.firstnavlist}
              onClick={() => {
                router.push("/store");
              }}
            >
              Find Store
            </span>
            <span onClick={openLoginDrawer} className={style.firstnavlist}>Sign In</span>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          paddingX: {
            md: 6,
            sm: 4,
            xs: 2,
          },
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Link href="/">
            <div
              style={{
                marginRight: "2rem",
              }}
            >
              <img
                style={{
                  overflow: "hidden",
                }}
                width="80px"
                height="100%"
                src="/desktoplogoo.png"
                alt="home-logo"
              />
            </div>
          </Link>
          <div className={style.desktopnav}>
            <nav>
              <ul className={style.navlist}>
                {navList.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={style.listitem}>
                        <li
                          onClick={() => {
                            handlepage(item);
                          }}
                          onMouseEnter={() => {
                            setHoverMenu(item.name);
                          }}
                          onMouseLeave={() => {
                            setHoverMenu("");
                          }}
                        >
                          {item.name}
                        </li>
                        <span></span>
                      </div>
                      <div>
                        {hoverMenu == item.name && (
                          <div
                            style={{
                              position: "absolute",
                              zIndex: 30,
                              top: "100%",
                              left: 0,
                              right: 0,
                            }}
                            onMouseEnter={() => {
                              setHoverMenu(item.name);
                            }}
                            onMouseLeave={() => {
                              setHoverMenu("");
                            }}
                          >
                            {hoverMenu == "Men" && <MenCategory />}
                            {hoverMenu == "Women" && <WomenCategory />}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className={style.searchinput}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <input type="text" placeholder=" Search Product" />

            <SearchIcon
              sx={{
                color: "#3b6f44",
              }}
            />
          </Box>

          <div className={style.phonenav}>
            <MenuIcon />
          </div>
        </div>
      </Box>
        <AuthLogin login={login} setLogin={setLogin} />
    </header>
  );
};
export default Header;
