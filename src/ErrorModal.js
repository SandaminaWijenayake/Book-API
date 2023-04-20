import React from "react";

import styles from "./ErrorModal.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const ErrorModal = (props) => {
  return (
    <>
      <div
        className={styles.backDrop}
        onClick={() => {
          props.backDrop();
        }}
      />
      <Card className={styles.module}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.message}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.button}>
          <Button
            onClick={() => {
              props.backDrop();
            }}
          >
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
