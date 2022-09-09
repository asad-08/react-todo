import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import modeReducer from "./mode/modeSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    mode: modeReducer,
  },
});
export default store;
