import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectStatus,
  selectQuotes,
  selectCounter,
  fetchQuoteAsync,
  selectSkip,
} from "./quoteSlice";
import styles from "./Quote.module.css";
import Loading from "../../common/Loading";
import ButtonControllers from "./ButtonControllers";
import QuoteWrapper from "./QuoteWrapper";

export function Quote() {
  const status = useAppSelector(selectStatus);
  const quotes = useAppSelector(selectQuotes);
  const counter = useAppSelector(selectCounter);
  const skip = useAppSelector(selectSkip);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchQuoteAsync({
        // lang: selectedLang,
        skip: skip,
      })
    );
  }, []);

  /**
   * Checks if we ready to present data
   * Return true if the status isn't loading
   * and if we have quote to display
   */
  const ready = () => {
    return status !== "loading" && quotes[counter];
  };

  return (
    <div className={styles.container}>
      {ready() ? (
        <>
          <QuoteWrapper />
          <ButtonControllers />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
