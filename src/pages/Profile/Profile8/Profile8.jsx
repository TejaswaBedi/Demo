import React from "react";
import { Link } from "react-router-dom";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import Profilebar from "../../../components/Profilebar/Profilebar";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import "./Profile8.css";

const Profile8 = () => {
  return (
    <div>
      <Profilecomp step={"Step - 8"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="extra">
        <span>Extra Co-Curricular Acivities</span>
        <input
          type="text"
          style={{ backgroundColor: "inherit", width: "30%" }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ backgroundColor: "inherit", width: "30%" }}
        ></textarea>
      </div>
      <div className="button-class">
        <button type="submit" style={{ width: "15%" }}>
          Add More
        </button>
        <Link to={"/Profile7"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/dummy"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile8;
