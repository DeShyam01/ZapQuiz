import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizEngine from "./components/QuizEngine";
import Score from "./components/Score";
import Leaderboard from "./components/Leaderboard";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/Home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Quiz",
      element: (
        <>
          <Navbar />
          <Quiz />
        </>
      ),
    },
    {
      path: "/Quiz/Start",
      element: <QuizEngine />,
    },
    {
      path: "/Score",
      element: (
        <>
          <Navbar />
          <Score />
        </>
      ),
    },
    {
      path: "/Leaderboard",
      element: (
        <>
          <Navbar />
          <Leaderboard />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <AboutPage />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/ZapQuiz",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
