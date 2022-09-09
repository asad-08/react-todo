import React from "react";
import "./MyTask.css";
import AddIcon from "@mui/icons-material/Add";
import { Search } from "@mui/icons-material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function MyTask() {
  return (
    <div className="mt-[60px] p-4 w-full">
      {/* search and add new task */}
      <div className="flex items-center justify-between">
        <div className="bg-slate-100 dark:bg-slate-200 sm:min-w-[400px] py-2 px-4 flex items-center rounded-full">
          <input
            placeholder="search for tasks..."
            className="w-full bg-transparent outline-none px-2"
          />
          <Search />
        </div>
        <button className="bg-purple-600 dark:bg-purple-400 p-[8px] px-4 flex items-center gap-1 rounded-full text-white">
          <AddIcon />
          <span className="text-sm font-semibold hidden sm:block">
            New Task
          </span>
        </button>
      </div>

      {/* today & tomorrow task and upcoming task with graph*/}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center md:justify-between flex-row gap-4 md:gap-4 mt-6">
          <div className="flex-1">
            <div className="w-full md:w-1/2 flex flex-col items-center gap-5">
              <div className="w-full flex gap-2">
                <label className="text-[16px] font-bold text-slate-600 dark:text-slate-100">
                  Today's Tasks
                </label>
                <div className="bg-purple-600 dark:bg-purple-400 flex justify-center text-white px-[8px] rounded-full">
                  4
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md shadow-slate-500">
                <div className="flex bg-sky-500 overflow-hidden rounded-lg">
                  <div className="flex flex-1 items-center justify-center flex-col bg-sky-600 text-white p-4">
                    <NotificationsActiveIcon
                      sx={{ height: "14px", width: "14px" }}
                    />
                    <label>11:20</label>
                  </div>
                  <div className="flex flex-[4] flex-col text-slate-100 px-4 py-4">
                    <h2 className="font-semibold text-2xl">Learn React</h2>
                    <label className="font-normal text-sm">
                      Starts in 2h 40min
                    </label>
                    <label className="font-normal text-sm">
                      Nikunja-2, Khilkhet, Dhaka
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-lg shadow-md shadow-slate-500">
                <div className="flex bg-orange-500 overflow-hidden rounded-lg ">
                  <div className="flex flex-1 items-center justify-center flex-col bg-orange-600 text-white p-4">
                    <NotificationsActiveIcon
                      sx={{ height: "14px", width: "14px" }}
                    />
                    <label>11:20</label>
                  </div>
                  <div className="flex flex-[4] flex-col text-slate-100 px-4 py-4">
                    <h2 className="font-semibold text-2xl">Learn React</h2>
                    <label className="font-normal text-sm">
                      Starts in 2h 40min
                    </label>
                    <label className="font-normal text-sm">
                      Nikunja-2, Khilkhet, Dhaka
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center gap-5 mt-12">
              <div className="w-full flex gap-2">
                <label className="text-[16px] font-bold text-slate-600 dark:text-slate-100">
                  Tomorrow's Tasks
                </label>
                <div className="bg-purple-600 dark:bg-purple-400 flex justify-center text-white px-[8px] rounded-full">
                  4
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md shadow-slate-500">
                <div className="flex bg-white  overflow-hidden rounded-lg">
                  <div className="flex flex-1 items-center justify-center flex-col bg-sky-100 text-black p-4">
                    <NotificationsActiveIcon
                      sx={{ height: "14px", width: "14px" }}
                    />
                    <label>11:20</label>
                  </div>
                  <div className="flex flex-[4] flex-col text-slate-700 px-4 py-4">
                    <h2 className="font-semibold text-2xl">Learn React</h2>
                    <label className="font-normal text-sm">
                      Starts in 2h 40min
                    </label>
                    <label className="font-normal text-sm">
                      Nikunja-2, Khilkhet, Dhaka
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-lg shadow-md shadow-slate-500">
                <div className="flex bg-white  overflow-hidden rounded-lg">
                  <div className="flex flex-1 items-center justify-center flex-col bg-sky-100 text-black p-4">
                    <NotificationsActiveIcon
                      sx={{ height: "14px", width: "14px" }}
                    />
                    <label>11:20</label>
                  </div>
                  <div className="flex flex-[4] flex-col text-slate-700 px-4 py-4">
                    <h2 className="font-semibold text-2xl">Learn React</h2>
                    <label className="font-normal text-sm">
                      Starts in 2h 40min
                    </label>
                    <label className="font-normal text-sm">
                      Nikunja-2, Khilkhet, Dhaka
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming and graph */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <label className="text-[16px] font-bold text-slate-600 dark:text-slate-100">
              Upcoming Tasks
            </label>
            <div>
              <label className="text-sm font-semibold text-purple-700 dark:text-purple-400 cursor-pointer hover:underline">
                see all
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTask;
