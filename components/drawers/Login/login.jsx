import {
  Box,
  Drawer,
  Typography,
  Container,
  Button,
  Link,
} from "@mui/material";
import React from "react";
// import AuthSignin from "../AuthSignin/AuthSignin";
import { useRouter } from "next/router";

function AuthLogin({ login, setLogin }) {
  const [showotp, setShowotp] = React.useState(false);
  const [phoneno, setPhoneno] = React.useState("");
  const [randomOtp, setRandomOtp] = React.useState("");
  const [error, setError] = React.useState("");
  const [check, setCheck] = React.useState(true);
  const router = useRouter();

  const makeAPICall = async ({ userphone, code }) => {
    try {
      const response = await fetch(
        `https://enterprise.smsgupshup.com/GatewayAPI/rest?method=SendMessage&send_to=${userphone}&msg=Dear Guest the OTP verification code is ${code} Woodland Team&msg_type=TEXT&userid=2000223571&auth_scheme=plain&password=Wdl@2168&v=1.1&format=text`,
        { mode: "no-cors" }
      );
      setShowotp(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newOtp = Math.floor(100000 + Math.random() * 900000);
    // setRandomOtp(newOtp);
    // smsapi(newOtp);
    const phoneRegex = /^[0-9]{10}$/; // regular expression for 10-digit phone number
    if (!phoneno || !phoneRegex.test(phoneno)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setRandomOtp(newOtp);
    makeAPICall({ userphone: phoneno, code: newOtp });
  };
  // const otp = (
  //   <Container>
  //     <AuthSignin
  //       phoneno={phoneno}
  //       verifyotp={randomOtp}
  //       close={() => {
  //         setShowotp(false);
  //       }}
  //       closeall={() => {
  //         setShowotp(false);
  //         setLoginDrawer(false);
  //       }}
  //       resendfunction={makeAPICall}
  //     />
  //   </Container>
  // );

  return (
    <Box>
      <Drawer
        open={login}
        anchor="right"
        onClose={() => {
          setLoginDrawer(false);
        }}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: "540px",
            },
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Box>
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
                    setLogin(false);
                  }}
                  mr={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "40px",
                    fontWeight: "500",
                  }}
                >
                  &times;
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
              <Box mt={10}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#303030",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Login/Register
                  </span>{" "}
                  with your mobile number
                </Typography>
                <Box mt={2}>
                  <form onSubmit={handleSubmit}>
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
                        type="number"
                        name="login"
                        value={phoneno}
                        onChange={(e) => {
                          setPhoneno(e.target.value);
                        }}
                        placeholder="Enter 10 digit mobile number"
                        required
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
                    <Box mb={2}>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "12px",
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          name="recevieupdate"
                          defaultChecked="true"
                          style={{
                            accentColor: "#3B6F44",
                            marginRight: "10px",
                          }}
                        />
                        Receive communications from us on messages
                      </Typography>
                    </Box>
                    <Box mb={2}>
                      <Button
                        type="submit"
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
                        Send OTP
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>

            <Box marginTop="auto">
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
        </Container>
      </Drawer>
    </Box>
  );
}

export default AuthLogin;
