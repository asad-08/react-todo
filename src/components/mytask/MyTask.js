import React, { useEffect, useState } from "react";
import "./MyTask.css";
import AddIcon from "@mui/icons-material/Add";
import { Search } from "@mui/icons-material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, getAllTasks } from "../../store/task/taskSlice";
import moment from "moment";
import TaskDialog from "./TaskDialog";

function MyTask() {
  const dispatch = useDispatch();
  const events = useSelector(getAllTasks);
  const [todayList, setTodayList] = useState([]);
  const [tomorrowList, setTomorrowList] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [isClickedTask, setIsClickedTask] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("DD/MM/YYYY HH:mm")
  );
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    setIsClickedTask(true);
  };
  const handleTaskClickClose = (e) => {
    setIsClickedTask(false);
  };
  const clearSelectedTask = (e) => {
    setSelectedTask(null);
  };

  useEffect(() => {
    const tdyList =
      events.length > 0 &&
      events.filter(
        (x) => x.selectedDate == moment(new Date()).format("YYYY-MM-DD")
      );
    const tmrList =
      events.length > 0 &&
      events.filter(
        (x) => x.selectedDate == moment().add(1, "days").format("YYYY-MM-DD")
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
  function handleCheckbox(e, taskid) {
    dispatch(completeTask(taskid));
  }
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
        <button
          className="bg-purple-600 dark:bg-purple-400 p-[8px] px-4 flex items-center gap-1 rounded-full text-white"
          onClick={(e) => handleAdd(e)}
        >
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
                    className={`w-full rounded-lg shadow-md ${
                      x.color == "blue"
                        ? "shadow-blue-200"
                        : x.color == "yellow"
                        ? "shadow-yellow-200"
                        : x.color == "orange"
                        ? "shadow-orange-200"
                        : x.color == "purple"
                        ? "shadow-purple-200"
                        : x.color == "red"
                        ? "shadow-red-200"
                        : "shadow-green-200"
                    }`}
                  >
                    <div className={`flex  overflow-hidden rounded-lg`}>
                      <div
                        className={`z-10 flex flex-1 items-center justify-center flex-col ${
                          x.color == "blue"
                            ? "bg-blue-200"
                            : x.color == "yellow"
                            ? "bg-yellow-200"
                            : x.color == "orange"
                            ? "bg-orange-200"
                            : x.color == "purple"
                            ? "bg-purple-200"
                            : x.color == "red"
                            ? "bg-red-200"
                            : "bg-green-200"
                        } ${
                          x.color == "blue"
                            ? "text-blue-800"
                            : x.color == "yellow"
                            ? "text-yellow-800"
                            : x.color == "orange"
                            ? "text-orange-800"
                            : x.color == "purple"
                            ? "text-purple-800"
                            : x.color == "red"
                            ? "text-red-800"
                            : "text-green-800"
                        } p-[1.6rem]`}
                      >
                        <NotificationsActiveIcon
                          sx={{ height: "14px", width: "14px" }}
                        />
                        <label>
                          {moment(new Date(x.selectedDateTime)).format("HH:mm")}
                        </label>
                      </div>
                      <div
                        className={`flex flex-[4] flex-col px-4 py-4 ${
                          x.color == "blue"
                            ? "bg-blue-100"
                            : x.color == "yellow"
                            ? "bg-yellow-100"
                            : x.color == "orange"
                            ? "bg-orange-100"
                            : x.color == "purple"
                            ? "bg-purple-100"
                            : x.color == "red"
                            ? "bg-red-100"
                            : "bg-green-100"
                        } ${
                          x.color == "blue"
                            ? "text-blue-700"
                            : x.color == "yellow"
                            ? "text-yellow-700"
                            : x.color == "orange"
                            ? "text-orange-700"
                            : x.color == "purple"
                            ? "text-purple-700"
                            : x.color == "red"
                            ? "text-red-700"
                            : "text-green-700"
                        }`}
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
                  <div
                    key={ind}
                    className={`w-full rounded-lg shadow-md ${
                      x.color == "blue"
                        ? "shadow-blue-200"
                        : x.color == "yellow"
                        ? "shadow-yellow-200"
                        : x.color == "orange"
                        ? "shadow-orange-200"
                        : x.color == "purple"
                        ? "shadow-purple-200"
                        : x.color == "red"
                        ? "shadow-red-200"
                        : "shadow-green-200"
                    }`}
                  >
                    <div className={`flex  overflow-hidden rounded-lg`}>
                      <div
                        className={`z-10 flex flex-1 items-center justify-center flex-col ${
                          x.color == "blue"
                            ? "bg-blue-200"
                            : x.color == "yellow"
                            ? "bg-yellow-200"
                            : x.color == "orange"
                            ? "bg-orange-200"
                            : x.color == "purple"
                            ? "bg-purple-200"
                            : x.color == "red"
                            ? "bg-red-200"
                            : "bg-green-200"
                        } ${
                          x.color == "blue"
                            ? "text-blue-800"
                            : x.color == "yellow"
                            ? "text-yellow-800"
                            : x.color == "orange"
                            ? "text-orange-800"
                            : x.color == "purple"
                            ? "text-purple-800"
                            : x.color == "red"
                            ? "text-red-800"
                            : "text-green-800"
                        } p-[1.6rem]`}
                      >
                        <NotificationsActiveIcon
                          sx={{ height: "14px", width: "14px" }}
                        />
                        <label>
                          {moment(new Date(x.selectedDateTime)).format("HH:mm")}
                        </label>
                      </div>
                      <div
                        className={`flex flex-[4] flex-col px-4 py-4 ${
                          x.color == "blue"
                            ? "bg-blue-100"
                            : x.color == "yellow"
                            ? "bg-yellow-100"
                            : x.color == "orange"
                            ? "bg-orange-100"
                            : x.color == "purple"
                            ? "bg-purple-100"
                            : x.color == "red"
                            ? "bg-red-100"
                            : "bg-green-100"
                        } ${
                          x.color == "blue"
                            ? "text-blue-700"
                            : x.color == "yellow"
                            ? "text-yellow-700"
                            : x.color == "orange"
                            ? "text-orange-700"
                            : x.color == "purple"
                            ? "text-purple-700"
                            : x.color == "red"
                            ? "text-red-700"
                            : "text-green-700"
                        }`}
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
            {events && events.length > 0 ? (
              events.map((x, ind) => (
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="w-full flex-[4] flex items-center gap-2">
                    <Checkbox
                      value={x.isCompleted}
                      onClick={(e) => handleCheckbox(e, x.taskid)}
                      disabled={x.isCompleted}
                    />
                    <label className="text-slate-400">#{ind}</label>
                    <label className="text-slate-800 dark:text-slate-50 ml-4 flex items-center gap-4">
                      {x.title}{" "}
                      {x.isCompleted ? (
                        <label className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-600 dark:border-emerald-400 px-2 py-1 rounded-full">
                          Task Completed
                        </label>
                      ) : null}
                    </label>
                    {/* <div className="border border-purple-700 dark:border-purple-400 rounded-full ml-4 flex items-center justify-between px-2 py-1 gap-2">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-purple-700 dark:text-purple-400"></div>
                  <label className="text-purple-700 dark:text-purple-400 text-[12px]">
                    Marketing
                  </label>
                </div> */}
                  </div>
                  <div className="flex-1 w-full px-4 flex items-center justify-end gap-2">
                    <label className="text-slate-700 dark:text-slate-50">
                      {moment(new Date(x.selectedDateTime)).format("DD-MMM")}
                    </label>

                    {moment(new Date(x.selectedDateTime)).format("YYYY-MM-DD") <
                    moment(new Date()).format("YYYY-MM-DD") ? (
                      <label className="text-red-700 bg-red-100 rounded-full px-2 py-1 text-[10px] font-semibold">
                        Overdue
                      </label>
                    ) : moment(new Date(x.selectedDateTime)).format(
                        "YYYY-MM-DD"
                      ) == moment(new Date()).format("YYYY-MM-DD") ? (
                      <label className="text-blue-700 bg-blue-100 rounded-full px-2 py-1 text-[10px] font-semibold">
                        Running
                      </label>
                    ) : (
                      <label className="text-green-700 bg-green-100 rounded-full px-2 py-1 text-[10px] font-semibold">
                        On the way
                      </label>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <label className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
                You have no Task to do.
              </label>
            )}
          </div>
          <div className="w-full flex gap-4 mt-6">
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center text-slate-700 dark:text-slate-100">
              <div className="px-3">
                <div
                  className="radial-progress text-purple-600 dark:text-purple-400 font-semibold text-[12px]"
                  style={{
                    "--value":
                      events &&
                      events.length > 0 &&
                      events.filter((x) => x.isCompleted == true).length > 0
                        ? (parseFloat(
                            events.filter((x) => x.isCompleted == true).length
                          ).toFixed(2) *
                            100) /
                          parseFloat(events.length).toFixed(2)
                        : 0,
                  }}
                >
                  {events &&
                  events.length > 0 &&
                  events.filter((x) => x.isCompleted == true).length > 0
                    ? (
                        parseFloat(
                          parseFloat(
                            events.filter((x) => x.isCompleted == true).length
                          ).toFixed(2) * 100
                        ) / parseFloat(events.length).toFixed(2)
                      ).toFixed(2)
                    : 0}{" "}
                  %
                </div>
              </div>
              <div className="flex flex-col p-6">
                <label>
                  <span className="text-purple-700 dark:text-purple-400 text-xl font-semibold">
                    {events &&
                    events.length > 0 &&
                    events.filter((x) => x.isCompleted == true).length > 0
                      ? events.filter((x) => x.isCompleted == true).length
                      : 0}
                  </span>
                  <span className="text-slate-400 dark:text-slate-100 text-sm font-semibold">
                    {" "}
                    / {events && events.length}
                  </span>
                </label>
                <label className="text-[12px] font-semibold">
                  Tasks completed percentage.
                </label>
                <label className="text-purple-700 dark:text-purple-400 hover:underline text-sm font-semibold">
                  show details
                </label>
              </div>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center text-slate-700 dark:text-slate-100">
              <div className="px-3">
                <div
                  className="radial-progress text-red-600 dark:text-red-400 font-semibold text-[12px]"
                  style={{
                    "--value":
                      events &&
                      events.length > 0 &&
                      events.filter(
                        (x) =>
                          x.isCompleted == "false" &&
                          x.selectedDate <
                            moment(new Date()).format("YYYY-MM-DD")
                      ).length > 0
                        ? (parseFloat(
                            events.filter(
                              (x) =>
                                x.isCompleted == "false" &&
                                x.selectedDate <
                                  moment(new Date()).format("YYYY-MM-DD")
                            ).length
                          ).toFixed(2) *
                            100) /
                          parseFloat(events.length).toFixed(2)
                        : 0,
                  }}
                >
                  {events &&
                  events.length > 0 &&
                  events.filter(
                    (x) =>
                      x.isCompleted == "false" &&
                      x.selectedDate < moment(new Date()).format("YYYY-MM-DD")
                  ).length > 0
                    ? (
                        parseFloat(
                          parseFloat(
                            events.filter(
                              (x) =>
                                x.isCompleted == "false" &&
                                x.selectedDate <
                                  moment(new Date()).format("YYYY-MM-DD")
                            ).length
                          ).toFixed(2) * 100
                        ) / parseFloat(events.length).toFixed(2)
                      ).toFixed(2)
                    : 0}{" "}
                  %
                </div>
              </div>
              <div className="flex flex-col p-6">
                <label>
                  <span className="text-red-700 dark:text-red-400 text-xl font-semibold">
                    {events &&
                    events.length > 0 &&
                    events.filter(
                      (x) =>
                        x.isCompleted == "false" &&
                        x.selectedDate < moment(new Date()).format("YYYY-MM-DD")
                    ).length > 0
                      ? events.filter(
                          (x) =>
                            x.isCompleted == "false" &&
                            x.selectedDate <
                              moment(new Date()).format("YYYY-MM-DD")
                        ).length
                      : 0}
                  </span>
                  <span className="text-slate-400 dark:text-slate-100 text-sm font-semibold">
                    {" "}
                    / {events && events.length}
                  </span>
                </label>
                <label className="text-[12px] font-semibold">
                  Tasks not completed on date or overdue percentage.
                </label>
                <label className="text-red-700 dark:text-red-400 hover:underline text-sm font-semibold">
                  show details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isClickedTask ? (
        <TaskDialog
          handleTaskClickClose={handleTaskClickClose}
          isOpen={isClickedTask}
          selectedDate={selectedDate}
          setIsClickedTask={setIsClickedTask}
          isAdd={isAdd}
          selectedTask={selectedTask}
          clearSelectedTask={clearSelectedTask}
          total={events && events.length}
        />
      ) : null}
    </div>
  );
}

export default MyTask;
