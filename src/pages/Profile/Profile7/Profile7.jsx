import React from "react";
import "./Profile7.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
const Profile7 = () => {
  return (
    <div>
      <Profilecomp step={"Step - 7"} />
      <hr style={{ marginTop: "10px" }} />
      <Profilebar />
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />

      <center>
        <h1>Problem Solving</h1>
      </center>
      <div className="questions">
        <div className="platform">
          <span>Leetcode</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "170px" }}
          />
        </div>
        <div className="platform">
          <span>GFG</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "240px" }}
          />
        </div>
        <div className="platform">
          <span>HackerRank</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "145px" }}
          />
        </div>
        <div className="platform">
          <span>CodeChef</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "170px", marginRight: "100px" }}
          />
          <StarRating />
        </div>
        <div className="platform">
          <span>CodeForces</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "147px", marginRight: "100px" }}
          />
          <StarRating />
        </div>
        <div className="platform">
          <span>InterviewBit</span>
          <input
            type="text"
            placeholder="No. of questions solved"
            style={{ marginLeft: "145px", marginBottom: "20px" }}
          />
        </div>
      </div>
      <div className="button-class">
        <button type="submit" style={{ width: "15%" }}>
          Add More
        </button>
        <Link to={"/Profile6"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile8"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile7;
