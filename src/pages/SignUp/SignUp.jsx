import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./SignUp.css";
import signupimg from "../../images/signup.svg";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="signupdiv">
        <div className="signupimgdiv">
          <img className="signupimg" src={signupimg} alt="signupimg" />
        </div>
        <div className="signupform">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter Your Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <br />

            <input
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <br />

            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <Link to={"/profile1"}>
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
