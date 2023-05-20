import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './slices/globalSlice';
import hiraganaSlice from './slices/hiraganaSlice';
import katakanaSlice from './slices/katakanaSlice';

export default configureStore({
  reducer: {
    global: globalSlice,
    hiragana: hiraganaSlice,
    katakana: katakanaSlice,
  },
});
