import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { editQuote, addQuote } from "./formAPI";

export interface QuoteFormState {
  editResult?: unknown;
  editStatus: "idle" | "loading" | "failed";
  addResult?: unknown;
  addStatus: "idle" | "loading" | "failed";
}

const initialState: QuoteFormState = {
  editStatus: "idle",
  addStatus: "idle",
};

export const editQuoteAsync = createAsyncThunk(
  "quote/editQuote",
  async (args: any) => {
    const response = await editQuote(args.id, args.quote);
    return response.data;
  }
);

export const addQuoteAsync = createAsyncThunk(
  "quote/addQuote",
  async (args: any) => {
    const response = await addQuote(args.quote);
    return response.data;
  }
);

export const quoteFormSlice = createSlice({
  name: "quoteForm",
  initialState,
  reducers: {
    cleanResultFor: (state, action: PayloadAction<string>) => {
      if (action.payload === "ADD") {
        state.addResult = null;
      } else {
        state.editResult = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editQuoteAsync.pending, (state) => {
        state.editStatus = "loading";
      })
      .addCase(editQuoteAsync.fulfilled, (state, action) => {
        state.editStatus = "idle";
        state.editResult = action.payload;
      })
      .addCase(addQuoteAsync.pending, (state) => {
        state.addStatus = "loading";
      })
      .addCase(addQuoteAsync.fulfilled, (state, action) => {
        state.addStatus = "idle";
        state.addResult = action.payload;
      });
  },
});

export const { cleanResultFor } = quoteFormSlice.actions;

export const selectQuoteFormState = (state: RootState) => state.quoteForm;
export const selectEditStatus = (state: RootState) =>
  state.quoteForm.editStatus;
export const selectEditResult = (state: RootState) =>
  state.quoteForm.editResult;
export const selectAddStatus = (state: RootState) => state.quoteForm.addStatus;
export const selectAddResult = (state: RootState) => state.quoteForm.addResult;

export default quoteFormSlice.reducer;
