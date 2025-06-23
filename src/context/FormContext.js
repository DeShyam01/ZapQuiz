import React, { createContext, useState, useEffect, useCallback } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("quizFormData");
    return saved
      ? JSON.parse(saved)
      : { name: "", category: "--", difficulty: "--" };
  });

  const [scoreHistory, setScoreHistory] = useState(() => {
    const saved = localStorage.getItem("quizScoreHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("quizFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("quizScoreHistory", JSON.stringify(scoreHistory));
  }, [scoreHistory]);

  const saveNewScore = useCallback((score, totalTime) => {
    const newEntry = {
      ...formData,
      score,
      totalTime,
      timestamp: new Date().toISOString(),
    };
    setScoreHistory((prev) => [newEntry, ...prev]);
  }, [formData]);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        scoreHistory,
        setScoreHistory,
        saveNewScore,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
