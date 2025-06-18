import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter(
  [
    {
      path: "/",
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
  ],
  {
    basename: "/ZapQuize",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
