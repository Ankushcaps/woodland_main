import { useState, useEffect } from "react";
import style from "./quantityselector.module.css";
function ProductSelectBox({ stock, currentQty }) {
  const [quantity, setQuantity] = useState(1);

  const quantityOptions = [...Array(stock < 5 ? stock : 5).keys()].map((i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  const handleQuantityChange = (event) => {
    const qty = event.target.value;
    setQuantity(qty);
  };

  useEffect(() => {
    currentQty(quantity);
  }, [quantity]);

  return (
    <div className={style.selectbox}>
      <div>Qty</div>
      <select value={quantity} onChange={handleQuantityChange}>
        {quantityOptions}
      </select>
    </div>
  );
}
export default ProductSelectBox;
