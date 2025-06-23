import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddPlayerForm.css";
import { FormContext } from "../context/FormContext";

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("--");
  const [difficulty, setDifficulty] = useState("--");

  const { setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  // Validation logic
  const isFormValid =
    name.trim() !== "" && category !== "--" && difficulty !== "--";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const data = { name, category, difficulty };
    setFormData(data);

    navigate("/Quiz/Start", {
      state: {
        topic: category,
        difficulty: difficulty,
      },
    });
  };

  return (
    <div className="page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="--">Category</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Programming">Programming</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="--">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <button
            type="submit"
            className="submit"
            disabled={!isFormValid}
            style={{
              opacity: isFormValid ? 1 : 0.7,
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerForm;
