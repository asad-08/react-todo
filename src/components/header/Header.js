import React, { useState } from "react";
import "./Header.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { getCurrentMode, setCurrentMode } from "../../store/mode/modeSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const currentMode = useSelector(getCurrentMode);
  const dispatch = useDispatch();
  function handleMode(e) {
    e.preventDefault();
    dispatch(setCurrentMode(!currentMode));
  }
  return (
    <div className="fixed z-50 w-full px-4 top-0 left-0   h-[60px] bg-slate-50 dark:bg-slate-800 dark:border-b-2 dark:border-b-slate-300">
      <nav className="flex items-center justify-between px-4">
        <label className="text-3xl font-bold  text-black dark:text-white">
          .MyTodo
        </label>
        <ul className="flex items-center justify-between gap-4 font-semibold text-black dark:text-white">
          <Link to="/dashboard">
            <li className="flex items-center gap-1 cursor-pointer py-4 hover:text-slate-600 dark:hover:text-slate-300">
              <DashboardIcon sx={{ height: "15px", width: "15px" }} />
              <span className="hidden text-sm md:block">Dashboard</span>
            </li>
          </Link>
          <Link to="/settings">
            <li className="flex items-center gap-1 cursor-pointer py-4 hover:text-slate-600 dark:hover:text-slate-300">
              <SettingsIcon sx={{ height: "15px", width: "15px" }} />
              <span className="hidden text-sm md:block">Settings</span>
            </li>
          </Link>
          <Link to="/notification">
            <li className="flex items-center gap-1 cursor-pointer py-4 hover:text-slate-600 dark:hover:text-slate-300">
              <CircleNotificationsIcon sx={{ height: "15px", width: "15px" }} />
              <span className="hidden text-sm md:block">Notifications</span>
            </li>
          </Link>
          <li
            className="flex items-center gap-1 cursor-pointer py-4 hover:text-slate-600 dark:hover:text-slate-300"
            onClick={(e) => handleMode(e)}
          >
            {currentMode ? (
              <WbSunnyIcon sx={{ height: "15px", width: "15px" }} />
            ) : (
              <DarkModeIcon sx={{ height: "15px", width: "15px" }} />
            )}
          </li>
        </ul>
        <button
          type="button"
          className="w-[30px] h-[30px] flex items-center justify-center gap-1 bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 p-[8px] px-4 rounded-full text-white"
        >
          <LogoutIcon fontSize="15px" />
          {/* <span className="hidden text-sm font-semibold md:block">
              Sign Out
            </span> */}
        </button>
      </nav>
    </div>
  );
}

export default Header;
