import React from "react";
import "./ScoreTable.css";



class ScoreTable extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render(){
    const { handleClick } = this.props;
  return (
   <div>
     
    <div id="match-details-curtain">
        <div id="match-details-container">
            <div id="title">MATCH STATISTICS</div>
            <div id="teams-container">
                <div className="homecomming-team flexbox-items">
                    <div className="homecomming-team logo"></div>
                    <br />
                    <div className="homecomming-team name"></div>
                </div>
                <div className="flexbox-items">
                    <div id="time-of-match"></div>
                    <div id="date-of-match"></div>
                    <br />
                    <div id="vs"><div className="circle"></div><hr id="vs-line"/><div className="circle"></div></div>
                </div>
                <div className="away-team flexbox-items">
                    <div className="away-team logo"></div>
                    <br />
                    <div className="away-team name"></div>
                </div>
            </div>
            <div id="score-container">
                <div className="homecomming-team score"></div>
                <div className="away-team score"></div>
            </div>
            <hr id="bottom-devider" />
            <div id="close-details"></div>
            <button 
     id="trigger" 
     type="button"
     className='button1'
     value="Click Here To pop up window" 
     onClick = {()=> handleClick() } />
        </div>
    </div>
   </div>
  );
  }
};

export default ScoreTable;
