import React, { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import allQuestions from "../data/Questions";
import { FormContext } from "../context/FormContext";
import "../styles/QuizEngine.css";

function QuizEngine() {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic, difficulty } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [timePerQuestion, setTimePerQuestion] = useState({});
  const [quizEnded, setQuizEnded] = useState(false);

  const { saveNewScore } = useContext(FormContext);

  useEffect(() => {
    const topicData = allQuestions.find((t) => t.topic === topic);
    const levelQuestions = topicData?.levels?.[difficulty] || [];
    setQuestions(levelQuestions);
  }, [topic, difficulty]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentIndex]);

  useEffect(() => {
    if (quizEnded) {
      try {
        const totalTime = Object.values(timePerQuestion).reduce((a, b) => a + b, 0);
        saveNewScore(score, totalTime);
        navigate("/score", {
          state: {
            score,
            totalQuestions,
            timePerQuestion,
            questions,
            selectedAnswers,
          },
        });
      } catch (err) {
        console.error("Navigation error:", err);
      }
    }
  }, [quizEnded, score, timePerQuestion, selectedAnswers, navigate, saveNewScore]);

  const handleOptionClick = (option) => {
    if (selectedAnswers[currentIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setTimePerQuestion((prev) => ({
      ...prev,
      [currentIndex]: 15 - timer,
    }));
  };

  const handleNext = useCallback(() => {
    if (timePerQuestion[currentIndex] === undefined) {
      setTimePerQuestion((prev) => ({
        ...prev,
        [currentIndex]: 15,
      }));
    }

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimer(15);
    } else {
      setQuizEnded(true);
    }
  }, [currentIndex, timePerQuestion]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setTimer(15);
    }
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  if (!topic || !difficulty || questions.length === 0) {
    return <p className="loading">Loading questions...</p>;
  }

  return (
    <div className="bg">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>
            Question {currentIndex + 1} of {totalQuestions}
          </h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="timer">⏱️ {timer}s left</p>
        </div>

        <p className="question">{currentQuestion.question}</p>

        <div className="options">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentIndex] === option;
            const isCorrect = option === currentQuestion.answer;
            let className = "";

            if (isSelected) {
              className = isCorrect ? "selected correct" : "selected wrong";
            }

            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedAnswers[currentIndex]}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="buttons">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            ⬅️ Previous
          </button>
          <button onClick={handleNext}>
            {currentIndex === totalQuestions - 1 ? "Finish" : "Next ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizEngine;
