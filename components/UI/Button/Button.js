import styles from "./button.module.css";

export const Button = ({ variant = "primary", children, ...overrides }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...overrides}>
      {children}
    </button>
  );
};
