import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Ready to zap your brain?</h1>
        <p>
          Test your brainpower with exciting quizzes, track your score, and
          challenge yourself in real-time!
          <br />
          🎮Score high, Beat the timer. Repeat.
        </p>
        <button>⚡ Start Quiz</button>
      </div>
      <div className="right">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACr0lEQVR4nO3XvW/TQBQA8BOfA6A0zb04EyxMbQZ2BpBAjEhQAiJ3bqADC/0AJGaYmPkTKlWCv4UVyocqvsSCqryXovIhylCjh88hCnHsBNvnpHnSKbKT872f7519EWISIxSkwcugvd5sQGUcIF7qGMoAgUq+CD63b1ZgZCGcPGr5PNWZoQwgPE7qGMoIkjqGMoSkiqGMIalhbEBSwdiCJI6xCWljOt4zIs+QpNB9w3biNIF0he0ZoMmMdMUwd2fkZkSMG4QijtMYc+DYU5CxKa2Rh5CFJiYQvQdKS4wbhCKOhxlPxDw/FpCmKp1tucXjiUEG6TNMGVHHOa8mDv05V4fTpOUPVPJ9q145MXIQVPIDunC5VSsWSMMzcy4ak+bC7dVQyXXU8i6q6Zl2DvPObFPD7eC/u2mPv9QLRcaghl1UciEXENSwg1ouezWxPywX74HYhxoWUcmfAWarUZgiJa/3RURBksJzYqjgQth1RFegWz4fYFDDXCQiQ8hKv+uIHsEz40PkR2/p5OFEIFHHIYnMGcRbLplBIR6XWbBmlLxqESLX/CTgftTYIvway/7NgKeJQAbp09226nBqWAjNO7OmvN7ZhzQKU72ugWp6JmqczRocNaX1/b8gSbTmQunYPwgNN0jJb+Y3L8Ny476mPLetQzpffJ+1c4S0XP37vVzlc+G5OVXz2zc5gMg77bFcqAWlwrMSmZuS98waWcsDZL3zbU4KHvIijsqL+3DZ+deAK9Yh/h2FRTFgoJIrpv+Gd0sczAtkp6nK52IjXN6iwC/eLDZV6WKsTllAAgwqWOq7aTwjDvBMMMKspUdx8da28aSdKr8n/HeFUzUL218TGnYZEba1sRqoypdQw6cY2I3Y5WQreNFSXV5DDU9428GPYdLyKyl4xY9Yfjr1W9i/ATl1j3/iIg7jAAAAAElFTkSuQmCC"
          alt="quiz"
        />
      </div>
    </div>
  );
};

export default Hero;
