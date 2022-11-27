import { createSlice } from '@reduxjs/toolkit';

import hiraganaData from '@/assets/hiragana.json';

import { randomInt } from '@/utils/helpers';

const initialState = {
  hiragana: [],
  hiraganaOptions: {
    gojuuon: false,
    dakuon: false,
    handakuon: false,
    youon: false,
  },
};

export const hiraganaSlice = createSlice({
  name: 'hiragana',
  initialState,
  reducers: {
    updateHiragana: (state, { payload }) => {
      if (payload.optionValue) {
        state.hiragana = [
          ...state.hiragana,
          ...hiraganaData.filter((kana) => kana.type === payload.optionName),
        ];
      } else {
        state.hiragana = state.hiragana.filter((kana) => kana.type !== payload.optionName);
      }
    },
    updateHiraganaOptions: (state, { payload }) => {
      state.hiraganaOptions[payload.optionName] = payload.optionValue;
      if (payload.optionValue) {
        state.hiragana = [
          ...state.hiragana,
          ...hiraganaData.filter((kana) => kana.type === payload.optionName),
        ];
      } else {
        state.hiragana = state.hiragana.filter((kana) => kana.type !== payload.optionName);
      }
    },
    resetHiragana: (state) => {
      state.hiragana = [];
      state.hiraganaOptions = {
        gojuuon: false,
        dakuon: false,
        handakuon: false,
        youon: false,
      };
    },
    getRandomHiragana: (state) => state.hiragana[randomInt(0, state.hiragana.length - 1)],
  },
});

export const { updateHiragana, updateHiraganaOptions, resetHiragana, getRandomHiragana } =
  hiraganaSlice.actions;

export default hiraganaSlice.reducer;
