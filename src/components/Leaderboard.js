import React, { useContext, useState, useMemo } from "react";
import { FormContext } from "../context/FormContext";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const { scoreHistory, setScoreHistory } = useContext(FormContext);
  const [sortKey, setSortKey] = useState("score");

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sortedData = useMemo(() => {
    return [...scoreHistory].sort((a, b) => {
      if (sortKey === "score") return b.score - a.score;
      if (sortKey === "time") return a.totalTime - b.totalTime;
      return 0;
    });
  }, [scoreHistory, sortKey]);

  const handleClearLeaderboard = () => {
    if (window.confirm("Are you sure you want to clear the leaderboard?")) {
      setScoreHistory([]);
      localStorage.removeItem("quizScoreHistory");
    }
  };

  return (
    <div className="leaderboard-page">
      <h1>🏅 Leaderboard</h1>

      <div className="controls">
        <label className="sort-txt">Sort By: </label>
        <select
          className="sort-option"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="score">Score</option>
          <option value="time">Time Taken</option>
        </select>

        <button className="clear-btn" onClick={handleClearLeaderboard}>
          🗑️ Clear Leaderboard
        </button>
      </div>

      {sortedData.length === 0 ? (
        <div className="no-data-message-wrapper">
          <p className="errMsg">📊 No attempts recorded yet.</p>{" "}
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Score</th>
                <th>Time Taken (s)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((entry, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{entry.name || "Anonymous"}</td>
                  <td>{entry.category}</td>
                  <td>{entry.difficulty}</td>
                  <td>{entry.score}</td>
                  <td>{entry.totalTime || "N/A"}</td>
                  <td>{formatDate(entry.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
