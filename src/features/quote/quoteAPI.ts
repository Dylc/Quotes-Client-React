import axios from "../../app/axios";
import { IFetchQuoteAsync } from "./quoteSlice";

export function fetchQuotes(props: IFetchQuoteAsync) {
  let query = "?";
  Object.keys(props).forEach((key) => {
    query += `${key}=${props[key]}&`;
  });
  return axios.get("/quotes" + `${query}limit=2`);
}
