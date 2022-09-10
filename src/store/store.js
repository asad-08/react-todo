import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import modeReducer from "./mode/modeSlice";
import taskReducer from "./task/taskSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    mode: modeReducer,
    tasks: taskReducer,
  },
});
export default store;
