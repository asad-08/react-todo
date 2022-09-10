import React from "react";

function EventDialog({ handleEventClickClose }) {
  return (
    <div className="z-50 absolute bg-slate-400 w-[300px] top-[50%] left-[50%] px-8 py-8">
      <lable className="cursor-pointer" onClick={() => handleEventClickClose}>
        &times;
      </lable>
      <div>
        <input placeholder="Add new task" />
        <button className="bg-purple-700 dark:bg-purple-400">Add</button>
      </div>
    </div>
  );
}

export default EventDialog;
