import axios from "../../app/axios";

export function editQuote(id: string, quote: unknown) {
  return axios.put(`/quotes/${id}`, quote);
}
export function addQuote(quote: unknown) {
  return axios.post(`/quotes`, quote);
}
