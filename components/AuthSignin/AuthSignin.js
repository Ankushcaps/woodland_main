import React, { useState } from "react";
import { Box, Typography, Container, Button, Link } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/CartSlice";
function AuthSignin({ close, verifyotp, phoneno, closeall, resendfunction }) {
  const [checkOtp, setCheckOtp] = useState();
  const [confirmOtp, setConfirmOtp] = useState(verifyotp);
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const handelcheckotp = () => {
    if (confirmOtp == checkOtp) {
      dispatch(
        addUser({
          userId: phoneno,
          isLoggedIn: true,
        })
      );
      closeall();
      toast.success("Logged in successfully");
    } else {
      toast.error("Please enter the correct OTP");
      setError("OTP Not Match");
    }
  };
  const ResendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setConfirmOtp(newOtp);
    resendfunction({ userphone: phoneno, code: newOtp });
    toast.success("OTP send successfully");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box flexGrow={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: 2,
            pt: 3,
            borderBottom: "1px solid #DCDCDC",
          }}
        >
          <Box
            onClick={() => {
              close();
            }}
            mr={4}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src="/images/black-close.png" alt="close" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "20px",
                fontWeight: "600",
                color: "#303030EB",
              }}
            >
              Login/Register
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "300",
                color: "#251000",
              }}
            >
              For a personalized experience
            </Typography>
          </Box>
        </Box>
        <Box>
          <Container>
            <Typography
              onClick={() => {
                close();
              }}
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                my: 4,
                cursor: "pointer",
              }}
            >
              &#8592; Go Back
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: "16px",
                color: "#303030",
              }}
            >
              Verify OTP sent your mobile number
            </Typography>
            <Box mt={2}>
              <form>
                <Box mb={1}>
                  <input
                    style={{
                      backgroundColor: "#F4F4F4",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "#7B7B7B",
                      padding: "10px",
                      width: "100%",
                      height: "50px",
                      border: "0",
                    }}
                    onChange={(e) => {
                      setCheckOtp(e.target.value);
                    }}
                    type="number"
                    name="verifyotp"
                    placeholder="Enter OTP"
                  />
                </Box>
                {error && (
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "12px",
                      color: "#ff4747",
                      textAlign: "center",
                      mb: 1,
                    }}
                  >
                    {error}
                  </Typography>
                )}
                <Box
                  mb={1}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  <input
                    type="checkbox"
                    defaultChecked="true"
                    style={{
                      accentColor: "#3B6F44",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "12px",
                      marginBottom: "16px",
                      // display: "flex",
                      // alignItems: "center",
                    }}
                  >
                    By continuing, I agree to the &nbsp;
                    <Link
                      sx={{
                        textDecoration: "underline",
                        color: "#303030",
                        fontWeight: "500",
                      }}
                      href="/term-of-service"
                    >
                      Terms of use
                    </Link>{" "}
                    &nbsp; and&nbsp;
                    <Link
                      sx={{
                        textDecoration: "underline",
                        color: "#303030",
                        fontWeight: "500",
                      }}
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </Typography>
                </Box>

                <Box mb={2}>
                  <Button
                    onClick={handelcheckotp}
                    sx={{
                      backgroundColor: "#3B6F44",
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      fontSize: "16px",
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
                    Verify OTP
                  </Button>
                  <Typography
                    onClick={ResendOtp}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#8A8A8A",
                      textAlign: "center",
                      cursor: "pointer",
                      mt: 1,
                    }}
                  >
                    Resend OTP
                  </Typography>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "14px",
            color: "#303030",
            textAlign: "center",
            pb: 3,
          }}
        >
          To know more check out{" "}
          <Link
            href="/refund-policy"
            style={{
              fontWeight: "600",
              cursor: "pointer",
              color: "#303030",
              textDecoration: "underline",
            }}
          >
            FAQ’s
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default AuthSignin;
