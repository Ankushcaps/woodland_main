import { Link } from "@mui/material";
import Image from "next/image";
import style from "./productcard.module.css";
const ProductCard = ({ data, aspectRatio }) => {
  const currentsku = data.skus[0];

  const slecteGtm = () => {
    dataLayer.push({
      event: "select_item",
      ecommerce: {
        items: [
          {
            item_id: data.productID || "",
            item_name: currentsku.name || "",
            price: data.offerPrice || 0,
            item_brand: data.brand || "",
            item_category: data.division || "",
            item_category2: data.category || "",
            item_variant: currentsku.color || "",
            item_list_name: currentsku.name || "",
            item_var_id: currentsku.skuId || "",
          },
        ],
      },
    });
  };
  return (
    <div>
      <div className={style.productwrapper}>
        <div className={style.card}>
          <Link
            href={`/productinfo/${data?.skus[0]?.skuId}`}
            onClick={slecteGtm}
          >
            <div className={style.productimg}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: aspectRatio,
                }}
              >
                <Image
                  src={data.image[0].img}
                  alt="product-image"
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
              </div>
              {data.discount === 0 ? (
                " "
              ) : (
                <span className={style.discount}>{data.discount} %</span>
              )}
              {data.bestseller && (
                <span className={style.bestsellertag}>&#9733; Bestseller</span>
              )}
            </div>
          </Link>
          <p className={style.productname}>{data.skus[0].name}</p>
          <p className={style.productprice}>
            {data.discount ? <span>₹{data.price}</span> : ""}₹{data.offerPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
