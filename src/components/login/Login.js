import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/login/loginSlice";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("admin");
  const [userPassword, setUserPassword] = useState("1234");

  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login({ userName: userName, userPassword: userPassword }));
  }

  return (
    <div className="login relative overflow-hidden">
      <div className="w-full md:w-[500px]  p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="login_form bg-white rounded-2xl backdrop-filter backdrop-blur-lg px-4 py-16">
          <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300 text-center">
            Login
          </h2>
          <div className="flex flex-col text-white border-b-2 border-b-white">
            <label>Username</label>
            <div className="w-full flex items-center gap-4">
              <i className="fa-regular fa-user"></i>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Username"
                className="outline-none w-full bg-transparent py-2"
              />
            </div>
          </div>
          <div className="flex flex-col text-white border-b-2 border-b-white">
            <label className="mt-2">Password</label>
            <div className="w-full flex items-center gap-4">
              <i className="fa fa-key text-white "></i>
              <input
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
                className="outline-none w-full bg-transparent  py-2"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="text-white underline cursor-pointer">
              Forgot Password?
            </label>
          </div>
          <div className="my-6 flex gap-2 items-center">
            <button
              type="button"
              className="bg-white w-full py-2 rounded-md font-semibold hover:bg-slate-100"
              onClick={(e) => handleLogin(e)}
            >
              <i class="fa fa-right-to-bracket"></i>
              &nbsp; Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
