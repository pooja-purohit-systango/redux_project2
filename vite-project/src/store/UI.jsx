import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateUiState = { isCartVisible: true };

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialStateUiState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

