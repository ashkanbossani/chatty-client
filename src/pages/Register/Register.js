import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

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
      <formm onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <img src="" alt="" />
          <h1>Chatty</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>already have an account ? <Link to="/login">Login</Link></span>
      </formm>
    </>
  );
}

export default Register;
