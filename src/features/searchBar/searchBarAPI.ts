import axios from "../../app/axios";

export function fetchQuoteByQuery(query: string) {
  return axios.get(`/quotes?query=${query}`);
}
