import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchQuoteByQuery } from "./searchBarAPI";
import { IQuote } from "../quote/quoteSlice";

export interface QuoteState {
  query: string;
  status: "idle" | "loading" | "failed";
  quotes: IQuote[];
  isSearching: boolean;
}

const initialState: QuoteState = {
  query: "",
  status: "idle",
  quotes: [],
  isSearching: false,
};

export interface IFetchQuoteAsync {
  query: number;
}

export const fetchQuoteByQueryAsync = createAsyncThunk(
  "quote/fetchQuoteByQuery",
  async (query: string) => {
    const response = await fetchQuoteByQuery(query);
    return response.data;
  }
);

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteByQueryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuoteByQueryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.quotes = action.payload.rows;
      });
  },
});

export const { setIsSearching } = searchBarSlice.actions;

export const selectSearchedQuotes = (state: RootState) =>
  state.searchBar.quotes;
export const selectIsSearching = (state: RootState) =>
  state.searchBar.isSearching;
export const selectStatus = (state: RootState) => state.searchBar.status;

export default searchBarSlice.reducer;
