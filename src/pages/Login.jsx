import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import img from "../assets/online.jpg"; 
import { login } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://istore-api-2s0m.onrender.com/auth/login", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(login(data));
        setRedirect(true);
      } else {
        alert("login failed");
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  if (redirect) {
    return navigate("/");
  }

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeftSide">
          <img src={img} alt="" className="leftImg" />
        </div>
        <div className="loginRightSide">
          <h2 className="title">Login</h2>
          <form onSubmit={handleLogin} className="loginForm">
            <input
              type="email"
              placeholder="Type E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submitBtn">Login</button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </form>
          {error && (
            <div className="errorMessage">
              Wrong credentials! Try again...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
