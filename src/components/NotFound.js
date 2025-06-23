import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>Oops! Page Not Found</h1>
      <p>Looks like you're lost in the quiz universe.</p>
      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
