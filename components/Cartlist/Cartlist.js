import React, { useEffect, useState } from "react";
import { Box, Drawer, Container, Typography, Button } from "@mui/material";
import styles from "./cartlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../features/CartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import AuthLogin from "../AuthLogin";

function Cartlist({ cartDrawer, setCartDrawer }) {
  const [loginDrawer, setLoginDrawer] = useState(false);
  const { cart, totalQuantity, totalPrice, user } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  let handleChange = (e) => {
    dispatch(updateQuantity(e.target.value));
  };
  const verifyuser = () => {
    if (user.length == 0) {
      toast.error("Please login to checkout");
      setLoginDrawer(true);
    } else {
      router.push("/shipping-address");
    }
  };



  return (
    <Box>
      <Drawer
        open={cartDrawer}
        anchor="right"
        onClose={() => {
          setCartDrawer(false);
        }}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: "540px",
              md: "540px",
            },

            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <div className={styles.cartwarpper}>
          <Box height={"100vh"}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                height: "16%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                marginRight={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  onClick={() => {
                    setCartDrawer(false);
                  }}
                  src="/images/black-close.png"
                />
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "rgba(0, 19, 37, 0.92)",
                }}
              >
                Your Cart
                <span
                  style={{
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: "300",
                    display: "block",
                  }}
                >
                  Never leave a cart empty!
                </span>
              </Typography>
            </Box>
            {cart.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "64%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    color: "#303030",
                  }}
                >
                  Your Shopping Cart is Empty
                </Typography>
              </Box>
            ) : (
              <Box className={styles.temp} bgcolor={"#FFFFFF"} height={"64%"}>
                <Box className={styles.cartlistwrapper}>
                  {cart.map((val) => {
                    return (
                      <Box
                        direction="row"
                        spacing={1}
                        className={styles.cartlist}
                        paddingY={1}
                        key={val.id}
                        sx={{
                          borderBottom: "1px solid #DCDCDC",
                          "&:last-child": {
                            borderBottom: "none",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: {
                              xs: "block",
                              sm: "flex",
                            },
                          }}
                        >
                          <Box marginRight={2}>
                            <Box
                              sx={{
                                display: {
                                  xs: "flex",
                                },
                                justifyContent: {
                                  xs: "center",
                                },
                              }}
                              className={styles.cartcenter}
                            >
                              <div
                                style={{
                                  width: "135px",
                                  height: "135px",
                                  backgroundColor: "#F3F3F3",
                                }}
                              >
                                <img
                                  width="100%"
                                  height="100%"
                                  style={{
                                    backgroundSize: "cover",
                                    mixBlendMode: "multiply",
                                    filter: "contrast(1)",
                                  }}
                                  src={val.imageurl}
                                ></img>
                              </div>
                            </Box>
                          </Box>
                          <Box flexGrow={1}>
                            <Box display={"flex"}>
                              <Typography
                                sx={{
                                  fontFamily: "Raleway",
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  flexGrow: "1",
                                }}
                              >
                                {val.name}
                              </Typography>
                              {val.maxprice === val.price ? (
                                <Box>
                                  <Typography
                                    variant="div"
                                    sx={{
                                      width: "150px",
                                      textAlign: "right",
                                    }}
                                  >
                                    <Typography
                                      variant="span"
                                      sx={{
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        fontFamily: "Inter",
                                      }}
                                    >
                                      ₹{val.price}
                                    </Typography>
                                  </Typography>
                                </Box>
                              ) : (
                                <Box>
                                  <Typography
                                    variant="div"
                                    sx={{
                                      width: "150px",
                                      textAlign: "right",
                                    }}
                                  >
                                    <Typography
                                      variant="span"
                                      sx={{
                                        textDecoration: "line-through",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        color: "rgb(133 121 112)",
                                        fontFamily: "Inter",
                                      }}
                                    >
                                      ₹{val.maxprice}
                                    </Typography>{" "}
                                    &nbsp;
                                    <Typography
                                      variant="span"
                                      sx={{
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        fontFamily: "Inter",
                                      }}
                                    >
                                      ₹{val.price}
                                    </Typography>
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                            <Box display={"flex"}>
                              <Typography flexGrow={1} variant="div">
                                <Typography
                                  variant="span"
                                  sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                  }}
                                >
                                  Color :
                                </Typography>{" "}
                                <Typography
                                  variant="span"
                                  sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                  }}
                                >
                                  {val.color}
                                </Typography>
                              </Typography>
                              {/* <Typography
                            sx={{
                              fontFamily: "Inter",
                              fontWeight: "500",
                              fontSize: "14px",
                              color: "#00890E",
                            }}
                          >
                          </Typography> */}
                            </Box>
                            <Box mb={2} display={"flex"}>
                              <Typography
                                flexGrow={1}
                                fontWeight={700}
                                fontSize={"16px"}
                              >
                                <Typography
                                  variant="span"
                                  sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                  }}
                                >
                                  Size :
                                </Typography>{" "}
                                <Typography
                                  variant="span"
                                  sx={{
                                    fontFamily: "Raleway",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                  }}
                                >
                                  {val.size}
                                </Typography>
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* <div
                                style={{
                                  fontFamily: "Raleway",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                }}
                              >
                                Qty
                              </div> */}
                                <div className={styles.qty}>
                                  <div
                                    style={{
                                      fontFamily: "Raleway",
                                      fontWeight: "500",
                                      fontSize: "14px",
                                      marginRight: "5px",
                                      paddingLeft: "5px",
                                    }}
                                  >
                                    Qty
                                  </div>
                                  <button
                                    className={styles.cartbtn}
                                    disabled={val.quantity < 2 ? true : false}
                                    onClick={() =>
                                      dispatch(decreaseItemQuantity(val.id))
                                    }
                                  >
                                    -
                                  </button>

                                  <div>
                                    <input
                                      id="form1"
                                      min="0"
                                      max="5"
                                      name="quantity"
                                      value={val.quantity}
                                      type="number"
                                      className={styles.cartinput}
                                    />
                                    {/* <label className="form-label" htmlFor="form1">Quantity</label> */}
                                  </div>

                                  <button
                                    disabled={val.quantity >= 5 ? true : false}
                                    onClick={() =>
                                      dispatch(increaseItemQuantity(val.id))
                                    }
                                    className={styles.cartbtn}
                                  >
                                    +
                                  </button>
                                </div>
                              </Box>

                              <Typography
                                onClick={() => dispatch(removeItem(val.id))}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontWeight: "400",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  fontFamily: "Inter",
                                  color: "#4B4B4B",
                                }}
                              >
                                Remove
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
            {cart.length === 0 ? (
              ""
            ) : (
              <Box bgcolor={"#FFFFFF"}>
                <Box py={1} display={"flex"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#303030",
                    }}
                  >
                    <span>SubTotal</span>&emsp; {totalQuantity} Items
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#232323",
                    }}
                  >
                    ₹{totalPrice}
                  </Typography>
                </Box>
                <Button
                  onClick={verifyuser}
                  sx={{
                    backgroundColor: "#3B6F44",
                    color: "#FFFFFF",
                    width: "100%",
                    padding: "10px 0 ",
                    borderRadius: "0",
                    ":hover": {
                      backgroundColor: "#3B6F44",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Checkout
                </Button>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#303030",
                    textAlign: "center",
                    paddingY: "10px",
                  }}
                >
                  {totalPrice < 1000
                    ? `Add products worth ₹${
                        1000 - totalPrice
                      } for free shipping!`
                    : " Free shipping on this order!"}
                </Typography>
              </Box>
            )}
          </Box>
        </div>
      </Drawer>
      <AuthLogin loginDrawer={loginDrawer} setLoginDrawer={setLoginDrawer} />
    </Box>
  );
}

export default Cartlist;
