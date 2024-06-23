import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token"),
          },
        }
      );
      setIsLoggedIn(true);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("IsLoggedIn", "1");
      return {
        status: 200,
        msg: "Successfully logged in",
      };
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
      }
      return {
        status: 404,
        msg: err.response?.data.msg,
      };
    }
  };

  useEffect(() => {
    const isUser = localStorage.getItem("IsloggedIn");
    const token = localStorage.getItem("token");

    if (isUser === "1" && token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const logoutHandler = async () => {
    try {
       await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/user/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token"),
          },
        }
      );
      localStorage.removeItem("IsLoggedIn");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
      return 
      // return { msg: data.msg, status: data.status };
      // return;
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("IsLoggedIn");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        return navigate("/");
      }
      // return;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
