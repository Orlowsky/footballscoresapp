import React, { Component } from "react";
import ScoreTable from "./ScoreTable/ScoreTable";
import MatchSchedule from "./MatchSchedule/MatchSchedule";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesScheduled: [],
      route: "kickoff",
      chosenGame: ""
    };
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  onGameHandleClick = event => {
    console.log(event.target.id);
    console.log(event.target.id.slice(-1));
    this.setState({
      chosenGame: this.state.gamesScheduled[event.target.id.slice(-1)]
    });
    console.log(this.state.chosenGame);
  };

  handleClick = () => {
    this.setState({ gamesScheduled: [] });

    console.log("działa");
    const YOUR_API_TOKEN = "19ca3d7a443c40eeb178ee5812bde0d4";
    fetch("https://api.football-data.org/v2/competitions/CL/matches", {
      headers: { "X-Auth-Token": YOUR_API_TOKEN },
      dataType: "json",
      type: "GET"
    })
      .then(response => response.json())
      .then(json => {
        json.matches.forEach((match, index) => {
          if (match.status === "SCHEDULED") {
            console.log(match);
            this.setState(state => {
              const gamesScheduled = state.gamesScheduled.concat(match);
              return {
                gamesScheduled
              };
            });
          }
        });

        console.log(this.state.gamesScheduled);
      });
  };

  render() {
    return (
      <div className="App">
        {/*  <ScoreTable />  */}
        {this.state.route === "kickoff" ? (
          <div>
            <MatchSchedule
              handleClick={this.handleClick}
              games={this.state.gamesScheduled}
              onRouteChange={this.onRouteChange}
              onGameHandleClick={this.onGameHandleClick}
            />
          </div>
        ) : (
          <ScoreTable
            onRouteChange={this.onRouteChange}
            chosenGame={this.state.chosenGame}
          />
        )}
      </div>
    );
  }
}

export default App;

/* fetch('http://localhost:3000/imageurl', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      input: this.state.input
    })
  })
  .then(response => response.json()) */
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */
