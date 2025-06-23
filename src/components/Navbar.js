import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link to="/Home" className="homepage-link"><h1>ZapQuiz</h1></Link>
        </div>
        <input type="checkbox" name="hamburger" id="hamburger" />
        <label htmlFor="hamburger">☰</label>
        <div className="navigation">
          <NavLink to="/Home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/Quiz" className="nav-link">
            Start Quiz
          </NavLink>
          <NavLink to="/Leaderboard" className="nav-link">
            Leaderboard
          </NavLink>
          <NavLink to="/About" className="nav-link">
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
