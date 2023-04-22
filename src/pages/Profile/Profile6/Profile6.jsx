import React from "react";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import "./Profile6.css";
const Profile6 = () => {
  return (
    <div>
      <Profilecomp step={"Step - 6"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <span style={{ marginBottom: "20px", marginLeft: "300px" }}>
        Domain Name
      </span>
      <div className="hackathon">
        <div className="hackathon-content1">
          <input style={{ backgroundColor: "inherit" }} />
          <textarea style={{ backgroundColor: "inherit" }} />
          <input style={{ backgroundColor: "inherit" }} />
        </div>
        <div className="hackathon-content2">
          <input type="file" />
        </div>
      </div>

      <div className="button-class">
        <button type="submit" style={{ width: "15%" }}>
          Add More
        </button>
        <Link to={"/Profile5"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile7"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile6;
