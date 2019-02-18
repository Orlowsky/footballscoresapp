import React from "react";
import DateAndTime from "../src/DateAndTime/DateAndTime";
import TeamLogo from "../src/TeamLogo/TeamLogo";
import Score from "../src/Score/Score";
import TeamPlayers from "../src/TeamPlayers/TeamPlayers";
import MatchStatistics from "../src/MatchStatistics/MatchStatistics";
import "./ScoreTable.css";


const ScoreTable = () => {
  return (
    <div>
      <div className="ScoreTable">
      <MatchStatistics />
        <DateAndTime />
        <div className="team-and-score-container">
          <TeamLogo className="first-team"  />

          <Score className="match-score"  />

          <TeamLogo className="second-team" />
        </div>
        <TeamPlayers />
      </div>
    </div>
  );
};

export default ScoreTable;
