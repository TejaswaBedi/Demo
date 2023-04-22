import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DataVerseRaah from "../../images/DataVerseRaah.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img className="logo" src={DataVerseRaah} alt="Raah" />
      </div>

      <nav className="item">
        <ul className="ul">

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>

        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
