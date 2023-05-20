import { createSlice } from '@reduxjs/toolkit';

import katakanaData from '@/assets/katakana.json';

const initialState = {
  katakana: [],
  katakanaOptions: {
    gojuuon: false,
    dakuon: false,
    handakuon: false,
    youon: false,
  },
};

export const katakanaSlice = createSlice({
  name: 'katakana',
  initialState,
  reducers: {
    updateKatakana: (state, { payload }) => {
      if (payload.optionValue) {
        state.katakana = [
          ...state.katakana,
          ...katakanaData.filter((kana) => kana.type === payload.optionName),
        ];
      } else {
        state.katakana = state.katakana.filter((kana) => kana.type !== payload.optionName);
      }
    },
    updateKatakanaOptions: (state, { payload }) => {
      state.katakanaOptions[payload.optionName] = payload.optionValue;
      if (payload.optionValue) {
        state.katakana = [
          ...state.katakana,
          ...katakanaData.filter((kana) => kana.type === payload.optionName),
        ];
      } else {
        state.katakana = state.katakana.filter((kana) => kana.type !== payload.optionName);
      }
    },
    resetKatakana: () => initialState,
  },
});

export const { updateKatakana, updateKatakanaOptions, resetKatakana } = katakanaSlice.actions;

export default katakanaSlice.reducer;
