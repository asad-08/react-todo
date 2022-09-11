import React, { useEffect, useState } from "react";
import "./MyTask.css";
import AddIcon from "@mui/icons-material/Add";
import { Search } from "@mui/icons-material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Checkbox } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllTasks } from "../../store/task/taskSlice";
import moment from "moment";

function MyTask() {
  const events = useSelector(getAllTasks);
  const [todayList, setTodayList] = useState([]);
  const [tomorrowList, setTomorrowList] = useState([]);

  useEffect(() => {
    const tdyList =
      events.length > 0 &&
      events.filter(
        (x) => x.selectedDate == moment(new Date()).format("DD-MM-YYYY")
      );
    const tmrList =
      events.length > 0 &&
      events.filter(
        (x) => x.selectedDate == moment().add(1, "days").format("DD-MM-YYYY")
      );
    setTodayList(tdyList);
    setTomorrowList(tmrList);
  }, [events]);

  const shadowColorList = [
    "bg-blue-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-purple-500",
  ];
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
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-1 mt-6">
          <div className="flex-1">
            <div className="w-full flex flex-col items-center gap-5">
              <div className="w-full flex gap-2">
                <label className="text-[16px] font-bold text-slate-600 dark:text-slate-100">
                  Today's Tasks
                </label>
                <div className="bg-purple-600 dark:bg-purple-400 flex justify-center text-white px-[8px] rounded-full">
                  {(todayList && todayList.length) || 0}
                </div>
              </div>
              {todayList &&
                todayList.length > 0 &&
                todayList.map((x, ind) => (
                  <div
                    key={ind}
                    className="w-full rounded-lg shadow-md shadow-slate-500"
                  >
                    <div className={`flex  overflow-hidden rounded-lg`}>
                      <div
                        className={`z-10 flex flex-1 items-center justify-center flex-col ${x.color} text-white p-4`}
                      >
                        <NotificationsActiveIcon
                          sx={{ height: "14px", width: "14px" }}
                        />
                        <label>
                          {moment(x.selectedDateTime).format("HH:MM")}
                        </label>
                      </div>
                      <div
                        className={`flex flex-[4] flex-col text-slate-100 ${
                          x.color.substr(0, x.color.length - 3) +
                          parseInt(
                            x.color.substr(x.color.length - 3, x.color.length) -
                              100
                          )
                        } px-4 py-4`}
                      >
                        <h2 className="font-semibold text-2xl">{x.title}</h2>
                        <label className="font-normal text-sm">
                          Starts in 2h 40min
                        </label>
                        <label className="font-normal text-sm">
                          {x.description.length > 50
                            ? x.description.substr(0, 50) + "..."
                            : x.description}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="w-full flex flex-col items-center gap-5 mt-12">
              <div className="w-full flex gap-2">
                <label className="text-[16px] font-bold text-slate-600 dark:text-slate-100">
                  Tomorrow's Tasks
                </label>
                <div className="bg-purple-600 dark:bg-purple-400 flex justify-center text-white px-[8px] rounded-full">
                  {(tomorrowList && tomorrowList.length) || 0}
                </div>
              </div>
              {tomorrowList &&
                tomorrowList.length > 0 &&
                tomorrowList.map((x, ind) => (
                  <div className="w-full rounded-lg shadow-md shadow-slate-500">
                    <div className="flex bg-white  overflow-hidden rounded-lg">
                      <div
                        className={`z-10 flex flex-1 items-center justify-center flex-col ${x.color} text-white p-4`}
                      >
                        <NotificationsActiveIcon
                          sx={{ height: "14px", width: "14px" }}
                        />
                        <label>
                          {moment(x.selectedDateTime).format("HH:MM")}
                        </label>
                      </div>
                      <div
                        className={`flex flex-[4] flex-col text-slate-100 ${
                          x.color.substr(0, x.color.length - 3) +
                          parseInt(
                            x.color.substr(x.color.length - 3, x.color.length) -
                              100
                          )
                        } px-4 py-4`}
                      >
                        <h2 className="font-semibold text-2xl">{x.title}</h2>
                        <label className="font-normal text-sm">
                          Starts in 2h 40min
                        </label>
                        <label className="font-normal text-sm">
                          {x.description.length > 50
                            ? x.description.substr(0, 50) + "..."
                            : x.description}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Upcoming and graph */}
        <div className="flex-1 flex flex-col mt-[20px]">
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
          <div className="w-full p-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-lg flex flex-col gap-8 mt-6">
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="w-full flex-[4] flex items-center gap-1">
                <Checkbox />
                <label className="text-slate-400">#1001</label>
                <label className="text-slate-800 dark:text-slate-50">
                  Learn React with Redux
                </label>
                <div className="border border-purple-700 dark:border-purple-400 rounded-full ml-4 flex items-center justify-between px-2 py-1 gap-2">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-purple-700 dark:text-purple-400"></div>
                  <label className="text-purple-700 dark:text-purple-400 text-[12px]">
                    Marketing
                  </label>
                </div>
              </div>
              <div className="flex-1 w-full px-4 flex items-center justify-end gap-2">
                <label className="text-slate-700 dark:text-slate-50">
                  10 Aug
                </label>
                <label className="text-red-700 bg-red-200 rounded-full px-2 py-1 text-[10px] font-semibold">
                  Overdue
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="w-full flex-[4] flex items-center gap-1">
                <Checkbox />
                <label className="text-slate-400">#1001</label>
                <label className="text-slate-800 dark:text-slate-50">
                  Learn React with Redux
                </label>
                <div className="border border-purple-700 dark:border-purple-400 rounded-full ml-4 flex items-center justify-between px-2 py-1 gap-2">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-purple-700 dark:text-purple-400"></div>
                  <label className="text-purple-700 dark:text-purple-400 text-[12px]">
                    Marketing
                  </label>
                </div>
              </div>
              <div className="flex-1 w-full px-4 flex items-center  justify-end gap-2">
                <label className="text-slate-700 dark:text-slate-50">
                  10 Aug
                </label>
                <label className="text-red-700 bg-red-200 rounded-full px-2 py-1 text-[10px] font-semibold">
                  Overdue
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="w-full flex-[4] flex items-center gap-1">
                <Checkbox />
                <label className="text-slate-400">#1001</label>
                <label className="text-slate-800 dark:text-slate-50">
                  Learn React with Redux
                </label>
                <div className="border border-purple-700 dark:border-purple-400 rounded-full ml-4 flex items-center justify-between px-2 py-1 gap-2">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-purple-700 dark:text-purple-400"></div>
                  <label className="text-purple-700 dark:text-purple-400 text-[12px]">
                    Marketing
                  </label>
                </div>
              </div>
              <div className="flex-1 w-full px-4 flex items-center  justify-end gap-2">
                <label className="text-slate-700 dark:text-slate-50">
                  10 Aug
                </label>
                <label className="text-red-700 bg-red-200 rounded-full px-2 py-1 text-[10px] font-semibold">
                  Overdue
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="w-full flex-[4] flex items-center gap-1">
                <Checkbox />
                <label className="text-slate-400">#1001</label>
                <label className="text-slate-800 dark:text-slate-50">
                  Learn React with Redux
                </label>
                <div className="border border-purple-700 dark:border-purple-400 rounded-full ml-4 flex items-center justify-between px-2 py-1 gap-2">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-purple-700 dark:text-purple-400"></div>
                  <label className="text-purple-700 dark:text-purple-400 text-[12px]">
                    Marketing
                  </label>
                </div>
              </div>
              <div className="flex-1 w-full px-4 flex items-center  justify-end gap-2">
                <label className="text-slate-700 dark:text-slate-50">
                  10 Aug
                </label>
                <label className="text-red-700 bg-red-200 rounded-full px-2 py-1 text-[10px] font-semibold">
                  Overdue
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 mt-6">
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center text-slate-700 dark:text-slate-100">
              <div className="px-3">progress</div>
              <div className="flex flex-col p-6">
                <label>
                  <span className="text-purple-700 dark:text-purple-400 text-xl font-semibold">
                    18
                  </span>
                  <span className="text-slate-400 dark:text-slate-100 text-sm font-semibold">
                    {" "}
                    / 30
                  </span>
                </label>
                <label className="text-[12px] font-semibold">
                  Tasks completed this month asdf asdf asf
                </label>
                <label className="text-purple-700 dark:text-purple-400 hover:underline text-sm font-semibold">
                  show details
                </label>
              </div>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center text-slate-700 dark:text-slate-100">
              <div className="px-3">progress</div>
              <div className="flex flex-col p-6">
                <label>
                  <span className="text-purple-700 dark:text-purple-400 text-xl font-semibold">
                    18
                  </span>
                  <span className="text-slate-400 dark:text-slate-100 text-sm font-semibold">
                    {" "}
                    / 30
                  </span>
                </label>
                <label className="text-[12px] font-semibold">
                  Tasks completed this month asdf asdf asf
                </label>
                <label className="text-purple-700 dark:text-purple-400 hover:underline text-sm font-semibold">
                  show details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTask;
