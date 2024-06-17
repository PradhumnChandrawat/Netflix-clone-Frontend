import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Header from "./Header";
import { API_END_POINT } from "./../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";
// import CircularProgress from "@mui/material/CircularProgress";
import BouncingDotsLoader from "./BouncingDotsLoader";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    // console.log(fullName, email, password);

    if (isLogin) {
      // login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        <Header />
        <div className="fullscreen-banner">
          <img
            className="image-bg"
            src="./assets/netflix-bg.png"
            alt="background image"
          />
        </div>
        <form onSubmit={getInputData} className="form-container">
          <h1 className="form-heading">{isLogin ? "Login" : "Signup"}</h1>
          <div className="inputs">
            {!isLogin && (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Fullname"
                className="form-input"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input"
            />
            <button type="submit" className="submit-button">
              {isLoading ? (
                <BouncingDotsLoader />
              ) : isLogin ? (
                "Login"
              ) : (
                "Signup"
              )}
            </button>
            <p className="switch-mode">
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <span className="switch-mode-link" onClick={loginHandler}>
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
