import React from "react";
import "./Score.css";

const Score = () => {
  return (
    <div className="containerMatchTimerAndScore">
      <div className="containerMatchTimer">
        <output name="timeInGame" style={{}}>
          10:01
        </output>
      </div>
      <div className="containerScore">
        <output className="firstScore">{0}</output>
        <output className="secondScore">{1}</output>
      </div>
    </div>
  );
};

export default Score;
