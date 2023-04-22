import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import "./Profile2.css";
import Footer from "../../../components/Footer/Footer";
const Profile2 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 2"} />
      <Profilebar />
      <div className="maindiv">
        <div className="details1">
          <div className="about-section">
            <span>About :</span>
            <br />
            <textarea
              placeholder="Enter about yourself in not more than 200 words."
              rows="100"
              cols="105"
            />
          </div>
          <br />
          <div className="education">
            <span>Education:</span>
            <br />
            <br />
            <div className="class-ten-twelve">
              <h2>X . Standard % -</h2>
              <input type="number" />
              <div>
                <h4>Upload supporting document.</h4>
                <input type="file" />
              </div>
            </div>
            <div className="class-ten-twelve">
              <h2>XII Standard % -</h2>
              <input type="number" />
              <div>
                <h4>Upload supporting document.</h4>
                <input type="file" />
              </div>
            </div>
          </div>
          <Link to={"/profile3"}>
            <button className="bttn" type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile2;
