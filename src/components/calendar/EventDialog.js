import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Add from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTasks } from "../../store/task/taskSlice";

export default function EventDialog({
  handleEventClickClose,
  isOpen,
  selectedDate,
  setIsClickedEvent,
  isAdd,
  clickedEvent,
  clearClickedEvent,
  total,
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(isOpen);
  const handleClose = () => {
    handleEventClickClose();
    clearClickedEvent();
  };
  const [selectedColor, setSelectedColor] = useState("rgb(124 58 237)");
  const [value, setValue] = React.useState(dayjs());

  const [title, setTitle] = useState(
    !isAdd ? clickedEvent && clickedEvent.event._def.title : ""
  );
  const [taskDateTime, setTaskDateTime] = useState(
    !isAdd
      ? clickedEvent && clickedEvent.event._def.extendedProps.selectedDateTime
      : ""
  );
  const [description, setDescription] = useState(
    !isAdd
      ? clickedEvent && clickedEvent.event._def.extendedProps.description
      : ""
  );
  const [label, setLabel] = useState("");

  function handleColorPick(x) {
    setSelectedColor(x);
  }
  const colorList = [
    "rgb(249 115 22)",
    "rgb(234 179 8)",
    "rgb(101 163 13)",
    "rgb(37 99 235)",
    "rgb(124 58 237)",
  ];

  function add() {
    const obj = {
      taskid: total + 1,
      selectedDate: selectedDate,
      title: title,
      selectedDateTime: value.format("DD/MM/YYYY HH:mm"),
      start: value.format("YYYY-MM-DD"),
      end: value.format("YYYY-MM-DD"),
      description: description,
      label: label,
      allDay: true,
      color: selectedColor,
    };
    dispatch(addTasks(obj));
    setIsClickedEvent();
    clearClickedEvent();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="rounded-lg flex flex-col p-8  bg-slate-50 backdrop-filter backdrop-blur-md dark:bg-slate-700 text-slate-800 dark:text-slate-100 w-[90%] md:w-[40%] mx-auto fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-between border-b-slate-400">
            <label className="text-2xl font-semibold">Add Task</label>
            <label
              className="border border-slate-400 px-2 py-1 m-2 cursor-pointer"
              onClick={() => handleClose()}
            >
              &times;
            </label>
          </div>
          <hr />
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task name..."
                className="rounded-lg px-4 py-2 outline-none border-none shadow-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Select Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="DateTimePicker"
                  inputFormat="YYYY-MM-DD HH:mm"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Desctiption"
                rows={5}
                className="rounded-lg px-4 py-2 outline-none border-none shadow-md text-sm"
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-semibold flex gap-4 mb-3">
                Label &nbsp; &nbsp;
                <div
                  style={{ backgroundColor: selectedColor }}
                  className="h-[20px] w-[20px] rounded-[50%]"
                ></div>
                {selectedColor === "rgb(124 58 237)" ? "(Default)" : null}
              </label>
              <div className="flex items-center gap-1">
                {colorList.map((x, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: x }}
                    className="h-[20px] w-[20px] rounded-[50%] cursor-pointer"
                    onClick={() => handleColorPick(x)}
                  ></div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="w-[fit-content] bg-purple-600 rounded-lg text-white py-2 px-6 font-semibold text-sm flex items-center"
              onClick={() => add()}
            >
              <Add sx={{ height: "20px", width: "20px" }} />
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
