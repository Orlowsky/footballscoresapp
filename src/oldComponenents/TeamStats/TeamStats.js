import React from "react";
import "./TeamStats.css";

const TeamStats = () => {
  return (
    <div className="containerTeamPlayers">
        <div className="labelPlayers">
      <label name="teamPlayers">Match Details</label>
      </div>
      <div className="ContainerBothTeam">
        <div className="firstTeamPlayers">
        <label>First Team Players</label>
        <div className='list-of-players' id='listplayers1' >
        <li>Sadio Mane</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </div>
        </div>
        
        <div className="secondTeamPlayers">
        <label>Second Team Players</label>
        <div className='list-of-players' id="listplayers2">
        <li>Zlatan Ibrahimovic</li>
        <li>Leon Messi</li>
        <li>Michael Jackson</li>
        <li>Michael Jordan</li>
        <li>Tiger Woods</li>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
