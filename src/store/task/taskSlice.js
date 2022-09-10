import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  task: {},
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      return { tasks: [...state.tasks, action.payload] };
    },
  },
  extraReducers: {},
});
export const { addTasks } = taskSlice.actions;
export const getAllTasks = (state) => state.tasks.tasks;
export default taskSlice.reducer;
