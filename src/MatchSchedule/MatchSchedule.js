import React from "react";
import "./MatchSchedule.css";

class MatchSchedule extends React.Component {
  constructor(props) {
    super(props);
  }
 // czy da sie wszystko wrzucić do głównej?
 //najpierw sie wykonuje jeden onclick, drugi nie ,czy da sie zmienic
  
  render() {
    const { handleClick, onGameHandleClick, games, onRouteChange } = this.props;
    return (
      <div>
        <div id="match-details-curtain">
          <div id="match-details-container">
            <div id="title">KICKOFF SCHEDULE</div>
            <div id="schedule-container">
              <ul className="scheduled-list">
                {games.map((item,i)=>{
                    return (<li key={i} 
                        id={`proposedMatch${i}`}
                        onClick={(event) =>{onGameHandleClick(event); onRouteChange('Scoreboard')}}
                         >
                        {`${item.homeTeam.name} vs ${item.awayTeam.name}`}</li>)
                })}
              </ul>
            </div>
            <hr id="bottom-devider" />
            <div id="close-details" />
            <button
              id="trigger"
              type="button"
              className="button1"
              onClick={() => handleClick()}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSchedule;
