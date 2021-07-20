import React from "react";
import styles from "./styles.module.css";

interface IQuoteComponentText {
  type: "title" | "author";
  children: unknown;
}

function Text({ type: design, children }: IQuoteComponentText) {
  return <p className={styles[design]}> {children} </p>;
}

export { Text };
