import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import "../styles/Score.css";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = useContext(FormContext);

  const { score, totalQuestions, timePerQuestion, questions, selectedAnswers } =
    location.state || {};

  if (!location.state) {
    return <p>Error: No quiz data found. Please try again.</p>;
  }

  const totalTime = Object.values(timePerQuestion).reduce((a, b) => a + b, 0);
  const fastestIndex = Object.entries(timePerQuestion).sort(
    (a, b) => a[1] - b[1]
  )[0][0];

  const getMotivation = () => {
    const percent = (score / totalQuestions) * 100;
    if (percent === 100) return "🏆 Perfect Score! You're unstoppable!";
    if (percent >= 80) return "🔥 Quiz Champion!";
    if (percent >= 50) return "💪 Good effort! Try again to beat your score!";
    return "☕ More caffeine, maybe? Give it another shot!";
  };

  return (
    <div className="score-page">
      <div className="score-container">
        <h1>🎉 Quiz Summary</h1>

        <div className="summary">
          <p>
            <strong>Player:</strong> {formData.name || "Anonymous"}
          </p>
          <p>
            <strong>Category:</strong> {formData.category}
          </p>
          <p>
            <strong>Difficulty:</strong> {formData.difficulty}
          </p>
          <p>
            <strong>Correct Answers:</strong> {score} / {totalQuestions}
          </p>
          <p>
            <strong>Total Time:</strong> {totalTime}s
          </p>
          <p>
            <strong>Fastest Answered:</strong> Q{parseInt(fastestIndex) + 1} (
            {timePerQuestion[fastestIndex]}s)
          </p>
        </div>

        <div className="motivation">
          <h3>{getMotivation()}</h3>
        </div>

        <div className="breakdown">
          <h2>⏱️ Time & Accuracy Breakdown</h2>
          <ul>
            {questions.map((q, idx) => (
              <li key={idx}>
                <strong>Q{idx + 1}:</strong> {q.question}
                <br />
                <span>
                  Correct Answer: <b>{q.answer}</b>
                </span>
                <br />
                <span>
                  Your Answer:{" "}
                  <span
                    className={
                      selectedAnswers[idx] === q.answer ? "correct" : "wrong"
                    }
                  >
                    {selectedAnswers[idx] || "Not Answered"}
                  </span>
                </span>
                <br />
                <span>⏱️ Time Taken: {timePerQuestion[idx]}s</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="scorePageButtons">
          <button onClick={() => navigate("/Home")}>🏠 Home</button>
          <button onClick={() => navigate("/Quiz")}>🔁 Play Again</button>
          <button onClick={() => navigate("/Leaderboard")}>🔁 Watch Leaderboard</button>
        </div>
      </div>
    </div>
  );
}

export default Score;
