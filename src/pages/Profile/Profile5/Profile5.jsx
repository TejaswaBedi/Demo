import React from "react";
import "./Profile5.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
const Profile5 = () => {
  return (
    <div>
      <Profilecomp step={"Step - 5"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />

      <div className="domain">
        <span>Domain Name</span>
        <div className="domain-content">
          <input style={{ backgroundColor: "inherit", marginTop: "10px" }} />
          <input type="file" />
        </div>
      </div>

      <div className="button-class">
        <button type="submit" style={{ width: "15%" }}>
          Add More
        </button>
        <Link to={"/Profile4"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile6"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile5;
