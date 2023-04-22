import React from "react";
import "./Profile4.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
const Profile4 = () => {
  return (
    <div>
      <Profilecomp step={"Step - 4"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="internship">
        <div className="company-name">
          <span>Company Name</span>
          <input
            style={{
              backgroundColor: "inherit",
              display: "flex",
              flexDirection: "column",
            }}
          />
        </div>
        <div className="company-duration">
          <span>Team Duration</span>
          <input
            style={{
              backgroundColor: "inherit",
              display: "flex",
              flexDirection: "column",
            }}
          />
        </div>
        <div className="company-skills">
          <span>Skills Used</span>
          <input
            style={{
              backgroundColor: "inherit",
              display: "flex",
              flexDirection: "column",
            }}
          />
        </div>
      </div>
      <div className="button-class">
        <button type="submit" style={{ width: "15%" }}>
          Add More
        </button>
        <Link to={"/Profile3"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile5"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile4;
