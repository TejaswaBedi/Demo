import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";
import loginimg from "../../images/login.svg"

import { Link } from "react-router-dom";

import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // perform login request here using username and password state values
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // perform forgot password request here using email state value
    console.log(`Forgot password request submitted for email: ${email}`);
    setShowForgotPassword(false);
  };

  return (
    <div className="Home">
      <Navbar />

    
    <div className="logindiv">
      <div className="loginform">
        <h1>Login</h1>
        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
            <br />
            <Link className="link" onClick={"/"}>
              Go Back
            </Link>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Link to={"/dummy"}>
              <button type="submit">Login</button>
            </Link>
            <br />

            <Link className="link" onClick={() => setShowForgotPassword(true)}>
              Forgot Password ⚠️
            </Link>
          </form>
        )}
      </div>
      <img className="loginimg" src={loginimg} alt="loginimg"></img>
    </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
