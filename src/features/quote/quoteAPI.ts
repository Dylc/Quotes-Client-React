import axios from "../../app/axios";
import { IFetchQuoteAsync, IFetchQuoteByTagAsync } from "./quoteSlice";

export function fetchQuotes(props: IFetchQuoteAsync) {
  let query = "?";
  Object.keys(props).forEach((key) => {
    query += `${key}=${props[key]}&`;
  });
  return axios.get(`/quotes${query}limit=2`);
}

export function fetchQuotesByTags(props: IFetchQuoteByTagAsync) {
  return axios.get(`/quotes?tag=${props.lang}__${props.tag}`);
}