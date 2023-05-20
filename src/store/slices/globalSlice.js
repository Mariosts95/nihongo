import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  kanaDisplayLanguage: true,
};

export const loadStateFromLocalStorage = createAsyncThunk(
  'globalSlice/loadStateFromLocalStorage',
  async () => {
    const stateFromLocalStorage = localStorage.getItem('globalState');
    return stateFromLocalStorage ? JSON.parse(stateFromLocalStorage) : initialState;
  }
);

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateThemeSelection: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('globalState', JSON.stringify(state));
    },
    updateKanaDisplayLang: (state) => {
      state.kanaDisplayLanguage = !state.kanaDisplayLanguage;
    },
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadStateFromLocalStorage.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updateThemeSelection, updateKanaDisplayLang, resetState } = globalSlice.actions;

export default globalSlice.reducer;
