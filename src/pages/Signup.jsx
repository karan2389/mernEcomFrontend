import React, { useState } from "react";
import  "./signup.scss";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/category/Header.png";
import { register } from "../redux/authSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://istore-api-2s0m.onrender.com/auth/register", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({username, email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(register(data));
        setRedirect(true);
      } else {
        alert("signup failed");
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
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <div className="signUpLeftSide">
          <img src={img} alt="" className="leftImg" />
        </div>
        <div className="signUpRightSide">
          <h2 className="title">Sign Up</h2>
          <form onSubmit={handleSignup} className="signUpForm">
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submitBtn">Sign Up</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          {error && (
            <div className="errorMessage">
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
