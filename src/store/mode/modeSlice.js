import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    currentMode: false,
  },
  reducers: {
    setCurrentMode: (state, { payload }) => {
      state.currentMode = payload;
    },
  },
  extraReducers: {},
});
export const { setCurrentMode } = modeSlice.actions;
export const getCurrentMode = (state) => state.mode.currentMode;
export default modeSlice.reducer;
