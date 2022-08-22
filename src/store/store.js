import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";

const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
export default store;
