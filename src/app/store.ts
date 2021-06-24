import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quoteReducer from '../features/quote/quoteSlice';
import contextMenuReducer from '../features/contextMenu/contextMenuSlice';
import quoteFormReducer from '../features/quoteForm/formSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quote: quoteReducer,
    contextMenu: contextMenuReducer,
    quoteForm: quoteFormReducer,
    searchBar: searchBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
