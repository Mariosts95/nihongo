import { configureStore } from '@reduxjs/toolkit';

import hiraganaReducer from './slices/hiraganaSlice';

export const store = configureStore({
  reducer: {
    hiragana: hiraganaReducer,
  },
});
