import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({ setLogin }) => {
  const { url ,setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    number: "",
    password: "",
  });

  const onChnageHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setLogin(false)
    }
    else{
      alert(response.data.message)
    }
  };

  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login_form">
      <form onSubmit={onLogin} className="login_container">
        <div className="login_tittle">
          <h2>{currentState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login_inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChnageHandler}
              value={data.name}
              placeholder="enter your name"
              required
            />
          )}
          <input
            type="text"
            name="number"
            onChange={onChnageHandler}
            value={data.number}
            placeholder="enter your number"
            required
          />

          <input
            type="password"
            name="password"
            onChange={onChnageHandler}
            value={data.password}
            placeholder="enter password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login_condition">
          <input type="checkbox" required />
          <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
