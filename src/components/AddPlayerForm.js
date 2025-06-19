import React from "react";
import "../styles/AddPlayerForm.css";
import { Link } from "react-router-dom";

const AddPlayerForm = () => {
  return (
    <>
      <div className="page">
        <div className="form">
          <form action="">
            <input type="text" placeholder="Name" />
            <select name="catagory" id="catagory">
              <option value="--">--</option>
              <option value="c">C</option>
              <option value="python">Python</option>
              <option value="java">java</option>
            </select>
            <select name="difficulty" id="difficulty">
              <option value="--">--</option>
              <option value="easy">Easy</option>
              <option value="medium">medium</option>
              <option value="Hard">Hard</option>
            </select>
            {/* <button type="button">Start Game</button> */}
            <Link to="/start" className="submit">
              Start Game
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPlayerForm;
