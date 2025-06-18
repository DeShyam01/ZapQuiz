import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div class="navbar">
      <nav>
        <div class="logo">
          <h1>ZapQuiz</h1>
        </div>
        <input type="checkbox" name="hamburger" id="hamburger" />
        <label for="hamburger">☰</label>
        <div class="navigation">
          <Link to="/" className="nav-link">Home</Link >
          <Link to="/Quiz" className="nav-link">Start Quiz</Link >
          <Link to="/score" className="nav-link">Scores</Link >
          <Link to="/about" className="nav-link">About</Link >
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
