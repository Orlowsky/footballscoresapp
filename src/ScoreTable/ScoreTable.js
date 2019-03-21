import React from "react";
import "./ScoreTable.css";



class ScoreTable extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render(){
    const { chosenGame, onRouteChange,findTeamSpecificInfo } = this.props;
  return (
   <div>
     
    <div id="match-details-curtain">
        <div id="match-details-container">
            <div id="title">MATCH STATISTICS</div>
            <div id="teams-container">
                <div className="homecomming-team flexbox-items">
                    <div className="homecomming-team logo"></div>
                    <br />
                    <div className="homecomming-team name">{`${chosenGame.homeTeam.name}`}</div>
                </div>
                <div className="flexbox-items">
                    <div id="time-of-match">{`${chosenGame.utcDate.slice(11,16)}`}</div>
                    <div id="date-of-match">{`${chosenGame.utcDate.slice(0,10)}`}</div>
                    <br />
                    <div id="vs"><div className="circle"></div><hr id="vs-line"/><div className="circle"></div></div>
                </div>
                <div className="away-team flexbox-items">
                    <div className="away-team logo"></div>
                    <br />
                    <div className="away-team name">{`${chosenGame.awayTeam.name}`}</div>
                </div>
            </div>
            <div id="score-container">
                <div className="homecomming-team score">
                {chosenGame.score.fullTime.homeTeam === null ? 
                   ('0') 
                 : 
                    (`${chosenGame.score.fullTime.homeTeam}`)
                }</div>
                <div className="away-team score">{chosenGame.score.fullTime.awayTeam === null ? 
                   ('0') 
                 : 
                    (`${chosenGame.score.fullTime.awayTeam}`)
                }
                </div>
            </div>
            <hr id="bottom-devider" />
            <div id="close-details"></div>
            <div className="btn-group btn-group-toggle btn-block " data-toggle="buttons">
            <button 
     id="trigger" 
     type="button"
     className='btn btn-success btn-lg'
     value="Click Here To pop up window" 
     onClick = {(event)=> {onRouteChange('kickoff')} }
     >Go back</button>

<button 
     id="trigger" 
     type="button"
     className='btn btn-success btn-lg'
     value="Click Here To pop up window" 
     onClick = {()=> {findTeamSpecificInfo()} }
     >test</button>

     </div>
        </div>
    </div>
   </div>
  );
  }
};

export default ScoreTable;
