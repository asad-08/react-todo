import React, { useState } from "react";
import "./Content.css";
import { getCurrentMode, setCurrentMode } from "../../store/mode/modeSlice";
import { useSelector, useDispatch } from "react-redux";

function Content() {
  const currentMode = useSelector(getCurrentMode);

  return <div className="content">Content</div>;
}

export default Content;
