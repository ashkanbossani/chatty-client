import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function Register(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
    </>
  );
}

export default Register;
