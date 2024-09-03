import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import WelcomePage from "./welcome/WelcomePage";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleFinish = () => {
    setShowWelcome(false);
  };

  return (
    <Router>
      {showWelcome ? (
        <WelcomePage onFinish={handleFinish} />
      ) : (
        <>
          <Nav />
          <Background />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <PlayerStats />
        </>
      )}
    </Router>
  );
};

export default App;
