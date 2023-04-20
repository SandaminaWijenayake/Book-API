import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
