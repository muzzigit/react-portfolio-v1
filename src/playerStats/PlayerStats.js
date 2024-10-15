import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>
        MUZZI KHAN LEVEL <span className="levelNumber">75</span>
      </h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Software Developer 🧑🏽‍💻</h2>
    </div>
  );
};

export default PlayerStats;
