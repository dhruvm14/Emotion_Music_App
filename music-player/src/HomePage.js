import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import {bgs} from "./songs"
const linkstyle = {
  textDecoration: "none",
};



function Login() {
  var x = Math.floor(Math.random() * bgs.length);
  const styles = {
    backgroundImage:`url(${bgs[x]})`,
  };
  return (
    <div className="login" style={styles}>
      <img
        className="login-logo"
        src="https://i.imgur.com/VjcL8Wz.png"
        alt="App Logo"
      />
      <h1 className="home">Music App</h1>
      <div className="btns">
        <Link to="/login" style={linkstyle}>
          <button className="loginb">Login</button>
        </Link>
        <Link to="/register" style={linkstyle}>
          <button className="registerb">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
