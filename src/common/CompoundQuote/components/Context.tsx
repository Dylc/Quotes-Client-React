import React from "react";
import styles from "./styles.module.css";

interface IQuoteComponentContext {
  rtl?: boolean;
  html?: string;
  children?: unknown;
}

function Context({ rtl = false, html, children }: IQuoteComponentContext) {
  return (
    <div
      className={`${styles.context} ${
        rtl ? styles.contextRtl : styles.contextLtl
      }`}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

export { Context };
