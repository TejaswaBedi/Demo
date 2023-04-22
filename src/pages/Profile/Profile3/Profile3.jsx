import React from "react";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import "./Profile3.css";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";

const Profile3 = (props) => {
  return (
    <div>
      <Profilecomp step={"Step - 3"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="skills">
        <div className="tech-skills">
          <span>Technical Skills</span>
          <div className="tech-details">
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
          </div>
          <button type="submit" style={{ width: "20%", marginLeft: "20%" }}>
            Add More
          </button>
        </div>
        <div className="professional-skills">
          <span>Professional Skills</span>
          <div className="prof-details">
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
            <input style={{ backgroundColor: "inherit", width: "55%" }} />
          </div>
          <button type="submit" style={{ width: "20%", marginLeft: "20%" }}>
            Add More
          </button>
        </div>
      </div>
      <Link to={"/Profile4"}>
        <button type="submit" style={{ width: "20%", marginLeft: "41%" }}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Profile3;
