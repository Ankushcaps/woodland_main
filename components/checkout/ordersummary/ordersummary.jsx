import style from "./ordersummary.module.css";

const OrderSummary = () => {
  return (
    <div>
      <h2 className={style.title}>Order Summary</h2>
      <div
        style={{
          borderBottom: "1px solid #dcdcdc",
        }}
      >
        <div className={style.orderdetials}>
          <div className={style.item}>Subtotal</div>
          <div className={style.itemvalue}>₹2695</div>
        </div>
        <div className={style.orderdetials}>
          <div className={style.item}>Discount (25% off) </div>
          <div className={style.itemvalue}>- ₹ 225</div>
        </div>
        <div className={style.orderdetials}>
          <div className={style.item}>Donation </div>
          <div className={style.itemvalue}> ₹ 30</div>
        </div>
        <div className={style.orderdetials}>
          <div className={style.item}>Shipping</div>
          <div className={style.itemvalue}>₹ 0</div>
        </div>
        <div className={style.orderdetials}>
          <div className={style.item}>Promo Applied </div>
          <div className={style.itemvalue}>- ₹539</div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #dcdcdc",
        }}
      >
        <div className={style.totalorderdetials}>
          <div className={style.item}> Total</div>
          <div className={style.itemvalue}> ₹1931</div>
        </div>
        <div className={style.inclusive}>
          inclusive of all gst and other taxes
        </div>
      </div>
      {/* <div>
        <button onClick={onSubmit}>Submit</button>
      </div> */}
    </div>
  );
};
export default OrderSummary;
