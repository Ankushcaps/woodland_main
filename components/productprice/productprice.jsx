import style from "./productprice.module.css";
const ProductPrice = ({ data, priceinfo,recentsku }) => {
  function formatNumber(number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      // minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    });

    return formatter.format(number).replace(",", " ");
  }

  return (
    <div>
      <h2 className={style.productname}>{recentsku[0]?.name}</h2>
      <div>
        <div className={style.productprice}>
          <span className={style.offerprice}>
            ₹{formatNumber(parseInt(priceinfo.offerPrice))}
          </span>
          {priceinfo.discount === 0 ? (
            ""
          ) : (
            <span className={style.mrpprice}>
              MRP <span>₹{formatNumber(parseInt(priceinfo.price))}</span>
            </span>
          )}
          {priceinfo.discount === 0 ? (
            ""
          ) : (
            <span className={style.discount}>
              ₹{parseInt(priceinfo.discount)}% off
            </span>
          )}
          {/* <span>₹{parseInt("25")}% off</span> */}
          <div className={style.inculsivetax}>Prices include taxes</div>
        </div>
      </div>
    </div>
  );
};
export default ProductPrice;
