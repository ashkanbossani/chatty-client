import React, { useState, useEffect } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoutes";

function Register() {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if(handleValidation()){
     const { username, email, password, confirmPassword} = values;
     const data = axios.post(registerRoute, {
        username,email,password,confirmPassword
        })
     }
   };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error("passwords do not match", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username is too short, should be greater then 3 characters",
        toastOptions
      );
      return false;
    } else if (password.length < 6) {
      toast.error(
        "Password is too short, should be greater then 6 characters",
        toastOptions
      );
      return false;
    } else if (email==="") {
        toast.error("Email is required", toastOptions);
        return false;
    } else if (!email.includes("@")) {
        toast.error("Email is not valid", toastOptions);
        return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="register">
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="register-form__brand">
            <img className="register-form__img" src={Logo} alt="logo" />
            <h1 className="register-form__title">Chatty</h1>
          </div>
          <input
            className="register-form__input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="register-form__input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="register-form__input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="register-form__input"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button className="register-form__button" type="submit">
            Create User
          </button>
          <span className="register-form__button--text">
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
