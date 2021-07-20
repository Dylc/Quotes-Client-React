import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchQuotes } from "./quoteAPI";

export interface IQuote {
  id: string;
  title: Record<string, string>;
  context: Record<string, string>;
  languages: [string];
  tags: Record<string, [string]>;
  author: Record<string, string>;
  sources: [string];
  contextAuthors: [string];
  books: [string];
  createdAt: string;
  updatedAt: string;
}
export interface QuoteState {
  quotes: IQuote[];
  count?: number;
  counter: number;
  skip: number;
  status: "idle" | "loading" | "failed";
}

const initialState: QuoteState = {
  quotes: [],
  skip: 0,
  counter: 0,
  status: "idle",
};

export interface IFetchQuoteAsync {
  // lang: string,
  skip: number;
}

export const fetchQuoteAsync = createAsyncThunk(
  "quote/fetchQuotes",
  async (props: IFetchQuoteAsync) => {
    const response = await fetchQuotes(props);
    return response.data;
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuoteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.quotes = [...state.quotes, ...action.payload.rows];
        state.count = action.payload.count;
        state.skip += action.payload.rows.length;
      });
  },
});

export const { increment, decrementCounter } = quoteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectQuotes = (state: RootState) => state.quote.quotes;
export const selectStatus = (state: RootState) => state.quote.status;
export const selectCount = (state: RootState) => state.quote.count;
export const selectSkip = (state: RootState) => state.quote.skip;
export const selectCounter = (state: RootState) => state.quote.counter;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementCounter = () => (dispatch, getState) => {
  const state = getState();
  const quotes = selectQuotes(state);
  const counter = selectCounter(state);
  const skip = selectSkip(state);
  if (counter >= quotes.length - 1) {
    dispatch(
      fetchQuoteAsync({
        // lang: 'he',
        skip: skip,
      })
    );
    dispatch(increment());
  } else {
    dispatch(increment());
  }
};

export default quoteSlice.reducer;
