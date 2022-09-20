import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const signUp = createAsyncThunk("login/signUp", async (obj, thunkAPI) => {
  return obj;
});
const loginSlice = createSlice({
  name: "login",
  initialState: {
    users: [],
    user: null,
    loggedInUser: null,
  },
  reducers: {
    // user: {
    //   reducer: (state, action) => action.payload,
    //   prepare: (event) => ({
    //     payload: {
    //       username: "",
    //       password: "",
    //       confirmPassword: "",
    //       email: "",
    //       isRemember: false,
    //     },
    //   }),
    // },
    setUsers: (state, action) => {
      return { ...state, users: [...action.payload] };
    },
    newUser: (state, action) => {
      return { ...state, user: [action.payload, ...state.user] };
    },
    login: (state, action) => {
      return { ...state, loggedInUser: action.payload };
    },
    logout: (state, action) => {
      return { ...state, loggedInUser: null };
    },
    editUser: (state, action) => {
      const users = state.users.map((u) => {
        if (u.id === action.payload.id) {
          u = action.payload;
        }
        return u;
      });
      return { ...state, user: [...users] };
    },
    deleteUser: (state, action) => {
      const users = state.users.filter((u) => u.id != action.payload.id);
      return { ...state, users: [...users] };
    },
  },
  extraReducers: {},
});
export const { setUsers, newUser, editUser, deleteUser, login, logout } =
  loginSlice.actions;
export const getLoggedinUser = (state) => state.login.loggedInUser;
export default loginSlice.reducer;
