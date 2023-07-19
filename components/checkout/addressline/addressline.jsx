import React from "react";
import style from "./addressline.module.css";
import { useForm } from "react-hook-form";

function AddressLine() {
//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const preperOrderAdres = getValues();
//     console.log("submitted", preperOrderAdres);
//   };

  return (
    <div>
      <h2 className={style.subhead}>New Shipping Address</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputcontainer}>
          <div className={`${style.inputbox} ${style.Lname}`}>
            <input
              style={{
                borderBottom: errors.fname ? "1px solid #c10000" : "",
              }}
              type="text"
              id="fname"
              placeholder="First Name*"
              {...register("fname", { required: "First Name is required" })}
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
                borderBottom: errors.addressline ? "1px solid #c10000" : "",
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

            <span className={style.error}>{errors.addressline?.message}</span>
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
                  borderBottom: errors.pincode ? "1px solid #c10000" : "",
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
              />

              <input
                style={{
                  borderBottom: errors.city ? "1px solid #c10000" : "",
                }}
                type="text"
                id="city"
                placeholder="City/Disctrict/Town*"
                {...register("city", { required: "city is required" })}
              />

              <span className={style.error}>{errors.pincode?.message}</span>
            </div>
            <div className={style.state}>
              <input
                style={{
                  borderBottom: errors.state ? "1px solid #c10000" : "",
                }}
                type="text"
                id="state"
                placeholder="State*"
                {...register("state", { required: "state is required" })}
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
          <span className={style.error}>{errors.workspace?.message}</span>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressLine;
