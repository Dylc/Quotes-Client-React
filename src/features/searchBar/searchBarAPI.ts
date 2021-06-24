import axios from "../../app/axios";
import { IFetchQuoteAsync } from "./searchBarSlice";

export function fetchQuoteByQuery(query: string) {
  return axios.get("/quotes" + `?query=${query}`);
}
