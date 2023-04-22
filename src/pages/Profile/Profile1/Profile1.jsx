import React, { useState } from "react";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import defaultpic from "../../../images/avatar.jpg";
import { Link } from "react-router-dom";
import "./Profile1.css";
import Footer from "../../../components/Footer/Footer";
const Profile1 = () => {
  const [user, setUser] = useState({
    mypic: "",
    name: "",
    dob: "",
    branch: "",
    section: "",
    gpa: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { mypic, name, dob, branch, section, gpa } = user;
    const res = await fetch("http://localhost:5000/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid");
      console.log("Invalid");
    } else {
      window.alert("Success");
      console.log("Success");
    }
  };

  return (
    <div className="Home">
      <Profilecomp step={"Step - 1"} />
      <div className="prof1">
        <div method="POST" className="avatar-side">
          <img className="avatar" src={defaultpic} alt="" />
          <input
            type="file"
            name="mypic"
            value={user.mypic}
            onChange={handleInputs}
          />
        </div>
        <div className="details-side">
          <label>
            <span>Name :</span>
          </label>
          <br />
          <input
            className="name"
            type={"text"}
            placeholder={"Enter your Name"}
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
          <br />
          <br />
          <label>
            <span>DOB :</span>
          </label>
          <br />
          <input
            className="DOB"
            type={"date"}
            name="dob"
            value={user.dob}
            onChange={handleInputs}
          />
          <br />
          <br />

          <label>
            <span>Branch :</span>
          </label>
          <br />
          <select
            className="sel"
            name="branch"
            value={user.branch}
            onChange={handleInputs}
          >
            <option defaultValue={""}></option>
            <option value="cse">CSE</option>
            <option value="cs">CS</option>
            <option value="it">IT</option>
            <option value="ds">CSE-DS</option>
            <option value="ml">CSE-AIML</option>
            <option value="en">EN</option>
            <option value="ece">ECE</option>
            <option value="me">ME</option>
            <option value="elce">ELCE</option>
          </select>
          <br />
          <br />

          <label>
            <span>Section :</span>
          </label>
          <br />
          <select
            className="sel"
            name="section"
            value={user.section}
            onChange={handleInputs}
          >
            <option defaultValue={""}></option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          <br />
          <br />

          <label>
            <span>Current GPA :</span>
          </label>
          <input
            className="gpa"
            type={"number"}
            min={1.0}
            max={10.0}
            step={0.1}
            name="gpa"
            value={user.gpa}
            onChange={handleInputs}
          />
          <br />
          <br />
          <Link to={"/profile2"}>
            <button type="submit">Submit</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile1;
