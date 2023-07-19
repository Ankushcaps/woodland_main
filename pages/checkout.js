import style from "@/components/checkout/addressline/addressline.module.css";
import OrderSummary from "@/components/checkout/ordersummary/ordersummary";
import { Container, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

function Checkout() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const preperOrderAdres = getValues();
    console.log("submitted", preperOrderAdres);
  };

  const fetchAddressData = async (pincode) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      if (response.ok && data[0].Status === "Success") {
        const { District, State } = data[0].PostOffice[0];
        setValue("city", District);
        setValue("state", State);
      } else {
        console.error("Error fetching address data:", data[0].Message);
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
    setIsLoading(false);
  };

  const handlePincodeChange = (e) => {
    const pincode = e.target.value;
    if (pincode.length === 6) {
      fetchAddressData(pincode);
      clearErrors("pincode");
      clearErrors("city");
      clearErrors("state");
    } else {
      setValue("city", "");
      setValue("state", "");
    }
  };

  useEffect(() => {
    register("city", { required: "City is required" });
    register("state", { required: "State is required" });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <div>
                <h2 className={style.subhead}>New Shipping Address</h2>

                <div className={style.inputcontainer}>
                  <div className={`${style.inputbox} ${style.Lname}`}>
                    <input
                      style={{
                        borderBottom: errors.fname ? "1px solid #c10000" : "",
                      }}
                      type="text"
                      id="fname"
                      placeholder="First Name*"
                      {...register("fname", {
                        required: "First Name is required",
                      })}
                    />

                    <input
                      type="text"
                      id="lname"
                      placeholder="Last Name"
                      {...register("lname")}
                    />

                    <span className={style.error}>{errors.fname?.message}</span>
                  </div>
                  <div className={style.inputbox}>
                    <input
                      style={{
                        borderBottom: errors.email ? "1px solid #c10000" : "",
                      }}
                      type="email"
                      id="email"
                      placeholder="Email*"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className={style.error}>{errors.email?.message}</span>
                  </div>
                </div>
                <div className={style.inputcontainer}>
                  <div className={style.inputbox}>
                    <input
                      style={{
                        borderBottom: errors.addressline
                          ? "1px solid #c10000"
                          : "",
                      }}
                      className={style.addressline}
                      type="text"
                      id="addressline"
                      placeholder="Address Line*"
                      {...register("addressline", {
                        required: "Address is required",
                        minLength: {
                          value: 10,
                          message: "Address must be greater than 10 letter",
                        },
                      })}
                    />

                    <span className={style.error}>
                      {errors.addressline?.message}
                    </span>
                  </div>
                  <div className={`${style.inputbox} ${style.pincodewrapper}`}>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <input
                        style={{
                          borderBottom: errors.pincode
                            ? "1px solid #c10000"
                            : "",
                        }}
                        type="text"
                        id="pincode"
                        maxLength={6}
                        placeholder="Enter Pincode*"
                        {...register("pincode", {
                          required: "Pincode is required",
                          minLength: {
                            value: 6,
                            message: "Pincode must be 6 digits",
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Pincode should only contain numbers",
                          },
                        })}
                        onChange={handlePincodeChange}
                      />

                      <input
                        style={{
                          borderBottom: errors.city ? "1px solid #c10000" : "",
                        }}
                        type="text"
                        id="city"
                        placeholder="City/Disctrict/Town*"
                        {...register("city", { required: "city is required" })}
                        readOnly
                      />

                      <span className={style.error}>
                        {errors.pincode?.message}
                      </span>
                    </div>
                    <div className={style.state}>
                      <input
                        style={{
                          borderBottom: errors.state ? "1px solid #c10000" : "",
                        }}
                        type="text"
                        id="state"
                        placeholder="State*"
                        {...register("state", {
                          required: "state is required",
                        })}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className={style.inputcontainer}>
                  <div className={`${style.inputbox} ${style.landmark}`}>
                    <input
                      type="text"
                      id="landmark"
                      placeholder="Landmark (optional)"
                      {...register("landmark")}
                    />
                  </div>
                </div>
                <div className={style.workspacecontainer}>
                  <div className={style.workspace}>
                    <label>
                      <input
                        type="radio"
                        name="workspace"
                        id="home"
                        value="home"
                        {...register("workspace", {
                          required: "Please select a workspace",
                        })}
                      />
                      Home (All day delivery)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="workspace"
                        id="work"
                        value="work"
                        {...register("workspace", {
                          required: "Please select a workspace",
                        })}
                      />
                      Work (Delivery between 10AM - 6PM)
                    </label>
                  </div>
                  <span className={style.error}>
                    {errors.workspace?.message}
                  </span>
                </div>
                <div className={style.workspacecontainer}>
                  <div className={style.workspace}>
                    <label>
                      <input
                        type="checkbox"
                        id="updates"
                        defaultChecked
                        {...register("updates")}
                      />
                      I would like to receive updates on the latest products and
                      promotions via email or other channels
                    </label>
                  </div>
                </div>

                {/* Rest of the form fields */}
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <OrderSummary />
              <button
                className={style.submitbtn}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </form>
  );
}

export default Checkout;
