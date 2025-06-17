import React from "react";
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
          <button>Home</button>
          <button>Start Quiz</button>
          <button>Scores</button>
          <button>About</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
