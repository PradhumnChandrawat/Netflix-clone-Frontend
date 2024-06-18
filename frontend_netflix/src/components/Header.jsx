import React from "react";
import "./Header.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import { clearUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      // console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(clearUser()); // Clears user from Redux and localStorage
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <>
      <div className="header-container">
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
        />
        {user && (
          <div className="user-controls">
            <IoIosArrowDropdown size="24px" color="white" />
            <h1 className="user-name">{user.fullName}</h1>
            <div>
              <button onClick={logoutHandler} className="logout-button">
                Logout
              </button>
              <button onClick={toggleHandler} className="toggle-button">
                {toggle ? "Home" : "Search Movies"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
