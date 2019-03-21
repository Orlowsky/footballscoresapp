import React from "react";
import "./MatchSchedule.css";

class MatchSchedule extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    const { handleClick, onGameHandleClick, games, onRouteChange } = this.props;
    return (
      <div>
        <div id="match-details-curtain">
          <div id="match-details-container">
            <div id="title">KICKOFF SCHEDULE</div>
            <div id="schedule-container">
            <div ></div>
              <ul className="scheduled-list">
                {games.map((item, i) => {
                  return (
                    <li
                      className = 'center-element-list'
                      key={i}
                      id={`proposedMatch${i}`}
                      onClick={event => {
                        onGameHandleClick(event);
                        onRouteChange("Scoreboard");
                      }}
                    >
                      {`${item.homeTeam.name} vs ${item.awayTeam.name}`}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr id="bottom-devider" />
            <div className="btn-group btn-group-toggle btn-block " data-toggle="buttons">
              <label className="btn btn-secondary ">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  onClick={() => handleClick('PL',10)}
                />{" Premier League "}
               
              </label>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  onClick={() => handleClick('CL',4)}
                />{"Champions League"}
               
              </label>
              <label className="btn btn-secondary  ">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                  onClick={() => handleClick('PD',10)}
                />{"Spanish La Liga "}
               
              </label>
              <label className="btn btn-secondary  ">
                <input
                  type="radio"
                  name="options"
                  id="option4"
                  autoComplete="off"
                  onClick={() => handleClick('SA',10)}
                />{" Italian Serie A "}
              
              </label>
            </div>
            <div id="close-details" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSchedule;

{/* <button
              id="trigger"
              type="button"
              className="button1"
              onClick={() => handleClick()}
            /> */}