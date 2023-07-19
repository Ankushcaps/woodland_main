import React from "react";
import styles from "./loading.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.spinnercontainer}>
      {/* <div className={styles.loadingspinner}></div> */}
      <div> <img src="/images/loading-logo.gif"/></div>
    </div>
  );
}
