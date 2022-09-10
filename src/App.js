import { AirplaneTicket } from "@mui/icons-material";
import "./App.css";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import { getCurrentMode } from "./store/mode/modeSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import MyTask from "./components/mytask/MyTask";
import Calendar from "./components/calendar/Calendar";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const currentMode = useSelector(getCurrentMode);
  return (
    <div className={`${currentMode && "dark"} " todo-app"`}>
      {/* <Login /> */}
      {/* <Home /> */}

      <Router>
        <Header></Header>
        <div className="main_body flex pl-[60px] md:pl-[200px] dark:bg-slate-800">
          <Sidebar />
          <Routes>
            {/* <Route path="/" element={<Home />} exact /> */}
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/mytask" element={<MyTask />} exact />
            <Route path="/calendar" element={<Calendar />} exact />
            {/* <Route element={<PageNotFound />} /> */}
          </Routes>
        </div>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
