import React from "react";
import "../styles/AboutPage.css";
import memeImg from "../assets/images/meme.png";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>👋 Welcome to the About Page!</h1>

      <section>
        <h2>📱 About the App</h2>
        <p>
          This app is a dynamic and interactive quiz platform built using{" "}
          <strong>React</strong>. It allows users to answer questions based on
          selected categories and difficulties, tracks time per question, and
          displays detailed performance stats.
        </p>
      </section>

      <section>
        <h2>🛠️ Tech Stack</h2>
        <ul>
          <li>
            <strong>React</strong> — Core frontend library
          </li>
          <li>
            <strong>React Router</strong> — Navigation between pages
          </li>
          <li>
            <strong>Context API + localStorage</strong> — State and data
            persistence
          </li>
          <li>
            <strong>Custom CSS</strong> — Styling and responsive layout
          </li>
        </ul>
      </section>

      <section>
        <h2>💡 What I Learned</h2>
        <ul>
          <li>How to structure a multi-page React application.</li>
          <li>Managing component state with hooks and Context API.</li>
          <li>Handling routing and navigation with React Router.</li>
          <li>Implementing timers and user feedback in quizzes.</li>
          <li>
            Saving and retrieving data from <code>localStorage</code>.
          </li>
        </ul>
      </section>

      <section className="fun-section">
        <h2>Every coder can relate 😂</h2>
        <img
          src={memeImg}
          alt="React meme"
          className="meme-img"
        />
        <p>
          <em>When you finally fix a bug after 3 hours...</em>
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
