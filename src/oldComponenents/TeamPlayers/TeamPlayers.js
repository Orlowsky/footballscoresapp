import React from "react";
import "./TeamPlayers.css";

const TeamPlayers = () => {
  return (
    <div className="containerTeamPlayers">
        <div className="labelPlayers">
      <label name="teamPlayers">TeamPlayers</label>
      </div>
      <div className="ContainerBothTeam">
        <div className="firstTeamPlayers">
        <div className='list-of-players' id='listplayers1' >
        <li>Sadio Mane</li>
        <li>Mohammad Salah</li>
        <li>Trent Alexander-Arnold</li>
        <li>Andrew Robertson</li>
        <li></li>
        </div>
        </div>

        <div className="secondTeamPlayers">
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

export default TeamPlayers;
