import React from "react";

const Profilecomp = (props) => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Space Grostik" }}>
      <h1>
        Complete Your Profile : <span>{props.step}</span>
      </h1>
    </div>
  );
};

export default Profilecomp;
