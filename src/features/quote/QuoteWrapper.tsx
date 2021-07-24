import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectQuotes, selectCounter, searchByTagAsync } from "./quoteSlice";
import { enumLanguages, selectLang } from "../contextMenu/contextMenuSlice";
import { getFlags } from "../../utilites/flags";
import Quote from "../../common/CompoundQuote/Quote";
import { useDispatch } from "react-redux";
import { setLang } from "../contextMenu/contextMenuSlice";
import { useHistory } from "react-router-dom";

function QuoteWrapper() {
  const quotes = useAppSelector(selectQuotes);
  const counter = useAppSelector(selectCounter);
  const lang = useAppSelector(selectLang);

  const history = useHistory();

  const quote = quotes[counter];
  const flags = getFlags(quote.languages);
  const dispatch = useDispatch();

  const handleChangeLang = (lang: enumLanguages) => dispatch(setLang(lang));

  const handleOnTagClick = (tag: string) => {
    dispatch(searchByTagAsync({tag, lang}));
    history.push("/searched");
  }

  return (
    <Quote>
      <Quote.Text type="title">{quote.title[lang]}</Quote.Text>
      <Quote.Text type="author"> {quote.author[lang]}</Quote.Text>
      <Quote.Context rtl={lang === "he"} html={quote.context[lang]} />
      <Quote.Flags flags={flags} onClick={handleChangeLang} />
      <Quote.Tags tags={quote.tags[lang]} onClick={handleOnTagClick} />
    </Quote>
  );
}

export default QuoteWrapper;
