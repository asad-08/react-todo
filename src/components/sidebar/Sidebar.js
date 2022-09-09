import React, { useState } from "react";
import "./Sidebar.css";
import { getCurrentMode } from "../../store/mode/modeSlice";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import TaskIcon from "@mui/icons-material/Task";
function Sidebar() {
  const avatarStyle = {
    backgroundColor: "rgb(147 51 234)",
    fontSize: "1.2rem",
    height: "56px",
    width: "56px",
  };
  return (
    <div className="sidebar mt-[60px] px-4 py-2 w-[60px] min-w-[60px] md:w-[250px] md:min-w-[250px] bg-slate-50 dark:bg-slate-700">
      <div className="flex flex-col">
        <div className="hidden md:flex flex-col pt-12">
          <Avatar sx={avatarStyle}>A</Avatar>
          <label className="text-slate-600 dark:text-white text-lg font-semibold">
            Asadullah Sarker
          </label>
          <label className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
            asad@gmail.com
          </label>
        </div>
        <hr className="mt-6 mr-16" />
        <ul className="pt-48 md:pt-12 flex flex-col gap-6 text-slate-700 dark:text-white">
          <li className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <DashboardIcon sx={{ height: "20px", width: "20px" }} />
            <span className="hidden md:block">Dashboard</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <TaskIcon sx={{ height: "20px", width: "20px" }} />
            <span className="hidden md:block">My Task</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <CalendarMonthIcon sx={{ height: "20px", width: "20px" }} />
            <span className="hidden md:block">Calendar</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <GroupsIcon sx={{ height: "20px", width: "20px" }} />
            <span className="hidden md:block">Team</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <ConnectWithoutContactIcon sx={{ height: "20px", width: "20px" }} />
            <span className="hidden md:block">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
