import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  editQuoteAsync,
  addQuoteAsync,
  selectEditStatus,
  selectAddStatus,
  selectEditResult,
  selectAddResult,
  cleanResultFor
} from "./formSlice";
import { IQuote, selectQuotes, selectCounter } from "../quote/quoteSlice";
import { SHARED_MESSAGES } from "../../lang/messages.js";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Loading from "../../common/Loading";
import Confirmation from "../../common/Confirmation";
import TextFieldController from "../../common/TextFieldController";
import Button from '@material-ui/core/Button';
import { formatData } from '../../utilites'; 

const fields = [
  { path: "title.ru", label: "Title - Russian" },
  { path: "title.he", label: "Title - Hebrew" },
  { path: "title.en", label: "Title - English" },
  { path: "context.ru", label: "Context - Russian", multiline: true },
  { path: "context.he", label: "Context - Hebrew", multiline: true },
  { path: "context.en", label: "Context - English", multiline: true },
  { path: "author.ru", label: "Author - Russian" },
  { path: "author.he", label: "Author - Hebrew" },
  { path: "author.en", label: "Author - English" },
  { path: "books", label: "Books", isArray: true },
  { path: "languages", label: "Languages", isArray: true },
  { path: "contextAuthors", label: "Context Authors", isArray: true },
  { path: "sources", label: "Sources", isArray: true },
  { path: "tags.ru", label: "Tags - Russian", isArray: true },
  { path: "tags.he", label: "Tags - Hebrew", isArray: true },
  { path: "tags.en", label: "Tags - English", isArray: true },
];

export function QuoteForm() {
  const quotes = useAppSelector(selectQuotes);
  const counter = useAppSelector(selectCounter);
  const editStatus = useAppSelector(selectEditStatus);
  const editResult = useAppSelector(selectEditResult);
  const addStatus = useAppSelector(selectAddStatus);
  const addResult = useAppSelector(selectAddResult);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const action = history.location.pathname === "/edit" ? "EDIT" : "ADD";
  const quote = action === "EDIT" ? quotes[counter] || {} : {};

  const { control, handleSubmit } = useForm();

  const handleEdit = (newQuote) => {
    const id = (quote as IQuote).id;
    dispatch(editQuoteAsync({ id, quote: newQuote }));
  };

  const handleAdd = (quote) => {
    dispatch(addQuoteAsync({ quote }));
  };

  const handleOnCloseAlert = () => {
    const value = addResult ? "ADD" : "EDIT"
    dispatch(cleanResultFor(value))
  }

  const onSubmit = (formData) => {
    const newQuote = formatData(formData);
    action === "EDIT" ? handleEdit(newQuote) : handleAdd(newQuote);
  };

  const getForm = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((cnt) => (
          <TextFieldController
            path={cnt.path}
            label={cnt.label}
            quote={quote}
            control={control}
            multiline={cnt.multiline}
            isArray={cnt.isArray}
          />
        ))}

        <Button type="submit" fullWidth size="large" variant="contained" color="primary">
          {action}
        </Button>
      </form>
    );
  };

  const isLoading = () => editStatus === "loading" || addStatus === "loading";

  return (
    <>
      {isLoading() ? <Loading /> : getForm()}
      {addResult && (
        <Confirmation onClose={handleOnCloseAlert}>
          Your quote has been successfully added
        </Confirmation>
      )}
      {editResult && (
        <Confirmation onClose={handleOnCloseAlert}>
          Your quote has been successfully edited
        </Confirmation>
      )}
    </>
  );
}
