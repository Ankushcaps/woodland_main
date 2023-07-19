import { useState } from "react";
import style from "./shippingava.module.css";
const ShippingAva = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [valid, setValid] = useState();
  const [serviable ,setServiabe] =useState();

  const handleCheck = () => {
    const pincode = document.querySelector("#pincode").value;
    if (pincode.length !== 6 || !/^[0-9]*$/.test(pincode)) {
      setError(true);
      setSuccess(false);
      setValid(false);
    } else if (pincode === "201003") {
      setError(false);
      setSuccess(false);
      setValid(true);
    } else {
      setError(false);
      setSuccess(true);
      setValid(false);
    }
  };
  return (
    <div>
      <div>
        <h1 className={style.title}>Free Delivery</h1>
        <h1 className={style.description}>
          For orders above ₹1000. Delivery in 3-7 working days.{" "}
        </h1>
      </div>
      <div className={style.shippingcheck}>
        <input
          type="text"
          id="pincode"
          maxLength={6}
          placeholder="Enter Pincode"
        />
        <button onClick={handleCheck}>Check</button>
      </div>
      {error && (
        <p className={style.error}>
          &#9888; Invalid pincode. Please enter a valid 6-digit pincode.
        </p>
      )}
      {valid && (
        <p className={style.error}>
          {" "}
          &#9888; Sorry, We don’t ship to this pincode.
        </p>
      )}
      {success && (
        <p className={style.success}>
          &#9989; Delivery available for this pincode. Please proceed.
        </p>
      )}
    </div>
  );
};
export default ShippingAva;
