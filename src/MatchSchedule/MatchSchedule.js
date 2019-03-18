import React from "react";
import "./MatchSchedule.css";

class MatchSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        chosenGame: ''
    }
  }
 // czy da sie wszystko wrzucić do głównej?
  onGameHandleClick= (event) =>{
    console.log(event.target.id)
    console.log(event.target.id.slice(-1));
    this.setState({chosenGame: this.props.games[event.target.id.slice(-1)]})
    console.log(this.state.chosenGame)
  }
  render() {
    const { handleClick, games } = this.props;
    return (
      <div>
        <div id="match-details-curtain">
          <div id="match-details-container">
            <div id="title">Kickoff Schedule</div>
            <div id="schedule-container">
              <ul className="scheduled-list">
                {games.map((item,i)=>{
                    return (<li key={i} 
                        id={`proposedMatch${i}`}
                        onClick={this.onGameHandleClick}>
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
