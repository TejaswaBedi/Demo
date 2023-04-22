import React from "react";
import profilepic from "../../images/avatar.jpg";
import "./Profilebar.css";

const Profilebar = () => {
  return (
    <div>
      <div className="username">
        <img className="dp" src={profilepic} alt="" />
        <div>
          <h1>
            <span>Name:</span>Student name
          </h1>
          <h1>
            <span>Branch:</span>CSE - DS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profilebar;
