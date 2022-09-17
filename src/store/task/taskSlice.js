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
    completeTask: (state, action) => {
      return {
        tasks: state.tasks.map((x) =>
          x.taskid == action.payload ? { ...x, isCompleted: !x.isCompleted } : x
        ),
      };
    },
  },
  extraReducers: {},
});
export const { addTasks, completeTask } = taskSlice.actions;
export const getAllTasks = (state) => state.tasks.tasks;
export default taskSlice.reducer;
